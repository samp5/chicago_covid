## Covid Wastewater data is the most informative data available
 
This chart shows the SARS-CoV-2 virus concentration present in samples of wastewater taken from across Chiacgo. The level of virus in wastewater is a leading indicator, meaning it precedes the change in clinical case counts or hospitalizations.

### the data
- Datapoints are a weighted rolling 10-day average.
- The weighting function used is EMA, such that each new Covid Data point is previous datapoints are weighted exponentially lower the older they are. 
- Raw data is obtained from the [Chicago Data Portal](https://data.cityofchicago.org/Health-Human-Services/COVID-19-Wastewater-Detection/urdi-w8wq/about_data)
- Things that affect "raw concentration"
    - Dilution (inflow events like rain)
    - Pop size
    - Flow rates
    - Temperature and time-dependent degradation of virus
    - Proportion of virus in the sample that lab is able to quantify
    - PCR inhibition (by other chemicals in wastewater)
- Raw concentration can be normalized two ways 
    1. NC (normalized concentration) = (Raw concentration) * (Flow rate) / (Pop size)
    
    2. Use a fecal strength indicator (FSI) so NC = RC/FSI
        - The normalizer in this data is PMMoV (pepper mild mottle virus) which produced a unitless ratio
        - To obtain a concentration unit: $C_0$, $NC = \frac{NC}{FSI} \times C_0$

