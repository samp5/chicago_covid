import sys
import csv
import os
import requests
import datetime
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import math
from enum import Enum

# API LINK and APP_TOKEN
api_link = "https://data.cityofchicago.org/resource/urdi-w8wq"
APP_TOKEN = "n6dWeITRnFzWh0BubBjocc2iP"

# Error class for bad fetch
class FetchError(Exception):
    def __init__(self, request_response_code): 
        self.message = f"Requests module returned error code {request_response_code} while fetching wastewater data"
        super().__init__(self.message)

# Error class for Invalid Data reference
class Invalid_Data_Reference(Exception):
    def __init__(self): 
        self.message = \
                "Attempt to reference data that is invalid or does not exists"
        super().__init__(self.message)

# Error class for missing CSV
class FileDNE(Exception):
    def __init__(self, file_path):
        self.message = f"Attempt to access file which does not exist at {file_path}"
        super().__init__(self.message)

def datetime_to_str(datetime_obj):
    return datetime_obj.strftime("%d-%m-%Y")

def file_mod_time(file_path):
    if not os.path.isfile(file_path):
        raise FileDNE(file_path = file_path);

    mod_time = os.path.getmtime(file_path)
    mod_date = datetime.datetime.fromtimestamp(mod_time)

    return mod_date
def print_menu ():
    print("Select an option\n\
            (1) Output Year over year data\n\
            (2) Output Simple Timeline data\n\
            (3) Quit\n")
            
    return;

# Weighting functions for data weighting.
def linear_weighting(num_of_elements: int) -> list[int]:
    return [i for i in range(1, num_of_elements + 1)]
def log2_weighting(num_of_elements: int) -> list[float]:
    return [math.log2(i) for i in range(1, num_of_elements + 1)]
def exponential_weighting(num_of_elements: int, alpha: float = 0.5) -> list[float]:
    return [ (1 - alpha) ** i for i in range(num_of_elements + 1, 0, -1)]

class Weighting_Functions(Enum):
    Linear  = linear_weighting
    Log2 = log2_weighting
    Ema = exponential_weighting

class Dataset():
    def __init__(self, api_link = api_link):
        self.json = {} 
        self.api_link = api_link
        self.timeline = [] 
        # number of days for rolling average
        self.roll = 0

        # i guess this is where I do the file name parsing 
        self.csv_file_name = "" if len(sys.argv) == 1 else sys.argv[1]

        if self.csv_file_name != "":
            self.file_path = os.path.join(os.getcwd(), self.csv_file_name)

    def _fetch(self, csv = False):
        """
        Fetch either json or CSV from api_link
        """
        # only fetch for csv option if the file is old enough (user decided)
        if csv and os.path.isfile(self.file_path):
            file_mod_t = file_mod_time(self.file_path)
            if file_mod_t.day < datetime.datetime.now().day:
                print(f"The csv file, {self.csv_file_name} was last modified {datetime_to_str(file_mod_t)}, do you want to download new data? (y/n)")
                response = input()
                if response == "n":
                    return
            else:
                return

        # alter the api_link for the corrent format
        self.api_link = self.api_link + ".csv" if csv else self.api_link + ".json"

        params = { "$$app_token" : APP_TOKEN }

        response = requests.get(self.api_link, params= params)
        if response.status_code == 200:
            if csv:
                # write the new data into a csv file
                with open("covid_data.csv", mode = "wb") as file:
                    file.write(response.content)
            else:
                self.json = response.json()
        else:
            raise FetchError(response.status_code) 

    def make_timeline(self, print_zeros = False, csv_source = False, cut_off_date = datetime.date(2000, 1, 1)):
        """
        Create a dict of {date: effective conc} where
        effective conc is RC/FSI * C_0 and date is a datetime.date object
        """
        if csv_source:
            self._fetch(csv = True)
            self.csv_extract(print_zeros = print_zeros, cut_off_date = cut_off_date)
            return

        if not self.json:
            self._fetch()
            if not self.json:
                raise Invalid_Data_Reference 

        zero_count = 0
        record_count = 0
        temp_dict = {}
        for item in self.json:
            #set dat format to be read
            date_format = "%Y-%m-%d"
            date_str = item["sample_collect_date"][0:10]
            date_datetime_obj = datetime.datetime.strptime(date_str, date_format)
            date = datetime.date(date_datetime_obj.year, date_datetime_obj.month, date_datetime_obj.day)

            if date < cut_off_date:
                continue

            # add new dates to dict and initialize value to 0
            if date not in temp_dict:
                temp_dict[date] = 0;

            # calculation
            RC = float(item["n1_copies_l"])
            FSI = float(item["pmmov_copies_l"])
            C_0 = RC
            if (FSI == 0 or RC == 0):
                # catch zeros and print if wanted
                if print_zeros:
                    print(f"Encountered zero value for sewershed {item['sewershed']},record ID, {item['record_id']}")
                zero_count += 1
                continue

            effective_conc = RC / FSI * C_0
            
            #increment the effective_conc for this date.
            temp_dict[date] += effective_conc
            record_count += 1

        # set the timeline to a sorted list of tuples
        self.timeline = sorted(temp_dict.items())

        print(f"{zero_count} records with 0 concentration for one or more categories, {record_count} valid records added")

    def csv_extract(self, print_zeros = False, cut_off_date = datetime.date(2000, 1, 1)):

        # make sure its a file
        while not os.path.isfile(self.file_path):
            print(f"{self.csv_file_name} is not a file in the current" +
                    f" working directory, {os.getcwd()},")
            user_input = input("Please input the name of the csv" +
                                  " file in the current working directory: ")
            self.file_path = os.path.join(os.getcwd(), user_input)

        #initialize dict
        temp_dict = {}
        zero_count = 0
        record_count = 0

        # set constants for rows
        SAMPLE_COLLECT_DATE = 2
        RAW_C = 3
        PMMOV = 4
        SEWERSHED = 0
        RECORD_ID = 6

        #extract data
        with open(self.file_path) as csvfile:
            reader = csv.reader(csvfile)
            # skip the column headings
            reader.__next__(); 
            for row in reader:
                # skip any rows that are missing values
                if '' in row:
                    continue

                date_str = row[SAMPLE_COLLECT_DATE][:10]

                #check for different date strings: this is for the csv downloaded from chicago data portal
                # versus the csv from the API
                date_format = "%Y-%m-%d" if "-" in date_str else "%m/%d/%Y" 
                date_datetime_obj = datetime.datetime.strptime(date_str, date_format)
                date = datetime.date(date_datetime_obj.year, date_datetime_obj.month, date_datetime_obj.day)
                if date < cut_off_date:
                    continue

                # add date to dict if its not already there and initialize it to zero
                if date not in temp_dict:
                    temp_dict[date] = 0;

                # same logic as make timeline
                RC = float(row[RAW_C].strip())
                FSI = float(row[PMMOV].strip())
                C_0 = RC

                if (FSI == 0 or RC == 0):
                    if print_zeros:
                        print(f"Encountered zero value for sewershed {row[SEWERSHED]},record ID, {row[RECORD_ID]}")
                    
                    zero_count += 1
                    continue
                effective_conc = RC / FSI * C_0
                temp_dict[date] += effective_conc

                record_count += 1
        self.timeline = sorted(temp_dict.items())
        print(f"{zero_count} records with 0 concentration for one or more categories, {record_count} valid records added")

    def year_over_year(self):
         """
         make year over year data
         """
         # initialize year lists and concentration lists
         dateList22, dateList23, dateList24 = [], [], [] 
         effective_concList22, effective_concList23, effective_concList24 = [], [], []
         years = [dateList22, dateList23, dateList24]
         effective_concs = [effective_concList22, effective_concList23, effective_concList24]

         for dt, effective_conc in self.timeline:
             if dt.year == 2022:
                 dt = datetime.datetime(2000, dt.month, dt.day)
                 dt = dt.strftime("%Y-%m-%d")
                 dateList22.append(dt)
                 effective_concList22.append(effective_conc / 10000)
             elif dt.year == 2023:
                 dt = datetime.datetime(2000, dt.month, dt.day)
                 dt = dt.strftime("%Y-%m-%d")
                 dateList23.append(dt)
                 effective_concList23.append(effective_conc / 10000)
             elif dt.year == 2024:
                 dt = datetime.datetime(2000, dt.month, dt.day)
                 dt = dt.strftime("%Y-%m-%d")
                 dateList24.append(dt)
                 effective_concList24.append(effective_conc / 10000)

         with open("year_over_year.txt", "w") as file:
            for i in range(0, len(years)):
                this_year = 2022 + i
                file.write(f"\n\n{this_year} DATE LIST:\n")
                list_str = "[" 
                for item in years[i]:
                    item = str(item)
                    list_str = list_str + "'" + item + "'" + ","
                list_str = list_str[:-1] + "]"
                file.write(list_str)
                list_str = ""
                file.write(f"\n{this_year}: CONC LIST:\n")
                list_str = "[" 
                for item in effective_concs[i]:
                    item = str(item)
                    list_str = list_str + item + ","
                list_str = list_str[:-1] + "]"
                file.write(list_str)

    def rolling_average(self, x_rolling = 14, weighting_function = exponential_weighting):
         self.roll = x_rolling
         dateList =[]
         effective_concList = []

         LOWER_LIMIT = x_rolling

         # default alpha limit of 0.25, default rolling average function of exponential_weighting
         weightingList = weighting_function(x_rolling, alpha = 0.25) 
         # sum weight list for weight total
         weight_totals = sum(weightingList)

         for i in range(0,len(self.timeline)):

             # find sublist with length based on length of roll
             sublist = [self.timeline[j][1] for j in range(i-LOWER_LIMIT, i-1)]

             # weight that sublist
             weighted_sublist = [sublist[i] * weightingList[i] for i in range(0,len(sublist))]

             # find the sum of the weighted sublist
             total = sum(weighted_sublist)

             # average it with the weight totals
             average = total / weight_totals

             # append the average and the associated date
             effective_concList.append(average)
             dateList.append(self.timeline[i][0])

         # zip together the date list and the effective_conc list into a list of tuples.
         self.timeline = list(zip(dateList, effective_concList))

    def print_time_series(self):
        newdateList = []
        newconcList = []

        for date, conc in self.timeline:
            newdateList.append(date.strftime("%Y-%m-%d"))
            newconcList.append(conc)


        with open("time_series.txt", "w") as file:
            file.write("NEW DATE LIST:\n")
            list_str = "[" 
            for item in newdateList:
                item = str(item)
                list_str = list_str + "'" + item + "'" + ","
            list_str = list_str[:-1] + "]"
            file.write(list_str)
            list_str = ""
            file.write("\nNEW CONC LIST:\n")
            list_str = "[" 
            for item in newconcList:
                item = str(item)
                list_str = list_str + item + ","
            list_str = list_str[:-1] + "]"
            file.write(list_str)

if __name__ == "__main__":

    # this is a bad way to parse command line arguments, but is what it is
    if len(sys.argv) ==  2: # if we have a filename  at least
        csv_data_source = True
        month, day, year = 1, 1, 2000
        rolling = 14

    elif len(sys.argv) > 2: # if we have dates and other input
        csv_data_source = True
        rolling, date = sys.argv[2], sys.argv[3]
        date = date.split('-')
        while len(date) < 3:
            user_input = input("Invalid date format, please enter in M-DD-YYYY")
            date = user_input.split('-')
        else:
            month, day, year = int(date[0]),int(date[1]),int(date[2]),
    else:
        csv_data_source = False
        month, day, year = 1, 1, 2000
        rolling = 14

    cut_off = datetime.date(year, month, day)

    Covi = Dataset()
    Covi.make_timeline(print_zeros=False, csv_source=csv_data_source, cut_off_date= cut_off)
    Covi.rolling_average(x_rolling=int(rolling));

    selection = ""
    while selection != "3":
        os.system("clear")
        print_menu();
        selection = input("?: ")

        if selection == "1":
            Covi.year_over_year()
            print("Done: output to year_over_year.txt!")
            input("...press any key to continue")
        elif selection == "2":
            Covi.print_time_series()
            print("Done: output to time_series.txt!")
            input("...press any key to continue")
        elif selection != "3":
            input("Invalid selection, press any key to continue")
            
