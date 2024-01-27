import React from 'react';
import Plot from 'react-plotly.js';

// this is where stuff happens
// top most component in the hierarchy
class Graph extends React.Component 
{
		// this is where I can declare all my variables and do other function work to get the data I want
	constructor(props){
		super(props);
		
		this.handleJsonChange = this.handleJsonChange.bind(this);
		this.getPlots = this.getPlots.bind(this);
		this.handleNewPlot = this.handleJsonChange.bind(this);



		let x_list = ['2022-02-15', '2022-02-16', '2022-02-17', '2022-02-21', '2022-02-22', '2022-02-23', '2022-02-24', '2022-02-28', '2022-03-01', '2022-03-02', '2022-03-03', '2022-03-07', '2022-03-08', '2022-03-09', '2022-03-10', '2022-03-14', '2022-03-15', '2022-03-16', '2022-03-17', '2022-03-21', '2022-03-22', '2022-03-23', '2022-03-24', '2022-03-28', '2022-03-29', '2022-03-30', '2022-03-31', '2022-04-04', '2022-04-05', '2022-04-06', '2022-04-07', '2022-04-11', '2022-04-12', '2022-04-13', '2022-04-14', '2022-04-18', '2022-04-19', '2022-04-20', '2022-04-21', '2022-04-25', '2022-04-26', '2022-04-27', '2022-04-28', '2022-05-02', '2022-05-03', '2022-05-04', '2022-05-05', '2022-05-09', '2022-05-10', '2022-05-11', '2022-05-12', '2022-05-16', '2022-05-17', '2022-05-18', '2022-05-19', '2022-05-23', '2022-05-24', '2022-05-25', '2022-05-26', '2022-05-31', '2022-06-01', '2022-06-02', '2022-06-06', '2022-06-07', '2022-06-08', '2022-06-09', '2022-06-13', '2022-06-14', '2022-06-15', '2022-06-16', '2022-06-20', '2022-06-21', '2022-06-22', '2022-06-23', '2022-06-27', '2022-06-28', '2022-06-29', '2022-06-30', '2022-07-05', '2022-07-06', '2022-07-07', '2022-07-08', '2022-07-11', '2022-07-12', '2022-07-13', '2022-07-14', '2022-07-18', '2022-07-19', '2022-07-20', '2022-07-21', '2022-07-25', '2022-07-26', '2022-07-27', '2022-07-28', '2022-08-01', '2022-08-02', '2022-08-03', '2022-08-04', '2022-08-08', '2022-08-09', '2022-08-10', '2022-08-11', '2022-08-15', '2022-08-16', '2022-08-17', '2022-08-18', '2022-08-22', '2022-08-23', '2022-08-24', '2022-08-25', '2022-08-29', '2022-08-30', '2022-08-31', '2022-09-01', '2022-09-06', '2022-09-07', '2022-09-08', '2022-09-12', '2022-09-13', '2022-09-14', '2022-09-15', '2022-09-19', '2022-09-20', '2022-09-21', '2022-09-22', '2022-09-26', '2022-09-27', '2022-09-28', '2022-09-29', '2022-10-03', '2022-10-05', '2022-10-06', '2022-10-10', '2022-10-11', '2022-10-12', '2022-10-13', '2022-10-17', '2022-10-18', '2022-10-19', '2022-10-20', '2022-10-24', '2022-10-25', '2022-10-26', '2022-10-27', '2022-10-31', '2022-11-01', '2022-11-02', '2022-11-03', '2022-11-07', '2022-11-08', '2022-11-09', '2022-11-10', '2022-11-14', '2022-11-15', '2022-11-16', '2022-11-17', '2022-11-21', '2022-11-22', '2022-11-23', '2022-11-28', '2022-11-29', '2022-11-30', '2022-12-01', '2022-12-05', '2022-12-06', '2022-12-07', '2022-12-08', '2022-12-12', '2022-12-13', '2022-12-14', '2022-12-15', '2022-12-19', '2022-12-20', '2022-12-21', '2022-12-22', '2022-12-27', '2022-12-28', '2022-12-29', '2023-01-03', '2023-01-04', '2023-01-05', '2023-01-09', '2023-01-10', '2023-01-11', '2023-01-12', '2023-01-16', '2023-01-17', '2023-01-18', '2023-01-19', '2023-01-23', '2023-01-24', '2023-01-25', '2023-01-26', '2023-01-30', '2023-01-31', '2023-02-01', '2023-02-02', '2023-02-06', '2023-02-07', '2023-02-08', '2023-02-09', '2023-02-13', '2023-02-14', '2023-02-15', '2023-02-16', '2023-02-20', '2023-02-21', '2023-02-22', '2023-02-23', '2023-02-27', '2023-02-28', '2023-03-01', '2023-03-02', '2023-03-06', '2023-03-07', '2023-03-08', '2023-03-09', '2023-03-13', '2023-03-14', '2023-03-15', '2023-03-16', '2023-03-20', '2023-03-21', '2023-03-22', '2023-03-23', '2023-03-27', '2023-03-28', '2023-03-29', '2023-03-30', '2023-04-03', '2023-04-04', '2023-04-05', '2023-04-07', '2023-04-10', '2023-04-11', '2023-04-12', '2023-04-13', '2023-04-17', '2023-04-18', '2023-04-19', '2023-04-20', '2023-04-24', '2023-04-25', '2023-04-26', '2023-04-27', '2023-05-01', '2023-05-02', '2023-05-03', '2023-05-04', '2023-05-08', '2023-05-09', '2023-05-10', '2023-05-11', '2023-05-15', '2023-05-16', '2023-05-17', '2023-05-18', '2023-05-22', '2023-05-23', '2023-05-24', '2023-05-25', '2023-05-30', '2023-05-31', '2023-06-01', '2023-06-05', '2023-06-06', '2023-06-07', '2023-06-08', '2023-06-12', '2023-06-13', '2023-06-14', '2023-06-15', '2023-06-19', '2023-06-20', '2023-06-21', '2023-06-22', '2023-06-26', '2023-06-27', '2023-06-28', '2023-06-29', '2023-07-03', '2023-07-05', '2023-07-06', '2023-07-07', '2023-07-10', '2023-07-11', '2023-07-12', '2023-07-13', '2023-07-17', '2023-07-18', '2023-07-19', '2023-07-20', '2023-07-24', '2023-07-25', '2023-07-26', '2023-07-27', '2023-07-31', '2023-08-01', '2023-08-02', '2023-08-03', '2023-08-07', '2023-08-08', '2023-08-09', '2023-08-10', '2023-08-14', '2023-08-15', '2023-08-16', '2023-08-17', '2023-08-21', '2023-08-22', '2023-08-23', '2023-08-24', '2023-08-28', '2023-08-29', '2023-08-30', '2023-08-31', '2023-09-05', '2023-09-06', '2023-09-07', '2023-09-08', '2023-09-11', '2023-09-12', '2023-09-13', '2023-09-14', '2023-09-18', '2023-09-19', '2023-09-20', '2023-09-21', '2023-09-25', '2023-09-26', '2023-09-27', '2023-09-28', '2023-10-02', '2023-10-03', '2023-10-04', '2023-10-05', '2023-10-09', '2023-10-10', '2023-10-11', '2023-10-12', '2023-10-16', '2023-10-17', '2023-10-18', '2023-10-19', '2023-10-23', '2023-10-24', '2023-10-25', '2023-10-26', '2023-10-30', '2023-10-31', '2023-11-01', '2023-11-02', '2023-11-06', '2023-11-07', '2023-11-08', '2023-11-09', '2023-11-13', '2023-11-14', '2023-11-15', '2023-11-16', '2023-11-20', '2023-11-21', '2023-11-22', '2023-11-24', '2023-11-27', '2023-11-28', '2023-11-29', '2023-11-30', '2023-12-04', '2023-12-05', '2023-12-06', '2023-12-07', '2023-12-11', '2023-12-12', '2023-12-13', '2023-12-14', '2023-12-18', '2023-12-19', '2023-12-20', '2023-12-21', '2023-12-26', '2023-12-27', '2023-12-28', '2023-12-29', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05', '2024-01-08', '2024-01-09', '2024-01-10', '2024-01-11', '2024-01-17', '2024-01-18', '2024-01-19']

	
		let y_list = [10787.168933576633, 7915.748622093149, 5899.395173186906, 4219.353563109993, 529.0974028943529, 554.9761316793081, 454.033660211209, 338.25034052641746, 316.50410445876634, 167.46476763184899, 143.12695316288665, 109.12742710244446, 79.82497709809634, 59.12130659973323, 39.312334878763984, 27.623191707178563, 25.831335872227157, 25.805039230823144, 22.925717581211273, 22.420424407751497, 19.251906297879486, 14.54053219228381, 18.987376904187414, 13.844739148651225, 183.64541769789795, 140.0293252190333, 106.30103077609334, 111.59692435876538, 89.9092302782417, 74.07942071180265, 85.94394569810086, 64.29912364515326, 510.00414817650255, 372.48853143037906, 1117.0140045285973, 863.4405703203387, 887.886629655955, 692.032409229797, 1532.1551061853988, 1198.6432083875827, 943.0597790900194, 735.77600665593, 747.1867818064919, 594.1210037129562, 666.4907872174895, 512.5652694572688, 552.0703356393544, 345.57862971435907, 976.3842861217106, 1058.1560825295717, 1174.7094704236752, 897.0546798903687, 1482.9494233052742, 1210.9604531696575, 1460.7239609399937, 1344.0956596705082, 1633.6970399665224, 1501.6825841426278, 1522.0082179966912, 1972.717587555012, 1716.680307185757, 3551.917433072371, 2985.158553867532, 2519.9814175541337, 1939.7245024009637, 2135.447393713786, 1648.0333885995863, 1342.3905901877579, 973.0110989631559, 772.9638839625007, 7678.1855301873375, 9623.177362723287, 7204.513422044715, 5554.543458298313, 6334.87433364226, 5531.917244326231, 4227.93483539435, 3479.2593352499557, 3059.255830624039, 1972.5036266526083, 2985.7796433134276, 2377.583669858269, 1933.7904444575652, 37939.207823479956, 29674.866685419052, 23061.51066042344, 21556.680353234246, 16730.79794140095, 13267.427685018309, 19044.36135534972, 14935.839329119719, 11606.920881271695, 6009.5538959747955, 5970.513628684814, 4704.037739761322, 3269.470698083843, 2756.393682179563, 2437.4923302029, 1437.7159416621475, 13674.626361223336, 10266.730576300835, 7781.302861464343, 6579.77386844264, 5144.8334317217, 4912.075750971294, 3720.6450746506703, 11967.388415001702, 9689.197249167571, 7542.665847067488, 5772.410576007625, 4451.719245353532, 3744.878184174076, 2800.711382442565, 3868.321004026304, 3149.8810932381134, 1891.1027408369616, 6361.844405628803, 4886.7752088538955, 3753.0659638525603, 2937.6572322068278, 2270.0956420561065, 2105.3831391876324, 1531.5128979324534, 1193.6264673898331, 921.9335751902739, 413.39903425263714, 376.5431872559244, 304.27997710778106, 256.752492383442, 210.0648621352525, 184.0194878849472, 139.34311232061646, 799.4457567535651, 692.4838233350915, 813.0974585858306, 654.0483197855375, 551.6115000093457, 458.9084359714028, 436.0271709696457, 1047.5192441637782, 793.4283752347277, 712.4794332401685, 559.2755054160828, 1142.7532766890772, 1122.278769412798, 17474.40348914025, 13338.019576282575, 11338.76171969489, 8860.11616262676, 6697.848626678222, 5042.104250802862, 3811.072851309103, 2828.6052135979235, 2123.235340689512, 482.7382032653719, 523.1691487611955, 393.234850301162, 2300.2289974661244, 1987.944396888116, 3143.696566452592, 2914.402666464567, 11425.081376595126, 13645.859324970597, 12758.90959451542, 16221.307173106985, 25172.359474757646, 19636.606342989937, 17222.9643012244, 16604.94086769694, 22155.858314822934, 19847.157758179095, 22510.429244706163, 21588.639076294447, 34963.49485925325, 27515.678200005186, 32810.231518404325, 28484.374147473794, 24225.044619155116, 60466.01757864805, 48862.58572657508, 38400.33221356495, 30985.89604117847, 28165.189183107777, 27186.73164651468, 20094.557995905583, 19460.119683620902, 270956.98133686424, 206558.6328856768, 158127.38289748027, 135322.83279260722, 108853.06362932212, 87021.95877286712, 65506.81075719164, 131842.2527073722, 101042.49778116956, 57186.09323521225, 44452.9657867291, 34196.28525539121, 25110.930604237423, 20525.755025778544, 15242.880316825138, 16241.896939645545, 8119.912670942366, 76059.23969627262, 57291.96211854857, 58888.65986980124, 50615.34590348045, 40537.57674825195, 30714.78255000548, 23582.65832176635, 18524.136303517815, 14293.178085893396, 12425.311021631152, 9423.83686735054, 8301.23198981884, 11468.803155475172, 40997.77248388678, 75556.18323215672, 78648.90339489473, 59033.140672153255, 47419.04669625819, 35364.461024404955, 29577.98969905594, 22372.401873859864, 20517.708626477506, 16660.864591575842, 12332.887207371316, 10508.213006535536, 73384.97525620557, 56297.333059271754, 45561.7559882373, 34452.09649141117, 27046.22759912526, 22020.766664171464, 31387.3643542815, 23647.522277509, 20368.554137975152, 10459.704470090834, 8086.772683493979, 6127.049543446354, 4607.006458480213, 3424.4761690963214, 2744.58936807758, 951.0158530834201, 879.7218813237665, 574.4173784446613, 479.0030958119468, 774.9476513129334, 585.6720755409993, 452.8555449064496, 580.8020710264689, 445.77723543188796, 415.3843375811256, 346.6246902508907, 540.8576551750215, 506.15417121687483, 417.6242707829036, 1566.3759995289174, 1904.7613622524807, 1442.1306143655743, 1445.5195202302689, 1102.4821354060587, 1721.4509193058316, 1650.731290988609, 1243.7647514358355, 1962.1449153507083, 1387.6996820498607, 1942.5781660070754, 1530.970738056564, 3069.830901056743, 2315.831133438413, 1740.4428848709829, 1291.6850396783323, 2567.6292271982697, 1858.5980300040335, 1445.7454373978564, 1066.2314585126421, 833.0517492204108, 492.92512397176415, 377.4843372491444, 281.4778871959247, 437.65059564810633, 210.1786636822066, 237.76678638928664, 176.11880832939136, 194.54216051666666, 159.44352044088504, 137.00434950684848, 108.4088753497173, 123.21987082597339, 75.48074971273147, 1387.9251194153103, 1037.7173979557183, 4792.7958681907385, 3633.570559414662, 3186.4988869037934, 2399.1721442410426, 2404.851529305022, 1809.05452780339, 48295.121342599676, 36506.46021194582, 30371.292411367594, 22919.755576679578, 17404.30356960648, 13183.52575444699, 10128.862521363328, 7593.945607943794, 6219.601091201737, 1160.7455535203474, 3890.6677196375263, 2844.9695544739357, 2753.335371491592, 4111.897587268011, 5975.9785746740745, 5502.529643751551, 4546.442186941495, 3718.443227633642, 2941.6018088023657, 2595.9702402350485, 2081.0848417416682, 2446.155811822861, 2895.117613388403, 2013.460364315817, 1645.1139383313066, 1283.64291943025, 3857.8210136954444, 2941.012210214083, 2528.4282917484697, 3264.4704243824144, 5776.614208868319, 4392.662931399679, 4071.196160876158, 3180.4194822944073, 3359.237167121442, 2633.5269227201075, 2241.8717247170475, 1720.120397590193, 2493.910679702191, 1760.4859627973246, 1538.225930046269, 1258.205305185447, 2445.2144591528895, 1954.900697009767, 1488.476068654587, 1121.4659178232434, 875.4121406055784, 655.8948330971226, 566.9299436316976, 442.93108462852217, 1319.5253830473835, 912.1474070482398, 1100.2655854555182, 1626.6049478944954, 2843.4520665664068, 2382.218184034008, 2373.0634197994937, 3535.205518834549, 2688.022150413438, 2235.7275174745228, 3277.4290959413424, 3025.545087817454, 6106.216852064217, 9069.535531232574, 8873.185055491474, 8424.322595449252, 8577.905678727717, 12868.294418332676, 16918.43730756154, 19897.780666786108, 25774.68339422989, 22742.272783202112, 145281.11847333043, 111523.09467435973, 98842.79093065436, 85570.24963145789, 64904.88695499125, 51001.27389826482, 62473.07334774412, 65611.58254276188, 64115.90159651707, 38875.74320669688, 43982.514243956364, 33561.86349985541, 25061.344785214642, 21302.55631827791, 16284.78381051224, 13024.011688024184, 12071.39395672902, 8450.771119773939, 9478.058051099359, 41232.028582812265, 31461.517039956365, 23559.589391027537, 17517.89883163757, 13251.18652555937]

		const plotJson = {
			data: [{
					// x: [1, 2, 7, 8],
					//y: [1, 3, 2, 6],
					x: x_list,
					y: y_list,
					type: 'scatter',
					name: 'shan',
					mode: 'lines',
					line: {
						color:'#0e2d4c',
						width: 2,
					}
				}],
			layout: {
				yaxis:{
					title: 'Effective Wastewater Levels (Gene copies/L)',
					autotick: true,
					showgrid: true,
					automargin:true, 

					font:{
						color: '#0e2d4c',
						family:',serif'
					},
				},
				xaxis:{
					type: 'date',
					autorange: true,
					title: 'Date',
					showgrid: true,
					automargin:true, 
					font:{
						color: '#0e2d4c',
						family:'serif'
					},
					rangeselector: {buttons: [
        {
          count: 1,
          label: '1m',
          step: 'month',
          stepmode: 'backward'
        },
        {
          count: 6,
          label: '6m',
          step: 'month',
          stepmode: 'backward'
        },
				{
        step: 'year',
        stepmode: 'todate',
        count: 1,
        label: 'YTD'
				},
        {step: 'all'}
      ]},
				},
				margin: {t:10, r:10, l: 10, b:20},
				title: {
					text:'Chicago Covid Wastewater data, 10-day weighted rolling average', 
					automargin:true, 
					font: {
						family: ' ,serif',
						color: '#0e2d4c',
					}
				}
			}
		}

		this.state = {
			json: plotJson,
		}
	}

	handleJsonChange = newJSON => {
		this.setState({json: newJSON});
	}
	
	handleNewPlot = option => {
		// here is where I need to parse the output of getPlot into a 
		// json that we can set the set of
		// eventually
		/*
		this.setState({
			json: newJSON,
		});
		*/
	}

	getPlots = (input) => {
		// here is where I need to parse the csv file in this directory
	};

	render() {

		return (
			// this is where I have my returnable html
			<div className="Graph">
				<Plot
					data={this.state.json.data}
					layout={this.state.json.layout}
					config={{displayModeBar: false}}
				/>
			</div>
		);
	}
}
export default Graph;
