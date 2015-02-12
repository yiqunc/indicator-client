function createIIAParamWin()
{
	GLOBAL_VAR.iiaParamWindow = Ext.create('Ext.Window', {
											title: 'IIA Configuration',
											id : 'iiaParamsWindowID',
											width: 600,
											height: 420,
											x: 15,
											y: 90,
											headerPosition: 'top',
											layout: 'fit',
											modal : false,
											items: {
												xtype: 'tabpanel',
												activeTab: 0,
												itemId: 'tabPanel',
												id: 'iiaParamsTabPanelID',
												items: [
													{
														title: 'Transport, Health & Community Services',
														layout: {
															type: 'table',
															columns: 4
														},
														autoScroll:true,
														defaults: {
															bodyStyle: 'padding:10px',
															border: 0,
															width:'100%',
															
														},
														items: [
														{
															html: 'Transport',
															width:150,
															cellCls: 'cell-bold'
														},
														{
															html: 'Weight (%)',
															width:100,
															cellCls: 'cell-bold'
														},
														{
															html: 'Catchment of Influence (m)',
															colspan:2,
															cellCls: 'cell-bold'
														},
														/*row 1*/
														{
															xtype : 'checkboxfield',
															id : 'chbxTrainStationId',
															checked : true,
															boxLabel : 'Train Station',
															margin: '10 10 10 10',
															listeners: {
																change: function(chbox, newValue, oldValue, eOpts) {
																	if(newValue){
																		Ext.getCmp("sldTrainStationCatchmentRadiusId").enable();
																		Ext.getCmp("txtTrainStationWeightId").enable();
																	} else
																	{
																		Ext.getCmp("sldTrainStationCatchmentRadiusId").disable();
																		Ext.getCmp("txtTrainStationWeightId").disable();
																	}
																	updateTTLWeights();
																}
															}
														},
														{	
															xtype: 'numberfield',
															margin: '10 10 10 10', 
															id : 'txtTrainStationWeightId',
															minValue: 0,
															maxValue: 100,
															value: 12,
															width: 50,
															listeners: {
																change: function(numberfield, newValue, oldValue, eOpts) {
																	updateTTLWeights();
																}
															}
														},
														{	
															xtype:'slider',
															margin: '10 10 10 10', 
															id : 'sldTrainStationCatchmentRadiusId',
															value: 800,
															width: 150,
															minValue: 100,
															maxValue: 2000,
															increment: 100,
															useTips: true,
															listeners: {
																change: function(slider, newValue, thumb, eOpts ) {
																	Ext.getCmp("lblTrainStationCatchmentRadiusId").setText(newValue);
																}
															}
														},
														{	
															xtype:'label',
															margin: '10 10 10 10', 
															id : 'lblTrainStationCatchmentRadiusId',
															text:'800',
															width:50
														},
														/*row 2*/
														{
															xtype : 'checkboxfield',
															id : 'chbxTramStopId',
															checked : true,
															boxLabel : 'Tram Stop',
															margin: '10 10 10 10',
															listeners: {
																change: function(chbox, newValue, oldValue, eOpts) {
																	if(newValue){
																		Ext.getCmp("sldTramStopCatchmentRadiusId").enable();
																		Ext.getCmp("txtTramStopWeightId").enable();
																	} else
																	{
																		Ext.getCmp("sldTramStopCatchmentRadiusId").disable();
																		Ext.getCmp("txtTramStopWeightId").disable();
																	}
																	updateTTLWeights();
																}
															}
														},
														{	
															xtype: 'numberfield',
															margin: '10 10 10 10', 
															id : 'txtTramStopWeightId',
															minValue: 0,
															maxValue: 100,
															value: 15,
															width: 50,
															listeners: {
																change: function(numberfield, newValue, oldValue, eOpts) {
																	updateTTLWeights();
																}
															}
														},
														{	
															xtype:'slider',
															margin: '10 10 10 10', 
															id : 'sldTramStopCatchmentRadiusId',
															value: 800,
															width: 150,
															minValue: 100,
															maxValue: 2000,
															increment: 100,
															useTips: true,
															listeners: {
																change: function(slider, newValue, thumb, eOpts ) {
																	Ext.getCmp("lblTramStopCatchmentRadiusId").setText(newValue);
																}
															}
														},
														{	
															xtype:'label',
															margin: '10 10 10 10', 
															id : 'lblTramStopCatchmentRadiusId',
															text:'800',
															width:50
														},
														/*group 2*/
														{
															html: 'Health',
															width:150,
															cellCls: 'cell-bold'
														},
														{
															html: 'Weight (%)',
															width:100,
															cellCls: 'cell-bold'
														},
														{
															html: 'Catchment of Influence (m)',
															colspan:2,
															cellCls: 'cell-bold'
														},
														/*row 1*/
														{
															xtype : 'checkboxfield',
															id : 'chbxHospitalId',
															checked : true,
															boxLabel : 'Hospital',
															margin: '10 10 10 10',
															listeners: {
																change: function(chbox, newValue, oldValue, eOpts) {
																	if(newValue){
																		Ext.getCmp("sldHospitalCatchmentRadiusId").enable();
																		Ext.getCmp("txtHospitalWeightId").enable();
																	} else
																	{
																		Ext.getCmp("sldHospitalCatchmentRadiusId").disable();
																		Ext.getCmp("txtHospitalWeightId").disable();
																	}
																	updateTTLWeights();
																}
															}
														},
														{	
															xtype: 'numberfield',
															margin: '10 10 10 10', 
															id : 'txtHospitalWeightId',
															minValue: 0,
															maxValue: 100,
															value: 5,
															width: 50,
															listeners: {
																change: function(numberfield, newValue, oldValue, eOpts) {
																	updateTTLWeights();
																}
															}
														},
														{	
															xtype:'slider',
															margin: '10 10 10 10', 
															id : 'sldHospitalCatchmentRadiusId',
															value: 800,
															width: 150,
															minValue: 100,
															maxValue: 2000,
															increment: 100,
															useTips: true,
															listeners: {
																change: function(slider, newValue, thumb, eOpts ) {
																	Ext.getCmp("lblHospitalCatchmentRadiusId").setText(newValue);
																}
															}
														},
														{	
															xtype:'label',
															margin: '10 10 10 10', 
															id : 'lblHospitalCatchmentRadiusId',
															text:'800',
															width:50
														},
														/*group 3*/
														{
															html: 'Community Services',
															width:150,
															cellCls: 'cell-bold'
														},
														{
															html: 'Weight (%)',
															width:100,
															cellCls: 'cell-bold'
														},
														{
															html: 'Catchment of Influence (m)',
															colspan:2,
															cellCls: 'cell-bold'
														},
														/*row 1*/
														{
															xtype : 'checkboxfield',
															id : 'chbxLibraryId',
															checked : true,
															boxLabel : 'Library',
															margin: '10 10 10 10',
															listeners: {
																change: function(chbox, newValue, oldValue, eOpts) {
																	if(newValue){
																		Ext.getCmp("sldLibraryCatchmentRadiusId").enable();
																		Ext.getCmp("txtLibraryWeightId").enable();
																	} else
																	{
																		Ext.getCmp("sldLibraryCatchmentRadiusId").disable();
																		Ext.getCmp("txtLibraryWeightId").disable();
																	}
																	updateTTLWeights();
																}
															}
														},
														{	
															xtype: 'numberfield',
															margin: '10 10 10 10', 
															id : 'txtLibraryWeightId',
															minValue: 0,
															maxValue: 100,
															value: 5,
															width: 50,
															listeners: {
																change: function(numberfield, newValue, oldValue, eOpts) {
																	updateTTLWeights();
																}
															}
														},
														{	
															xtype:'slider',
															margin: '10 10 10 10', 
															id : 'sldLibraryCatchmentRadiusId',
															value: 800,
															width: 150,
															minValue: 100,
															maxValue: 2000,
															increment: 100,
															useTips: true,
															listeners: {
																change: function(slider, newValue, thumb, eOpts ) {
																	Ext.getCmp("lblLibraryCatchmentRadiusId").setText(newValue);
																}
															}
														},
														{	
															xtype:'label',
															margin: '10 10 10 10', 
															id : 'lblLibraryCatchmentRadiusId',
															text:'800',
															width:50
														},
														/*row 2*/
														{
															xtype : 'checkboxfield',
															id : 'chbxRecreationId',
															checked : true,
															boxLabel : 'Recreation & Health Services',
															margin: '10 10 10 10',
															listeners: {
																change: function(chbox, newValue, oldValue, eOpts) {
																	if(newValue){
																		Ext.getCmp("sldRecreationCatchmentRadiusId").enable();
																		Ext.getCmp("txtRecreationWeightId").enable();
																	} else
																	{
																		Ext.getCmp("sldRecreationCatchmentRadiusId").disable();
																		Ext.getCmp("txtRecreationWeightId").disable();
																	}
																	updateTTLWeights();
																}
															}
														},
														{	
															xtype: 'numberfield',
															margin: '10 10 10 10', 
															id : 'txtRecreationWeightId',
															minValue: 0,
															maxValue: 100,
															value: 13,
															width: 50,
															listeners: {
																change: function(numberfield, newValue, oldValue, eOpts) {
																	updateTTLWeights();
																}
															}
														},
														{	
															xtype:'slider',
															margin: '10 10 10 10', 
															id : 'sldRecreationCatchmentRadiusId',
															value: 800,
															width: 150,
															minValue: 100,
															maxValue: 2000,
															increment: 100,
															useTips: true,
															listeners: {
																change: function(slider, newValue, thumb, eOpts ) {
																	Ext.getCmp("lblRecreationCatchmentRadiusId").setText(newValue);
																}
															}
														},
														{	
															xtype:'label',
															margin: '10 10 10 10', 
															id : 'lblRecreationCatchmentRadiusId',
															text:'800',
															width:50
														},
														]
													},
													{
														title: 'Education & Early Years Services',
														layout: {
															type: 'table',
															columns: 4
														},
														autoScroll:true,
														defaults: {
															bodyStyle: 'padding:10px',
															border: 0,
															width:'100%',
															
														},
														items: [
														{
															html: 'Education',
															width:150,
															cellCls: 'cell-bold'
														},
														{
															html: 'Weight (%)',
															width:100,
															cellCls: 'cell-bold'
														},
														{
															html: 'Catchment of Influence (m)',
															colspan:2,
															cellCls: 'cell-bold'
														},
														/*row 1*/
														{
															xtype : 'checkboxfield',
															id : 'chbxPreSchoolId',
															checked : true,
															boxLabel : 'Preschool',
															margin: '10 10 10 10',
															listeners: {
																change: function(chbox, newValue, oldValue, eOpts) {
																	if(newValue){
																		Ext.getCmp("sldPreSchoolCatchmentRadiusId").enable();
																		Ext.getCmp("txtPreSchoolWeightId").enable();
																	} else
																	{
																		Ext.getCmp("sldPreSchoolCatchmentRadiusId").disable();
																		Ext.getCmp("txtPreSchoolWeightId").disable();
																	}
																	updateTTLWeights();
																}
															}
														},
														{	
															xtype: 'numberfield',
															margin: '10 10 10 10', 
															id : 'txtPreSchoolWeightId',
															minValue: 0,
															maxValue: 100,
															value: 8,
															width: 50,
															listeners: {
																change: function(numberfield, newValue, oldValue, eOpts) {
																	updateTTLWeights();
																}
															}
														},
														{	
															xtype:'slider',
															margin: '10 10 10 10', 
															id : 'sldPreSchoolCatchmentRadiusId',
															value: 800,
															width: 150,
															minValue: 100,
															maxValue: 2000,
															increment: 100,
															useTips: true,
															listeners: {
																change: function(slider, newValue, thumb, eOpts ) {
																	Ext.getCmp("lblPreSchoolCatchmentRadiusId").setText(newValue);
																}
															}
														},
														{	
															xtype:'label',
															margin: '10 10 10 10', 
															id : 'lblPreSchoolCatchmentRadiusId',
															text:'800',
															width:50
														},
														/*row 2*/
														{
															xtype : 'checkboxfield',
															id : 'chbxPrimarySchoolId',
															checked : true,
															boxLabel : 'Primary School',
															margin: '10 10 10 10',
															listeners: {
																change: function(chbox, newValue, oldValue, eOpts) {
																	if(newValue){
																		Ext.getCmp("sldPrimarySchoolCatchmentRadiusId").enable();
																		Ext.getCmp("txtPrimarySchoolWeightId").enable();
																	} else
																	{
																		Ext.getCmp("sldPrimarySchoolCatchmentRadiusId").disable();
																		Ext.getCmp("txtPrimarySchoolWeightId").disable();
																	}
																	updateTTLWeights();
																}
															}
														},
														{	
															xtype: 'numberfield',
															margin: '10 10 10 10', 
															id : 'txtPrimarySchoolWeightId',
															minValue: 0,
															maxValue: 100,
															value: 7,
															width: 50,
															listeners: {
																change: function(numberfield, newValue, oldValue, eOpts) {
																	updateTTLWeights();
																}
															}
														},
														{	
															xtype:'slider',
															margin: '10 10 10 10', 
															id : 'sldPrimarySchoolCatchmentRadiusId',
															value: 800,
															width: 150,
															minValue: 100,
															maxValue: 2000,
															increment: 100,
															useTips: true,
															listeners: {
																change: function(slider, newValue, thumb, eOpts ) {
																	Ext.getCmp("lblPrimarySchoolCatchmentRadiusId").setText(newValue);
																}
															}
														},
														{	
															xtype:'label',
															margin: '10 10 10 10', 
															id : 'lblPrimarySchoolCatchmentRadiusId',
															text:'800',
															width:50
														},
														/*row 3*/
														{
															xtype : 'checkboxfield',
															id : 'chbxSecondarySchoolId',
															checked : true,
															boxLabel : 'Secondary School',
															margin: '10 10 10 10',
															listeners: {
																change: function(chbox, newValue, oldValue, eOpts) {
																	if(newValue){
																		Ext.getCmp("sldSecondarySchoolCatchmentRadiusId").enable();
																		Ext.getCmp("txtSecondarySchoolWeightId").enable();
																	} else
																	{
																		Ext.getCmp("sldSecondarySchoolCatchmentRadiusId").disable();
																		Ext.getCmp("txtSecondarySchoolWeightId").disable();
																	}
																	updateTTLWeights();
																}
															}
														},
														{	
															xtype: 'numberfield',
															margin: '10 10 10 10', 
															id : 'txtSecondarySchoolWeightId',
															minValue: 0,
															maxValue: 100,
															value: 5,
															width: 50,
															listeners: {
																change: function(numberfield, newValue, oldValue, eOpts) {
																	updateTTLWeights();
																}
															}
														},
														{	
															xtype:'slider',
															margin: '10 10 10 10', 
															id : 'sldSecondarySchoolCatchmentRadiusId',
															value: 800,
															width: 150,
															minValue: 100,
															maxValue: 2000,
															increment: 100,
															useTips: true,
															listeners: {
																change: function(slider, newValue, thumb, eOpts ) {
																	Ext.getCmp("lblSecondarySchoolCatchmentRadiusId").setText(newValue);
																}
															}
														},
														{	
															xtype:'label',
															margin: '10 10 10 10', 
															id : 'lblSecondarySchoolCatchmentRadiusId',
															text:'800',
															width:50
														},
														/*group 2*/
														{
															html: 'Early Years',
															width:150,
															cellCls: 'cell-bold'
														},
														{
															html: 'Weight (%)',
															width:100,
															cellCls: 'cell-bold'
														},
														{
															html: 'Catchment of Influence (m)',
															colspan:2,
															cellCls: 'cell-bold'
														},
														/*row 1*/
														{
															xtype : 'checkboxfield',
															id : 'chbxChildCareId',
															checked : true,
															boxLabel : 'ChildCare',
															margin: '10 10 10 10',
															listeners: {
																change: function(chbox, newValue, oldValue, eOpts) {
																	if(newValue){
																		Ext.getCmp("sldChildCareCatchmentRadiusId").enable();
																		Ext.getCmp("txtChildCareWeightId").enable();
																	} else
																	{
																		Ext.getCmp("sldChildCareCatchmentRadiusId").disable();
																		Ext.getCmp("txtChildCareWeightId").disable();
																	}
																	updateTTLWeights();
																}
															}
														},
														{	
															xtype: 'numberfield',
															margin: '10 10 10 10', 
															id : 'txtChildCareWeightId',
															minValue: 0,
															maxValue: 100,
															value: 15,
															width: 50,
															listeners: {
																change: function(numberfield, newValue, oldValue, eOpts) {
																	updateTTLWeights();
																}
															}
														},
														{	
															xtype:'slider',
															margin: '10 10 10 10', 
															id : 'sldChildCareCatchmentRadiusId',
															value: 800,
															width: 150,
															minValue: 100,
															maxValue: 2000,
															increment: 100,
															useTips: true,
															listeners: {
																change: function(slider, newValue, thumb, eOpts ) {
																	Ext.getCmp("lblChildCareCatchmentRadiusId").setText(newValue);
																}
															}
														},
														{	
															xtype:'label',
															margin: '10 10 10 10', 
															id : 'lblChildCareCatchmentRadiusId',
															text:'800',
															width:50
														},
														/*row 2*/
														{
															xtype : 'checkboxfield',
															id : 'chbxMaternalId',
															checked : true,
															boxLabel : 'Maternal & Child Health Centre',
															margin: '10 10 10 10',
															listeners: {
																change: function(chbox, newValue, oldValue, eOpts) {
																	if(newValue){
																		Ext.getCmp("sldMaternalCatchmentRadiusId").enable();
																		Ext.getCmp("txtMaternalWeightId").enable();
																	} else
																	{
																		Ext.getCmp("sldMaternalCatchmentRadiusId").disable();
																		Ext.getCmp("txtMaternalWeightId").disable();
																	}
																	updateTTLWeights();
																}
															}
														},
														{	
															xtype: 'numberfield',
															margin: '10 10 10 10', 
															id : 'txtMaternalWeightId',
															minValue: 0,
															maxValue: 100,
															value: 15,
															width: 50,
															listeners: {
																change: function(numberfield, newValue, oldValue, eOpts) {
																	updateTTLWeights();
																}
															}
														},
														{	
															xtype:'slider',
															margin: '10 10 10 10', 
															id : 'sldMaternalCatchmentRadiusId',
															value: 800,
															width: 150,
															minValue: 100,
															maxValue: 2000,
															increment: 100,
															useTips: true,
															listeners: {
																change: function(slider, newValue, thumb, eOpts ) {
																	Ext.getCmp("lblMaternalCatchmentRadiusId").setText(newValue);
																}
															}
														},
														{	
															xtype:'label',
															margin: '10 10 10 10', 
															id : 'lblMaternalCatchmentRadiusId',
															text:'800',
															width:50
														}
														
														]
													},
													{
													title: 'Other Params',
													autoScroll:true,
													items:[
															{xtype: 'numberfield',
																name: 'iiaNetBufSize',
																margin:'10,5,5,10',
																id:'iiaNetBufSizeID',
																labelAlign:'left',
																labelWidth: 200,
																fieldLabel: 'Road Network Buffer Size (m)',
																value: 150,
																maxValue: 200,
																step: 10,
																minValue: 20
															},
															{xtype: 'numberfield',
																name: 'iiaBufferDist',
																margin:'10,5,5,10',
																id:'iiaBufferDistID',
																labelAlign:'left',
																labelWidth:200,
																fieldLabel: 'LGA Border Buffer Size (m)',
																value: 500,
																maxValue: 3000,
																step: 100,
																minValue: 0
															},
															{xtype: 'numberfield',
																name: 'iiaMinMeshBlockPopThreshold',
																margin:'10,5,5,10',
																id:'iiaMinMeshBlockPopThresholdID',
																labelAlign:'left',
																labelWidth:200,
																fieldLabel: 'Meshblock Population Threshold',
																value: 1,
																maxValue: 500,
																step: 1,
																minValue: 0
															}/*,
															{xtype: 'numberfield',
																name: 'iiaIntersectTestOverlapAreaThreshold',
																margin:'10,5,5,10',
																id:'iiaIntersectTestOverlapAreaThresholdID',
																labelAlign:'left',
																labelWidth: 200,
																fieldLabel: 'Intersection Test Overlap Area Threshold (%)',
																value: 80,
																maxValue: 100,
																step: 1,
																minValue: 0
															}*/
														]
													}
												]
												,
												buttons:[
													{	
														xtype:'label',
														id : 'lblTotalWeightId',
														text:'Total Weights: 100%'
													},
													{	
														xtype : 'checkboxfield',
														id : 'chbxEnableRankAmongAllLGAsId',
														checked : false,
														hidden : false,
														boxLabel : 'Ranking Among All LGAs',
													},{	
														xtype : 'checkboxfield',
														id : 'chbxEnableUPQId',
														checked : true,
														boxLabel : 'Enable UPQ Calculation',
													},
													{
														xtype: 'button',
															text : 'Ok',
															id: 'iiaParameterOkButtonID',
															handler: function() {

																//check if ttlweight is 100
																var ttlw = updateTTLWeights();
																if(ttlw!=100){
																	messageHelper.showWarningWait("Total weights must add up tp 100%",2000);
																	return;
																}
																
																
																//prepare model params
																params={};
															
																params.regionCodeList = ca.regionCodeList;
																params.layerList = [];
																
																//decide if UPQ is enabled
																params.enableUPQ = Ext.getCmp("chbxEnableUPQId").checked;
																
																//decide if ranking apply to all LGAs or for each LGA
																params.enableRankAmongAllLGAs = Ext.getCmp("chbxEnableRankAmongAllLGAsId").checked;

																if(!Ext.getCmp("txtTrainStationWeightId").disabled){
																	var layerinfo = {};
																	layerinfo.layername = "trainstation";
																	layerinfo.layernameabbr = "TRN";
																	layerinfo.featsubtyps = [];
																	layerinfo.catchmentradius = Ext.getCmp("sldTrainStationCatchmentRadiusId").getValue();
																	layerinfo.weight = Ext.getCmp("txtTrainStationWeightId").value;
																	params.layerList.push(layerinfo);
																}
																
																if(!Ext.getCmp("txtTramStopWeightId").disabled){
																	var layerinfo = {};
																	layerinfo.layername = "tramstop";
																	layerinfo.layernameabbr = "TRM";
																	layerinfo.featsubtyps = [];
																	layerinfo.catchmentradius = Ext.getCmp("sldTramStopCatchmentRadiusId").getValue();
																	layerinfo.weight = Ext.getCmp("txtTramStopWeightId").value;
																	params.layerList.push(layerinfo);
																}
																
																if(!Ext.getCmp("txtHospitalWeightId").disabled){
																	var layerinfo = {};
																	layerinfo.layername = "hospital";
																	layerinfo.layernameabbr = "HOS";
																	layerinfo.featsubtyps = ["general hospital", "general hospital (emergency)", "bush nursing hospital", "day procedure centre"];
																	layerinfo.catchmentradius = Ext.getCmp("sldHospitalCatchmentRadiusId").getValue();
																	layerinfo.weight = Ext.getCmp("txtHospitalWeightId").value;
																	params.layerList.push(layerinfo);
																}
																
																if(!Ext.getCmp("txtLibraryWeightId").disabled){
																	var layerinfo = {};
																	layerinfo.layername = "library";
																	layerinfo.layernameabbr = "LIB";
																	layerinfo.featsubtyps = ["library"];
																	layerinfo.catchmentradius = Ext.getCmp("sldLibraryCatchmentRadiusId").getValue();
																	layerinfo.weight = Ext.getCmp("txtLibraryWeightId").value;
																	params.layerList.push(layerinfo);
																}
																
																if(!Ext.getCmp("txtRecreationWeightId").disabled){
																	var layerinfo = {};
																	layerinfo.layername = "recreation";
																	layerinfo.layernameabbr = "REC";
																	layerinfo.featsubtyps = ["amphitheatre","bmx track","club house","grandstand","hut","picnic site","playground","skate park","rotunda","community health centre"];
																	layerinfo.catchmentradius = Ext.getCmp("sldRecreationCatchmentRadiusId").getValue();
																	layerinfo.weight = Ext.getCmp("txtRecreationWeightId").value;
																	params.layerList.push(layerinfo);
																}
																
																if(!Ext.getCmp("txtPreSchoolWeightId").disabled){
																	var layerinfo = {};
																	layerinfo.layername = "preschool";
																	layerinfo.layernameabbr = "PRES";
																	layerinfo.featsubtyps = ["pre school"];
																	layerinfo.catchmentradius = Ext.getCmp("sldPreSchoolCatchmentRadiusId").getValue();
																	layerinfo.weight = Ext.getCmp("txtPreSchoolWeightId").value;
																	params.layerList.push(layerinfo);
																}
																
																if(!Ext.getCmp("txtPrimarySchoolWeightId").disabled){
																	var layerinfo = {};
																	layerinfo.layername = "primary school";
																	layerinfo.layernameabbr = "PRSC";
																	layerinfo.featsubtyps = ["primary school","primary/secondary school"];
																	layerinfo.catchmentradius = Ext.getCmp("sldPrimarySchoolCatchmentRadiusId").getValue();
																	layerinfo.weight = Ext.getCmp("txtPrimarySchoolWeightId").value;
																	params.layerList.push(layerinfo);
																}
																
																if(!Ext.getCmp("txtSecondarySchoolWeightId").disabled){
																	var layerinfo = {};
																	layerinfo.layername = "secondary school";
																	layerinfo.layernameabbr = "SESC";
																	layerinfo.featsubtyps = ["secondary school","primary/secondary school"];
																	layerinfo.catchmentradius = Ext.getCmp("sldSecondarySchoolCatchmentRadiusId").getValue();
																	layerinfo.weight = Ext.getCmp("txtSecondarySchoolWeightId").value;
																	params.layerList.push(layerinfo);
																}
																
																if(!Ext.getCmp("txtChildCareWeightId").disabled){
																	var layerinfo = {};
																	layerinfo.layername = "childcare";
																	layerinfo.layernameabbr = "CHCA";
																	layerinfo.featsubtyps = ["child care"];
																	layerinfo.catchmentradius = Ext.getCmp("sldChildCareCatchmentRadiusId").getValue();
																	layerinfo.weight = Ext.getCmp("txtChildCareWeightId").value;
																	params.layerList.push(layerinfo);
																}
																
																if(!Ext.getCmp("txtMaternalWeightId").disabled){
																	var layerinfo = {};
																	layerinfo.layername = "maternal";
																	layerinfo.layernameabbr = "MAT";
																	layerinfo.featsubtyps = ["maternal/child health centre"];
																	layerinfo.catchmentradius = Ext.getCmp("sldMaternalCatchmentRadiusId").getValue();
																	layerinfo.weight = Ext.getCmp("txtMaternalWeightId").value;
																	params.layerList.push(layerinfo);
																}
																
																// set network buffer size, default is 100
																params.netbufSize = Ext.getCmp("iiaNetBufSizeID").value;
																params.iiaBufferDist = Ext.getCmp("iiaBufferDistID").value;
																params.iiaMinMeshBlockPopThreshold = Ext.getCmp("iiaMinMeshBlockPopThresholdID").value;
																
																//params.iiaIntersectTestOverlapAreaThreshold = Ext.getCmp("iiaIntersectTestOverlapAreaThresholdID").value / 100.0;
																
																//get simid from server
																Ext.Ajax.request({
																   url: SERVICE_URL.initiia,
																   withCredentials:true,
																   timeout: 1000*60*60,
																   method:'POST',
																   params: {"params" : JSON.stringify(params)},
																   success: function(response, opts) {
																	  var obj = Ext.decode(response.responseText);
																	  console.log("==== done");
																	  
																	  //insert into SimPanelGrid
																	  simPanelGrid =  Ext.getCmp('iiaSimPanelGridID');
																	  
																	  simPanelGrid.getStore().add(new CoM.model.modelSimPara({simid:obj.simid, simcode:"job_"+obj.simid, simpara:params, simstate:0, simoutput:{}}));
																		
																	  //simPanelGrid.getView().refresh();
																	  
																	  // there is a chance that the window is closed before ajax returns
																	  if(typeof Ext.getCmp('iiaParamsWindowID') != "undefined"){
																		Ext.getCmp('iiaParamsWindowID').close();
																	  }
																	  Ext.getCmp("btIIAConfigButtonID").disabled = false;
																	 
																   },
																   failure: function(response, opts) {
																	  console.log('server-side failure with status code ' + response.status);
																	  console.log('server-side failure details: ' + response.responseText);
																	  Ext.getCmp("btIIAConfigButtonID").disabled = false;

																   }
																});
															
															}
														}
													]
											}
										});
};

function updateTTLWeights(){
					
						console.log("=== total weights updated");
						var ttlw = 0;
						if(!Ext.getCmp("txtTrainStationWeightId").disabled){
							ttlw = ttlw + Ext.getCmp("txtTrainStationWeightId").value;
						}
						if(!Ext.getCmp("txtTramStopWeightId").disabled){
							ttlw = ttlw + Ext.getCmp("txtTramStopWeightId").value;
						}
						if(!Ext.getCmp("txtHospitalWeightId").disabled){
							ttlw = ttlw + Ext.getCmp("txtHospitalWeightId").value;
						}
						if(!Ext.getCmp("txtLibraryWeightId").disabled){
							ttlw = ttlw + Ext.getCmp("txtLibraryWeightId").value;
						}
						if(!Ext.getCmp("txtRecreationWeightId").disabled){
							ttlw = ttlw + Ext.getCmp("txtRecreationWeightId").value;
						}
						
						if(!Ext.getCmp("txtPreSchoolWeightId").disabled){
							ttlw = ttlw + Ext.getCmp("txtPreSchoolWeightId").value;
						}	

						if(!Ext.getCmp("txtPrimarySchoolWeightId").disabled){
							ttlw = ttlw + Ext.getCmp("txtPrimarySchoolWeightId").value;
						}	

						if(!Ext.getCmp("txtSecondarySchoolWeightId").disabled){
							ttlw = ttlw + Ext.getCmp("txtSecondarySchoolWeightId").value;
						}		
						
						if(!Ext.getCmp("txtChildCareWeightId").disabled){
							ttlw = ttlw + Ext.getCmp("txtChildCareWeightId").value;
						}	

						if(!Ext.getCmp("txtMaternalWeightId").disabled){
							ttlw = ttlw + Ext.getCmp("txtMaternalWeightId").value;
						}		

						Ext.getCmp("lblTotalWeightId").setText("Total Weights: "+ttlw+"%");
						if(ttlw==100){
							Ext.getCmp("lblTotalWeightId").getEl().setStyle("color", "green");
						}else
						{
							Ext.getCmp("lblTotalWeightId").getEl().setStyle("color", "red");
						}
						return ttlw;
						
};