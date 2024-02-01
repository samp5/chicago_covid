import React from 'react';
import Plot from 'react-plotly.js';

// this is where stuff happens
// top most component in the hierarchy
class YOYGraph extends React.Component 
{
		// this is where I can declare all my variables and do other function work to get the data I want
	constructor(props){
		super(props);
		
		this.handleJsonChange = this.handleJsonChange.bind(this);
		this.getPlots = this.getPlots.bind(this);
		this.handleNewPlot = this.handleJsonChange.bind(this);


	
		let year24 = {
					x: ['2000-01-02', '2000-01-03', '2000-01-04', '2000-01-05', '2000-01-08', '2000-01-09', '2000-01-10', '2000-01-11', '2000-01-17', '2000-01-18', '2000-01-19', '2000-01-22', '2000-01-23', '2000-01-24', '2000-01-25'],
					y: [2.130255631827791, 1.628478381051224, 1.3024011688024184, 1.207139395672902, 0.8450771119773939, 0.9478058051099358, 4.123202858281227, 3.1461517039956366, 2.3559589391027536, 1.7517898831637568, 1.3251186525559369, 1.0787168933576634, 0.7915748622093148, 0.6417807794667748, 0.46977808526405324],
					type: 'scattergl',
					name: '2024',
					fill: "tozeroy",
					hovertemplate:	'<b>2024 <b>%{x|%m-%d}: %{y:.2f}',
					mode: 'lines',
					line: {
						color:'#d3eb89',
						width: 3,
					}
				}  
		let year23 = {
					x: ['2000-01-03', '2000-01-04', '2000-01-05', '2000-01-09', '2000-01-10', '2000-01-11', '2000-01-12', '2000-01-16', '2000-01-17', '2000-01-18', '2000-01-19', '2000-01-23', '2000-01-24', '2000-01-25', '2000-01-26', '2000-01-30', '2000-01-31', '2000-02-01', '2000-02-02', '2000-02-06', '2000-02-07', '2000-02-08', '2000-02-09', '2000-02-13', '2000-02-14', '2000-02-15', '2000-02-16', '2000-02-20', '2000-02-21', '2000-02-22', '2000-02-23', '2000-02-27', '2000-02-28', '2000-03-01', '2000-03-02', '2000-03-06', '2000-03-07', '2000-03-08', '2000-03-09', '2000-03-13', '2000-03-14', '2000-03-15', '2000-03-16', '2000-03-20', '2000-03-21', '2000-03-22', '2000-03-23', '2000-03-27', '2000-03-28', '2000-03-29', '2000-03-30', '2000-04-03', '2000-04-04', '2000-04-05', '2000-04-07', '2000-04-10', '2000-04-11', '2000-04-12', '2000-04-13', '2000-04-17', '2000-04-18', '2000-04-19', '2000-04-20', '2000-04-24', '2000-04-25', '2000-04-26', '2000-04-27', '2000-05-01', '2000-05-02', '2000-05-03', '2000-05-04', '2000-05-08', '2000-05-09', '2000-05-10', '2000-05-11', '2000-05-15', '2000-05-16', '2000-05-17', '2000-05-18', '2000-05-22', '2000-05-23', '2000-05-24', '2000-05-25', '2000-05-30', '2000-05-31', '2000-06-01', '2000-06-05', '2000-06-06', '2000-06-07', '2000-06-08', '2000-06-12', '2000-06-13', '2000-06-14', '2000-06-15', '2000-06-19', '2000-06-20', '2000-06-21', '2000-06-22', '2000-06-26', '2000-06-27', '2000-06-28', '2000-06-29', '2000-07-03', '2000-07-05', '2000-07-06', '2000-07-07', '2000-07-10', '2000-07-11', '2000-07-12', '2000-07-13', '2000-07-17', '2000-07-18', '2000-07-19', '2000-07-20', '2000-07-24', '2000-07-25', '2000-07-26', '2000-07-27', '2000-07-31', '2000-08-01', '2000-08-02', '2000-08-03', '2000-08-07', '2000-08-08', '2000-08-09', '2000-08-10', '2000-08-14', '2000-08-15', '2000-08-16', '2000-08-17', '2000-08-21', '2000-08-22', '2000-08-23', '2000-08-24', '2000-08-28', '2000-08-29', '2000-08-30', '2000-08-31', '2000-09-05', '2000-09-06', '2000-09-07', '2000-09-08', '2000-09-11', '2000-09-12', '2000-09-13', '2000-09-14', '2000-09-18', '2000-09-19', '2000-09-20', '2000-09-21', '2000-09-25', '2000-09-26', '2000-09-27', '2000-09-28', '2000-10-02', '2000-10-03', '2000-10-04', '2000-10-05', '2000-10-09', '2000-10-10', '2000-10-11', '2000-10-12', '2000-10-16', '2000-10-17', '2000-10-18', '2000-10-19', '2000-10-23', '2000-10-24', '2000-10-25', '2000-10-26', '2000-10-30', '2000-10-31', '2000-11-01', '2000-11-02', '2000-11-06', '2000-11-07', '2000-11-08', '2000-11-09', '2000-11-13', '2000-11-14', '2000-11-15', '2000-11-16', '2000-11-20', '2000-11-21', '2000-11-22', '2000-11-24', '2000-11-27', '2000-11-28', '2000-11-29', '2000-11-30', '2000-12-04', '2000-12-05', '2000-12-06', '2000-12-07', '2000-12-11', '2000-12-12', '2000-12-13', '2000-12-14', '2000-12-18', '2000-12-19', '2000-12-20', '2000-12-21', '2000-12-26', '2000-12-27', '2000-12-28', '2000-12-29'],
					y:[6.046601757864805, 4.886258572657508, 3.840033221356495, 3.098589604117847, 2.816518918310778, 2.718673164651468, 2.009455799590558, 1.9460119683620902, 27.095698133686422, 20.65586328856768, 15.812738289748028, 13.532283279260723, 10.885306362932212, 8.702195877286712, 6.550681075719164, 13.184225270737219, 10.104249778116955, 5.718609323521225, 4.44529657867291, 3.419628525539121, 2.5110930604237423, 2.0525755025778545, 1.5242880316825138, 1.6241896939645546, 0.8119912670942366, 7.605923969627262, 5.729196211854856, 5.888865986980123, 5.061534590348045, 4.053757674825195, 3.0714782550005477, 2.358265832176635, 1.8524136303517815, 1.4293178085893397, 1.2425311021631154, 0.9423836867350539, 0.830123198981884, 1.1468803155475173, 4.099777248388678, 7.555618323215672, 7.864890339489473, 5.903314067215326, 4.74190466962582, 3.5364461024404954, 2.957798969905594, 2.2372401873859866, 2.0517708626477504, 1.6660864591575844, 1.2332887207371315, 1.0508213006535536, 7.338497525620556, 5.629733305927175, 4.556175598823731, 3.4452096491411166, 2.704622759912526, 2.2020766664171463, 3.13873643542815, 2.3647522277509, 2.036855413797515, 1.0459704470090834, 0.8086772683493979, 0.6127049543446353, 0.4607006458480213, 0.34244761690963216, 0.27445893680775796, 0.09510158530834201, 0.08797218813237666, 0.05744173784446613, 0.047900309581194685, 0.07749476513129334, 0.058567207554099936, 0.04528555449064496, 0.058080207102646886, 0.0445777235431888, 0.04153843375811256, 0.03466246902508907, 0.054085765517502146, 0.05061541712168748, 0.04176242707829036, 0.15663759995289175, 0.19047613622524806, 0.14421306143655743, 0.1445519520230269, 0.11024821354060586, 0.17214509193058317, 0.1650731290988609, 0.12437647514358355, 0.19621449153507084, 0.13876996820498608, 0.19425781660070754, 0.1530970738056564, 0.3069830901056743, 0.2315831133438413, 0.1740442884870983, 0.12916850396783322, 0.256762922719827, 0.18585980300040336, 0.14457454373978565, 0.10662314585126421, 0.08330517492204108, 0.04929251239717641, 0.03774843372491444, 0.028147788719592472, 0.04376505956481063, 0.021017866368220662, 0.023776678638928662, 0.017611880832939134, 0.019454216051666664, 0.015944352044088502, 0.013700434950684848, 0.01084088753497173, 0.012321987082597338, 0.007548074971273146, 0.13879251194153103, 0.10377173979557183, 0.47927958681907384, 0.3633570559414662, 0.31864988869037936, 0.23991721442410427, 0.24048515293050218, 0.180905452780339, 4.829512134259968, 3.650646021194582, 3.0371292411367596, 2.291975557667958, 1.740430356960648, 1.318352575444699, 1.0128862521363329, 0.7593945607943794, 0.6219601091201737, 0.11607455535203473, 0.3890667719637526, 0.28449695544739356, 0.2753335371491592, 0.41118975872680114, 0.5975978574674075, 0.550252964375155, 0.45464421869414945, 0.3718443227633642, 0.29416018088023654, 0.2595970240235049, 0.20810848417416683, 0.24461558118228607, 0.28951176133884027, 0.2013460364315817, 0.16451139383313065, 0.128364291943025, 0.38578210136954444, 0.2941012210214083, 0.25284282917484696, 0.32644704243824146, 0.5776614208868319, 0.4392662931399679, 0.4071196160876158, 0.3180419482294407, 0.33592371671214416, 0.26335269227201075, 0.22418717247170475, 0.1720120397590193, 0.2493910679702191, 0.17604859627973246, 0.1538225930046269, 0.1258205305185447, 0.24452144591528896, 0.1954900697009767, 0.1488476068654587, 0.11214659178232435, 0.08754121406055784, 0.06558948330971226, 0.05669299436316976, 0.04429310846285222, 0.13195253830473835, 0.09121474070482398, 0.11002655854555182, 0.16266049478944952, 0.2843452066566407, 0.23822181840340081, 0.23730634197994938, 0.3535205518834549, 0.2688022150413438, 0.22357275174745228, 0.32774290959413427, 0.3025545087817454, 0.6106216852064217, 0.9069535531232573, 0.8873185055491475, 0.8424322595449252, 0.8577905678727716, 1.2868294418332675, 1.691843730756154, 1.9897780666786107, 2.577468339422989, 2.274227278320211, 14.528111847333042, 11.152309467435973, 9.884279093065436, 8.557024963145789, 6.490488695499125, 5.100127389826482, 6.247307334774412, 6.561158254276188, 6.411590159651707, 3.8875743206696884, 4.398251424395636, 3.356186349985541, 2.506134478521464],
					type: 'scatter',
					name: '2023',
					fill: "tozeroy",
					hovertemplate:	'<b>2023 <b>%{x|%m-%d}: %{y:.2f}',
					mode: 'lines',
					line: {
						color:'3e61b3',
						width: 3,
					}
				}  

			let year22= {
					x:['2000-02-15', '2000-02-16', '2000-02-17', '2000-02-21', '2000-02-22', '2000-02-23', '2000-02-24', '2000-02-28', '2000-03-01', '2000-03-02', '2000-03-03', '2000-03-07', '2000-03-08', '2000-03-09', '2000-03-10', '2000-03-14', '2000-03-15', '2000-03-16', '2000-03-17', '2000-03-21', '2000-03-22', '2000-03-23', '2000-03-24', '2000-03-28', '2000-03-29', '2000-03-30', '2000-03-31', '2000-04-04', '2000-04-05', '2000-04-06', '2000-04-07', '2000-04-11', '2000-04-12', '2000-04-13', '2000-04-14', '2000-04-18', '2000-04-19', '2000-04-20', '2000-04-21', '2000-04-25', '2000-04-26', '2000-04-27', '2000-04-28', '2000-05-02', '2000-05-03', '2000-05-04', '2000-05-05', '2000-05-09', '2000-05-10', '2000-05-11', '2000-05-12', '2000-05-16', '2000-05-17', '2000-05-18', '2000-05-19', '2000-05-23', '2000-05-24', '2000-05-25', '2000-05-26', '2000-05-31', '2000-06-01', '2000-06-02', '2000-06-06', '2000-06-07', '2000-06-08', '2000-06-09', '2000-06-13', '2000-06-14', '2000-06-15', '2000-06-16', '2000-06-20', '2000-06-21', '2000-06-22', '2000-06-23', '2000-06-27', '2000-06-28', '2000-06-29', '2000-06-30', '2000-07-05', '2000-07-06', '2000-07-07', '2000-07-08', '2000-07-11', '2000-07-12', '2000-07-13', '2000-07-14', '2000-07-18', '2000-07-19', '2000-07-20', '2000-07-21', '2000-07-25', '2000-07-26', '2000-07-27', '2000-07-28', '2000-08-01', '2000-08-02', '2000-08-03', '2000-08-04', '2000-08-08', '2000-08-09', '2000-08-10', '2000-08-11', '2000-08-15', '2000-08-16', '2000-08-17', '2000-08-18', '2000-08-22', '2000-08-23', '2000-08-24', '2000-08-25', '2000-08-29', '2000-08-30', '2000-08-31', '2000-09-01', '2000-09-06', '2000-09-07', '2000-09-08', '2000-09-12', '2000-09-13', '2000-09-14', '2000-09-15', '2000-09-19', '2000-09-20', '2000-09-21', '2000-09-22', '2000-09-26', '2000-09-27', '2000-09-28', '2000-09-29', '2000-10-03', '2000-10-05', '2000-10-06', '2000-10-10', '2000-10-11', '2000-10-12', '2000-10-13', '2000-10-17', '2000-10-18', '2000-10-19', '2000-10-20', '2000-10-24', '2000-10-25', '2000-10-26', '2000-10-27', '2000-10-31', '2000-11-01', '2000-11-02', '2000-11-03', '2000-11-07', '2000-11-08', '2000-11-09', '2000-11-10', '2000-11-14', '2000-11-15', '2000-11-16', '2000-11-17', '2000-11-21', '2000-11-22', '2000-11-23', '2000-11-28', '2000-11-29', '2000-11-30', '2000-12-01', '2000-12-05', '2000-12-06', '2000-12-07', '2000-12-08', '2000-12-12', '2000-12-13', '2000-12-14', '2000-12-15', '2000-12-19', '2000-12-20', '2000-12-21', '2000-12-22', '2000-12-27', '2000-12-28', '2000-12-29'],
					y:[0.10817917968309157, 0.17657386375855247, 0.13256858084094197, 0.10240843707868498, 0.07681135123216315, 0.0705544005344373, 0.05603526546404961, 0.03820906516558031, 0.03515898871416971, 0.025714666637544285, 0.014312695316288666, 0.010912742710244446, 0.007982497709809635, 0.005912130659973323, 0.003931233487876398, 0.002762319170717856, 0.002583133587222716, 0.0025805039230823146, 0.0022925717581211273, 0.0022420424407751495, 0.0019251906297879486, 0.0014540532192283812, 0.0018987376904187414, 0.0013844739148651225, 0.018364541769789796, 0.01400293252190333, 0.010630103077609334, 0.011159692435876539, 0.00899092302782417, 0.0074079420711802655, 0.008594394569810086, 0.006429912364515326, 0.051000414817650254, 0.037248853143037906, 0.11170140045285973, 0.08634405703203386, 0.0887886629655955, 0.0692032409229797, 0.15321551061853989, 0.11986432083875827, 0.09430597790900194, 0.073577600665593, 0.07471867818064919, 0.059412100371295615, 0.06664907872174895, 0.051256526945726875, 0.05520703356393544, 0.034557862971435906, 0.09763842861217106, 0.10581560825295717, 0.11747094704236752, 0.08970546798903686, 0.14829494233052742, 0.12109604531696574, 0.14607239609399938, 0.1344095659670508, 0.16336970399665224, 0.1501682584142628, 0.15220082179966912, 0.1972717587555012, 0.1716680307185757, 0.3551917433072371, 0.29851585538675324, 0.25199814175541335, 0.19397245024009638, 0.21354473937137858, 0.16480333885995863, 0.13423905901877578, 0.09730110989631559, 0.07729638839625007, 0.7678185530187337, 0.9623177362723286, 0.7204513422044715, 0.5554543458298313, 0.6334874333642261, 0.5531917244326231, 0.42279348353943497, 0.34792593352499557, 0.3059255830624039, 0.19725036266526083, 0.29857796433134276, 0.2377583669858269, 0.19337904444575651, 3.7939207823479957, 2.9674866685419055, 2.306151066042344, 2.1556680353234245, 1.673079794140095, 1.326742768501831, 1.904436135534972, 1.493583932911972, 1.1606920881271696, 0.6009553895974795, 0.5970513628684814, 0.4704037739761322, 0.32694706980838434, 0.27563936821795626, 0.24374923302029, 0.14377159416621477, 1.3674626361223337, 1.0266730576300835, 0.7781302861464343, 0.657977386844264, 0.51448334317217, 0.49120757509712937, 0.37206450746506703, 1.1967388415001703, 0.9689197249167572, 0.7542665847067488, 0.5772410576007625, 0.44517192453535315, 0.3744878184174076, 0.2800711382442565, 0.3868321004026304, 0.3149881093238113, 0.18911027408369616, 0.6361844405628803, 0.48867752088538957, 0.37530659638525604, 0.2937657232206828, 0.22700956420561064, 0.21053831391876324, 0.15315128979324533, 0.11936264673898331, 0.0921933575190274, 0.04133990342526371, 0.03765431872559244, 0.030427997710778105, 0.025675249238344203, 0.02100648621352525, 0.018401948788494722, 0.013934311232061646, 0.07994457567535651, 0.06924838233350915, 0.08130974585858307, 0.06540483197855375, 0.05516115000093457, 0.04589084359714028, 0.04360271709696457, 0.10475192441637782, 0.07934283752347276, 0.07124794332401685, 0.05592755054160828, 0.11427532766890772, 0.11222787694127981, 1.747440348914025, 1.3338019576282576, 1.133876171969489, 0.886011616262676, 0.6697848626678222, 0.5042104250802862, 0.3811072851309103, 0.28286052135979234, 0.21232353406895121, 0.04827382032653719, 0.05231691487611955, 0.0393234850301162, 0.23002289974661244, 0.1987944396888116, 0.3143696566452592, 0.2914402666464567, 1.1425081376595125, 1.3645859324970597, 1.275890959451542, 1.6221307173106985, 2.517235947475765, 1.9636606342989937, 1.7222964301224402, 1.660494086769694, 2.215585831482293, 1.9847157758179095, 2.2510429244706165, 2.1588639076294447, 3.4963494859253252, 2.7515678200005187, 3.2810231518404325, 2.8484374147473797, 2.4225044619155116],
					type: 'scatter',
					name: '2022',
					mode: 'lines',
					hovertemplate:	'<b>2022 <b>%{x|%m-%d}: %{y:.2f}',
					hoveron:"fills+points",
					fill: "tozeroy",
					line: {
						color:'#93d8ff',
						width: 3,
					}
				}

		const plotJson = {

			data : [year22,year23, year24],
			layout: {
				yaxis:{
					title: 'Effective Wastewater Levels (Gene copies/L)e4',
					autotick: true,
					showgrid: true,
					automargin:true, 
					font: {
						family: 'trebuchet ms,sans-serif',
						color: '#0e2d4c',
						size: 20,
					},
				},
				xaxis:{
					type: 'date',
					autorange: true,
					tickformat:"%b %d",
					title: 'Date',
					showgrid: false,
					automargin:true, 
					font: {
						family: 'trebuchet ms,sans-serif',
						color: '#0e2d4c',
						size: 20,
					},
				},
				margin: {t:10, r:10, l: 10, b:20},
				title: {
					text:'Year-over-year Chicago Covid Wastewater data', 
					automargin:true, 
					font: {
						family: 'trebuchet ms,sans-serif',
						color: '#0e2d4c',
						size: 20,
					},
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
export default YOYGraph;
