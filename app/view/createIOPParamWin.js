function createIOPParamWin()
{
	GLOBAL_VAR.iopParamWindow = Ext.create('Ext.Window', {
											title: 'IOP Configuration',
											id : 'iopParamsWindowID',
											width: 350,
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
												id: 'iopParamsTabPanelID',
												items: [
												{
													title: 'General Services',
													autoScroll:true,
													items:{
														xtype      : 'fieldcontainer',
														margin:'10,5,5,10',
														fieldLabel : '',
														defaultType: 'checkboxfield',
														items: [
															{
																xtype : 'checkboxfield',
																id : 'chbxIOPHospitalId',
																checked : false,
																boxLabel : 'Hospital',
																margin: '10 10 10 10'
															},
															{
																xtype : 'checkboxfield',
																id : 'chbxIOPPrimarySchoolId',
																checked : false,
																boxLabel : 'Primary School',
																margin: '10 10 10 10'
															},
															{
																xtype : 'checkboxfield',
																id : 'chbxIOPSecondarySchoolId',
																checked : false,
																boxLabel : 'Secondary School',
																margin: '10 10 10 10'
															},
															{
																xtype : 'checkboxfield',
																id : 'chbxIOPPrimarySecondarySchoolId',
																checked : false,
																boxLabel : 'Primary/Secondary School',
																margin: '10 10 10 10'
															},
															{
																xtype : 'checkboxfield',
																id : 'chbxIOPChildCareId',
																checked : false,
																boxLabel : 'Child Care',
																margin: '10 10 10 10'
															},
															{
																xtype : 'checkboxfield',
																id : 'chbxIOPMaternalId',
																checked : false,
																boxLabel : 'Maternal & Child Health Service',
																margin: '10 10 10 10'
															},
															{
																xtype : 'checkboxfield',
																id : 'chbxIOPLibraryId',
																checked : false,
																boxLabel : 'Library',
																margin: '10 10 10 10'
															},
															{
																xtype : 'checkboxfield',
																id : 'chbxIOPTrainStationId',
																checked : false,
																boxLabel : 'Train Station',
																margin: '10 10 10 10'
															},
															{
																xtype : 'checkboxfield',
																id : 'chbxIOPTramStopId',
																checked : false,
																boxLabel : 'Tram Stop',
																margin: '10 10 10 10'
															}
														]
													}
												},
												{
													title: 'Other Params',
													autoScroll:true,
													items:[
														{	xtype: 'numberfield',
															name: 'iopCtrlPointNum',
															margin:'10,5,5,10',
															id:'iopCtrlPointNumID',
															labelAlign:'right',
															labelWidth:150,
															fieldLabel: 'Cardinal Point Number',
															value: 9,
															maxValue: 15,
															minValue: 5
														},
														{	xtype: 'numberfield',
															name: 'iopBufferDist',
															margin:'10,5,5,10',
															id:'iopBufferDistID',
															labelAlign:'right',
															labelWidth:150,
															fieldLabel: 'LGA Border Buffer Size (m)',
															value: 500,
															maxValue: 3000,
															step: 100,
															minValue: 0
														}
													]
												}
												
												]
												,
													buttons:[
													{xtype: 'button',
															text : 'Ok',
															id: 'iopParameterOkButtonID',
															handler: function() {

																//prepare model params
																params={};
																
																params.iopCtrlPointNum = Ext.getCmp("iopCtrlPointNumID").value;
																params.iopBufferDist = Ext.getCmp("iopBufferDistID").value;
																
																params.regionCodeList = ca.regionCodeList;
																params.layerList = [];
																
																if(Ext.getCmp("chbxIOPHospitalId").checked){
																	var layerinfo = {};
																	layerinfo.layername = "hospital";
																	layerinfo.featsubtyps = ["general hospital", "general hospital (emergency)", "bush nursing hospital", "day procedure centre"];
																	layerinfo.layernameabbr = "HOS";
																	params.layerList.push(layerinfo);
																}

																if(Ext.getCmp("chbxIOPPrimarySchoolId").checked){
																	var layerinfo = {};
																	layerinfo.layername = "primary school";
																	layerinfo.featsubtyps = ["primary school"];
																	layerinfo.layernameabbr = "PRSC";
																	params.layerList.push(layerinfo);
																}
																
																if(Ext.getCmp("chbxIOPSecondarySchoolId").checked){
																	var layerinfo = {};
																	layerinfo.layername = "secondary school";
																	layerinfo.featsubtyps = ["secondary school"];
																	layerinfo.layernameabbr = "SESC";
																	params.layerList.push(layerinfo);
																}
																
																if(Ext.getCmp("chbxIOPPrimarySecondarySchoolId").checked){
																	var layerinfo = {};
																	layerinfo.layername = "primary/secondary school";
																	layerinfo.featsubtyps = ["primary/secondary school"];
																	layerinfo.layernameabbr = "PSSC";
																	params.layerList.push(layerinfo);
																}
																
																if(Ext.getCmp("chbxIOPMaternalId").checked){
																	var layerinfo = {};
																	layerinfo.layername = "maternal & child health centre";
																	layerinfo.featsubtyps = ["maternal/child health centre"];
																	layerinfo.layernameabbr = "MAT";
																	params.layerList.push(layerinfo);
																}
																
																if(Ext.getCmp("chbxIOPChildCareId").checked){
																	var layerinfo = {};
																	layerinfo.layername = "child care";
																	layerinfo.featsubtyps = ["child care"];
																	layerinfo.layernameabbr = "CHCA";
																	params.layerList.push(layerinfo);
																}
																
																if(Ext.getCmp("chbxIOPLibraryId").checked){
																	var layerinfo = {};
																	layerinfo.layername = "library";
																	layerinfo.featsubtyps = ["library"];
																	layerinfo.layernameabbr = "LIB";
																	params.layerList.push(layerinfo);
																}

																if(Ext.getCmp("chbxIOPTrainStationId").checked){
																	var layerinfo = {};
																	layerinfo.layername = "trainstation";
																	layerinfo.layernameabbr = "TRN";
																	layerinfo.featsubtyps = [];
																	params.layerList.push(layerinfo);
																}
																
																if(Ext.getCmp("chbxIOPTramStopId").checked){
																	var layerinfo = {};
																	layerinfo.layername = "tramstop";
																	layerinfo.layernameabbr = "TRM";
																	layerinfo.featsubtyps = [];
																	params.layerList.push(layerinfo);
																}
																
																if(params.layerList.length == 0){
																	messageHelper.showWarningWait("Need to choose at least one type of service.",2000);
																	return;
																}
																
																//get simid from server
																Ext.Ajax.request({
																   url: SERVICE_URL.initiop,
																   withCredentials:true,
																   timeout: 1000*60*60,
																   method:'POST',
																   params: {"params" : JSON.stringify(params)},
																   success: function(response, opts) {
																	  var obj = Ext.decode(response.responseText);
																	  console.log("==== done");
																	  
																	  //insert into SimPanelGrid
																	  simPanelGrid =  Ext.getCmp('iopSimPanelGridID');
																	  
																	  simPanelGrid.getStore().add(new CoM.model.modelSimPara({simid:obj.simid, simcode:"job_"+obj.simid,simpara:params, simstate:0, simoutput:{}}));
																		
																	  //simPanelGrid.getView().refresh();
																	  
																	  // there is a chance that the window is closed before ajax returns
																	  if(typeof Ext.getCmp('iopParamsWindowID') != "undefined"){
																		Ext.getCmp('iopParamsWindowID').close();
																	  }
																	  Ext.getCmp("btIOPConfigButtonID").disabled = false;
																	 
																   },
																   failure: function(response, opts) {
																	  console.log('server-side failure with status code ' + response.status);
																	  console.log('server-side failure details: ' + response.responseText);
																	  Ext.getCmp("btIOPConfigButtonID").disabled = false;

																   }
																});
															
															}
														}
													]
											}
											
										});
}