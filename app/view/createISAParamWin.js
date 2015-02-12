function createISAParamWin()
{	
	GLOBAL_VAR.isaParamWindow = Ext.create('Ext.Window', {
											title: 'ISA Configuration',
											id : 'isaParamsWindowID',
											width: 700,
											height: 500,
											x: 15,
											y: 90,
											headerPosition: 'top',
											layout: 'fit',
											modal : false,
											items: {
												xtype: 'tabpanel',
												activeTab: 0,
												itemId: 'tabPanel',
												id: 'isaParamsTabPanelID',
												items: [
													{
														title: 'General Services',
														layout: {
															type: 'table',
															columns: 5
														},
														autoScroll:true,
														defaults: {
															bodyStyle: 'padding:10px',
															border: 0,
															width:'100%'
														},
														items: [
															{
																html: ''
															},
															{
																html: 'Radius of Catchment Area (m)',
																colspan:2
															},
															{
																html: 'Council Optimum Population per Service',
																colspan:2
															},
															/*row 1 */
															{
																xtype : 'checkboxfield',
																id : 'chbxISAPrimarySchoolId',
																checked : false,
																boxLabel : 'Primary School',
																margin: '10 10 10 10',
																listeners: {
																	change: function(chbox, newValue, oldValue, eOpts) {
																		if(newValue){
																			Ext.getCmp("sldISAPrimarySchoolRadiusId").enable();
																			Ext.getCmp("txtISAPrimarySchoolOptiPopId").enable();
																		} else
																		{
																			Ext.getCmp("sldISAPrimarySchoolRadiusId").disable();
																			Ext.getCmp("txtISAPrimarySchoolOptiPopId").disable();
																		}
																	},
																	afterrender: function(obj) {
																			obj.tip = Ext.create('Ext.tip.ToolTip', {
																						target : obj.getEl().getAttribute("id"),
																						trackMouse : true,
																						html : 'target population age 6 - 12 yr'
																					});
																		
																	}
																}
															},
															{	xtype:'slider',
																margin: '10 10 10 10', 
																id : 'sldISAPrimarySchoolRadiusId',
																value: 800,
																width: 150,
																minValue: 500,
																maxValue: 2000,
																increment: 100,
																useTips: true,
																disabled: true,
																tdAttrs:{style:{align:'right'}},
																listeners: {
																	change: function(slider, newValue, thumb, eOpts ) {
																		Ext.getCmp("lblISAPrimarySchoolRadiusId").setText(newValue);
																	}
																}
															},
															{	xtype:'label',
																margin: '10 10 10 10', 
																id : 'lblISAPrimarySchoolRadiusId',
																text:'800',
																tdAttrs:{style:{width:60, align:'left'}}
															},
															{	xtype: 'numberfield',
															margin: '10 10 10 10', 
															id : 'txtISAPrimarySchoolOptiPopId',
															disabled: true,
															minValue: 100,
															maxValue: 100000,
															value: 8000,
															step: 100,
															width: 80
															},
															{	xtype:'label',
																margin: '10 10 10 10', 
																text:'Residents',
																tdAttrs:{style:{align:'left'}}
															},
															/*row 2 */
															{
																xtype : 'checkboxfield',
																id : 'chbxISASecondarySchoolId',
																checked : false,
																boxLabel : 'Secondary School',
																margin: '10 10 10 10',
																listeners: {
																	change: function(chbox, newValue, oldValue, eOpts) {
																		if(newValue){
																			Ext.getCmp("sldISASecondarySchoolRadiusId").enable();
																			Ext.getCmp("txtISASecondarySchoolOptiPopId").enable();
																		} else
																		{
																			Ext.getCmp("sldISASecondarySchoolRadiusId").disable();
																			Ext.getCmp("txtISASecondarySchoolOptiPopId").disable();
																		}
																	
																	},
																	afterrender: function(obj) {
																			obj.tip = Ext.create('Ext.tip.ToolTip', {
																						target : obj.getEl().getAttribute("id"),
																						trackMouse : true,
																						html : 'target population age 12 - 18 yr'
																					});
																		
																	}
																}
															},
															{	xtype:'slider',
																margin: '10 10 10 10', 
																id : 'sldISASecondarySchoolRadiusId',
																value: 800,
																width: 150,
																minValue: 500,
																maxValue: 2000,
																increment: 100,
																useTips: true,
																disabled: true,
																tdAttrs:{style:{align:'right'}},
																listeners: {
																	change: function(slider, newValue, thumb, eOpts ) {
																		Ext.getCmp("lblISASecondarySchoolRadiusId").setText(newValue);
																	}
																}
															},
															{	xtype:'label',
																margin: '10 10 10 10', 
																id : 'lblISASecondarySchoolRadiusId',
																text:'800',
																tdAttrs:{style:{width:60, align:'left'}}
															},
															{	xtype: 'numberfield',
															margin: '10 10 10 10', 
															id : 'txtISASecondarySchoolOptiPopId',
															disabled: true,
															minValue: 100,
															maxValue: 100000,
															value: 25000,
															step: 100,
															width: 80
															},
															{	xtype:'label',
																margin: '10 10 10 10', 
																text:'Residents',
																tdAttrs:{style:{align:'left'}}
															},
															/*row 3 */
															{
																xtype : 'checkboxfield',
																id : 'chbxISAPrimarySecondarySchoolId',
																checked : false,
																boxLabel : 'Primary/Secondary School',
																margin: '10 10 10 10',
																listeners: {
																	change: function(chbox, newValue, oldValue, eOpts) {
																		if(newValue){
																			Ext.getCmp("sldISAPrimarySecondarySchoolRadiusId").enable();
																			Ext.getCmp("txtISAPrimarySecondarySchoolOptiPopId").enable();
																		} else
																		{
																			Ext.getCmp("sldISAPrimarySecondarySchoolRadiusId").disable();
																			Ext.getCmp("txtISAPrimarySecondarySchoolOptiPopId").disable();
																		}
																	
																	},
																	afterrender: function(obj) {
																			obj.tip = Ext.create('Ext.tip.ToolTip', {
																						target : obj.getEl().getAttribute("id"),
																						trackMouse : true,
																						html : 'target population age 6 - 18 yr'
																					});
																		
																	}
																}
															},
															{	xtype:'slider',
																margin: '10 10 10 10', 
																id : 'sldISAPrimarySecondarySchoolRadiusId',
																value: 800,
																width: 150,
																minValue: 500,
																maxValue: 2000,
																increment: 100,
																useTips: true,
																disabled: true,
																tdAttrs:{style:{align:'right'}},
																listeners: {
																	change: function(slider, newValue, thumb, eOpts ) {
																		Ext.getCmp("lblISAPrimarySecondarySchoolRadiusId").setText(newValue);
																	}
																}
															},
															{	xtype:'label',
																margin: '10 10 10 10', 
																id : 'lblISAPrimarySecondarySchoolRadiusId',
																text:'800',
																tdAttrs:{style:{width:60, align:'left'}}
															},
															{	xtype: 'numberfield',
															margin: '10 10 10 10', 
															id : 'txtISAPrimarySecondarySchoolOptiPopId',
															disabled: true,
															minValue: 100,
															maxValue: 100000,
															value: 16500,
															step: 100,
															width: 80
															},
															{	xtype:'label',
																margin: '10 10 10 10', 
																text:'Residents',
																tdAttrs:{style:{align:'left'}}
															},
															/*row 4 */
															{
																xtype : 'checkboxfield',
																id : 'chbxISAMaternalId',
																checked : false,
																boxLabel : 'Maternal & Child Health Service',
																margin: '10 10 10 10',
																listeners: {
																	change: function(chbox, newValue, oldValue, eOpts) {
																		if(newValue){
																			Ext.getCmp("sldISAMaternalRadiusId").enable();
																			Ext.getCmp("txtISAMaternalOptiPopId").enable();
																		} else
																		{
																			Ext.getCmp("sldISAMaternalRadiusId").disable();
																			Ext.getCmp("txtISAMaternalOptiPopId").disable();
																		}
																	
																	},
																	afterrender: function(obj) {
																			obj.tip = Ext.create('Ext.tip.ToolTip', {
																						target : obj.getEl().getAttribute("id"),
																						trackMouse : true,
																						html : 'target population age 25 - 40 yr, female only'
																					});
																		
																	}
																}
															},
															{	xtype:'slider',
																margin: '10 10 10 10', 
																id : 'sldISAMaternalRadiusId',
																value: 800,
																width: 150,
																minValue: 500,
																maxValue: 2000,
																increment: 100,
																useTips: true,
																disabled: true,
																tdAttrs:{style:{align:'right'}},
																listeners: {
																	change: function(slider, newValue, thumb, eOpts ) {
																		Ext.getCmp("lblISAMaternalRadiusId").setText(newValue);
																	}
																}
															},
															{	xtype:'label',
																margin: '10 10 10 10', 
																id : 'lblISAMaternalRadiusId',
																text:'800',
																tdAttrs:{style:{width:60, align:'left'}}
															},
															{	xtype: 'numberfield',
															margin: '10 10 10 10', 
															id : 'txtISAMaternalOptiPopId',
															disabled: true,
															minValue: 100,
															maxValue: 100000,
															value: 16000,
															step: 100,
															width: 80
															},
															{	xtype:'label',
																margin: '10 10 10 10', 
																text:'Residents',
																tdAttrs:{style:{align:'left'}}
															},
															/*row 5 */
															{
																xtype : 'checkboxfield',
																id : 'chbxISAChildCareId',
																checked : false,
																boxLabel : 'Child Care',
																margin: '10 10 10 10',
																listeners: {
																	change: function(chbox, newValue, oldValue, eOpts) {
																		if(newValue){
																			Ext.getCmp("sldISAChildCareRadiusId").enable();
																			Ext.getCmp("txtISAChildCareOptiPopId").enable();
																		} else
																		{
																			Ext.getCmp("sldISAChildCareRadiusId").disable();
																			Ext.getCmp("txtISAChildCareOptiPopId").disable();
																		}
																	
																	},
																	afterrender: function(obj) {
																			obj.tip = Ext.create('Ext.tip.ToolTip', {
																						target : obj.getEl().getAttribute("id"),
																						trackMouse : true,
																						html : 'target population age 0 - 5 yr'
																					});
																		
																	}
																}
															},
															{	xtype:'slider',
																margin: '10 10 10 10', 
																id : 'sldISAChildCareRadiusId',
																value: 800,
																width: 150,
																minValue: 500,
																maxValue: 2000,
																increment: 100,
																useTips: true,
																disabled: true,
																tdAttrs:{style:{align:'right'}},
																listeners: {
																	change: function(slider, newValue, thumb, eOpts ) {
																		Ext.getCmp("lblISAChildCareRadiusId").setText(newValue);
																	}
																}
															},
															{	xtype:'label',
																margin: '10 10 10 10', 
																id : 'lblISAChildCareRadiusId',
																text:'800',
																tdAttrs:{style:{width:60, align:'left'}}
															},
															{	xtype: 'numberfield',
															margin: '10 10 10 10', 
															id : 'txtISAChildCareOptiPopId',
															disabled: true,
															minValue: 100,
															maxValue: 100000,
															value: 10000,
															step: 100,
															width: 80
															},
															{	xtype:'label',
																margin: '10 10 10 10', 
																text:'Residents',
																tdAttrs:{style:{align:'left'}}
															},
															/*row 6 */
															{
																xtype : 'checkboxfield',
																id : 'chbxISALibraryId',
																checked : false,
																boxLabel : 'Library',
																margin: '10 10 10 10',
																listeners: {
																	change: function(chbox, newValue, oldValue, eOpts) {
																		if(newValue){
																			Ext.getCmp("sldISALibraryRadiusId").enable();
																			Ext.getCmp("txtISALibraryOptiPopId").enable();
																		} else
																		{
																			Ext.getCmp("sldISALibraryRadiusId").disable();
																			Ext.getCmp("txtISALibraryOptiPopId").disable();
																		}
																	
																	},
																	afterrender: function(obj) {
																			obj.tip = Ext.create('Ext.tip.ToolTip', {
																						target : obj.getEl().getAttribute("id"),
																						trackMouse : true,
																						html : 'target population in all age groups'
																					});
																		
																	}
																}
															},
															{	xtype:'slider',
																margin: '10 10 10 10', 
																id : 'sldISALibraryRadiusId',
																value: 800,
																width: 150,
																minValue: 500,
																maxValue: 2000,
																increment: 100,
																useTips: true,
																disabled: true,
																tdAttrs:{style:{align:'right'}},
																listeners: {
																	change: function(slider, newValue, thumb, eOpts ) {
																		Ext.getCmp("lblISALibraryRadiusId").setText(newValue);
																	}
																}
															},
															{	xtype:'label',
																margin: '10 10 10 10', 
																id : 'lblISALibraryRadiusId',
																text:'800',
																tdAttrs:{style:{width:60, align:'left'}}
															},
															{	xtype: 'numberfield',
															margin: '10 10 10 10', 
															id : 'txtISALibraryOptiPopId',
															disabled: true,
															minValue: 100,
															maxValue: 100000,
															value: 30000,
															step: 100,
															width: 80
															},
															{	xtype:'label',
																margin: '10 10 10 10', 
																text:'Residents',
																tdAttrs:{style:{align:'left'}}
															},
															/*row 7 */
															{
																xtype : 'checkboxfield',
																id : 'chbxISAPlaygroundId',
																checked : false,
																boxLabel : 'Playground',
																margin: '10 10 10 10',
																listeners: {
																	change: function(chbox, newValue, oldValue, eOpts) {
																		if(newValue){
																			Ext.getCmp("sldISAPlaygroundRadiusId").enable();
																			Ext.getCmp("txtISAPlaygroundOptiPopId").enable();
																		} else
																		{
																			Ext.getCmp("sldISAPlaygroundRadiusId").disable();
																			Ext.getCmp("txtISAPlaygroundOptiPopId").disable();
																		}
																	
																	},
																	afterrender: function(obj) {
																			obj.tip = Ext.create('Ext.tip.ToolTip', {
																						target : obj.getEl().getAttribute("id"),
																						trackMouse : true,
																						html : 'target population age 0 - 11 yr'
																					});
																		
																	}
																}
															},
															{	xtype:'slider',
																margin: '10 10 10 10', 
																id : 'sldISAPlaygroundRadiusId',
																value: 300,
																width: 150,
																minValue: 100,
																maxValue: 1000,
																increment: 100,
																useTips: true,
																disabled: true,
																tdAttrs:{style:{align:'right'}},
																listeners: {
																	change: function(slider, newValue, thumb, eOpts ) {
																		Ext.getCmp("lblISAPlaygroundRadiusId").setText(newValue);
																	}
																}
															},
															{	xtype:'label',
																margin: '10 10 10 10', 
																id : 'lblISAPlaygroundRadiusId',
																text:'300',
																tdAttrs:{style:{width:60, align:'left'}}
															},
															{	xtype: 'numberfield',
															margin: '10 10 10 10', 
															id : 'txtISAPlaygroundOptiPopId',
															disabled: true,
															minValue: 100,
															maxValue: 1000,
															value: 333,
															step: 1,
															width: 80
															},
															{	xtype:'label',
																margin: '10 10 10 10', 
																text:'Residents',
																tdAttrs:{style:{align:'left'}}
															},
															/*row 8 */
															{
																xtype : 'checkboxfield',
																id : 'chbxISAParkId',
																checked : false,
																boxLabel : 'Park',
																margin: '10 10 10 10',
																listeners: {
																	change: function(chbox, newValue, oldValue, eOpts) {
																		if(newValue){
																			Ext.getCmp("sldISAParkRadiusId").enable();
																			Ext.getCmp("txtISAParkOptiPopId").enable();
																		} else
																		{
																			Ext.getCmp("sldISAParkRadiusId").disable();
																			Ext.getCmp("txtISAParkOptiPopId").disable();
																		}
																	
																	},
																	afterrender: function(obj) {
																			obj.tip = Ext.create('Ext.tip.ToolTip', {
																						target : obj.getEl().getAttribute("id"),
																						trackMouse : true,
																						html : 'target population in all age groups'
																					});
																		
																	}
																}
															},
															{	xtype:'slider',
																margin: '10 10 10 10', 
																id : 'sldISAParkRadiusId',
																disabled: true,
																value: 300,
																width: 150,
																minValue: 100,
																maxValue: 1000,
																increment: 100,
																useTips: true,
																tdAttrs:{style:{align:'right'}},
																listeners: {
																	change: function(slider, newValue, thumb, eOpts ) {
																		Ext.getCmp("lblISAParkRadiusId").setText(newValue);
																	}
																}
															},
															{	xtype:'label',
																margin: '10 10 10 10', 
																id : 'lblISAParkRadiusId',
																text:'300',
																tdAttrs:{style:{width:60, align:'left'}}
															},
															{	xtype: 'numberfield',
															margin: '10 10 10 10', 
															id : 'txtISAParkOptiPopId',
															disabled: true,
															minValue: 100,
															maxValue: 10000,
															value: 1000,
															step: 100,
															width: 80
															},
															{	xtype:'label',
																margin: '10 10 10 10', 
																text:'Residents',
																tdAttrs:{style:{align:'left'}}
															}
														]
														
													},
													{
													title: 'Other Params',
													autoScroll:true,
													items:[
															{xtype: 'numberfield',
																name: 'isaNetBufSize',
																margin:'10,5,5,10',
																id:'isaNetBufSizeID',
																labelAlign:'left',
																labelWidth: 200,
																fieldLabel: 'Road Network Buffer Size (m)',
																value: 150,
																maxValue: 200,
																step: 10,
																minValue: 20
															}
														]
													}
												]
												,
												buttons:[
													{xtype: 'button',
															text : 'Ok',
															id: 'isaParameterOkButtonID',
															handler: function() {

																//prepare model params
																params={};
															
																params.regionCodeList = ca.regionCodeList;
																params.layerList = [];

																if(Ext.getCmp("chbxISAPrimarySchoolId").checked){
																	var layerinfo = {};
																	layerinfo.layername = "primary school";
																	layerinfo.featsubtyps = ["primary school"];
																	layerinfo.layernameabbr = "PRSC";
																	layerinfo.catchmentradius = Ext.getCmp("sldISAPrimarySchoolRadiusId").getValue();
																	layerinfo.optipop = Ext.getCmp("txtISAPrimarySchoolOptiPopId").value;
																	layerinfo.mages = "6-12";
																	layerinfo.fages = "6-12";
																	params.layerList.push(layerinfo);
																}
																
																if(Ext.getCmp("chbxISASecondarySchoolId").checked){
																	var layerinfo = {};
																	layerinfo.layername = "secondary school";
																	layerinfo.featsubtyps = ["secondary school"];
																	layerinfo.layernameabbr = "SESC";
																	layerinfo.catchmentradius = Ext.getCmp("sldISASecondarySchoolRadiusId").getValue();
																	layerinfo.optipop = Ext.getCmp("txtISASecondarySchoolOptiPopId").value;
																	layerinfo.mages = "12-18";
																	layerinfo.fages = "12-18";
																	params.layerList.push(layerinfo);
																}
																
																if(Ext.getCmp("chbxISAPrimarySecondarySchoolId").checked){
																	var layerinfo = {};
																	layerinfo.layername = "primary/secondary school";
																	layerinfo.featsubtyps = ["primary/secondary school"];
																	layerinfo.layernameabbr = "PSSC";
																	layerinfo.catchmentradius = Ext.getCmp("sldISAPrimarySecondarySchoolRadiusId").getValue();
																	layerinfo.optipop = Ext.getCmp("txtISAPrimarySecondarySchoolOptiPopId").value;
																	layerinfo.mages = "6-18";
																	layerinfo.fages = "6-18";
																	params.layerList.push(layerinfo);
																}
																
																if(Ext.getCmp("chbxISAMaternalId").checked){
																	var layerinfo = {};
																	layerinfo.layername = "maternal & child health centre";
																	layerinfo.featsubtyps = ["maternal/child health centre"];
																	layerinfo.layernameabbr = "MAT";
																	layerinfo.catchmentradius = Ext.getCmp("sldISAMaternalRadiusId").getValue();
																	layerinfo.optipop = Ext.getCmp("txtISAMaternalOptiPopId").value;
																	layerinfo.mages = "none";
																	layerinfo.fages = "25-40";
																	params.layerList.push(layerinfo);
																}
																
																if(Ext.getCmp("chbxISAChildCareId").checked){
																	var layerinfo = {};
																	layerinfo.layername = "child care";
																	layerinfo.featsubtyps = ["child care"];
																	layerinfo.layernameabbr = "CHCA";
																	layerinfo.catchmentradius = Ext.getCmp("sldISAChildCareRadiusId").getValue();
																	layerinfo.optipop = Ext.getCmp("txtISAChildCareOptiPopId").value;
																	layerinfo.mages = "0-5";
																	layerinfo.fages = "0-5";
																	params.layerList.push(layerinfo);
																}
																
																if(Ext.getCmp("chbxISALibraryId").checked){
																	var layerinfo = {};
																	layerinfo.layername = "library";
																	layerinfo.featsubtyps = ["library"];
																	layerinfo.layernameabbr = "LIB";
																	layerinfo.catchmentradius = Ext.getCmp("sldISALibraryRadiusId").getValue();
																	layerinfo.optipop = Ext.getCmp("txtISALibraryOptiPopId").value;
																	layerinfo.mages = "all";
																	layerinfo.fages = "all";
																	params.layerList.push(layerinfo);
																}
																
																if(Ext.getCmp("chbxISAPlaygroundId").checked){
																	var layerinfo = {};
																	layerinfo.layername = "playground";
																	layerinfo.featsubtyps = ["playground"];
																	layerinfo.layernameabbr = "PLG";
																	layerinfo.catchmentradius = Ext.getCmp("sldISAPlaygroundRadiusId").getValue();
																	layerinfo.optipop = Ext.getCmp("txtISAPlaygroundOptiPopId").value;
																	layerinfo.mages = "0-11";
																	layerinfo.fages = "0-11";
																	params.layerList.push(layerinfo);
																}
																
																if(Ext.getCmp("chbxISAParkId").checked){
																	var layerinfo = {};
																	layerinfo.layername = "park";
																	layerinfo.featsubtyps = ["park","gardens"];
																	layerinfo.layernameabbr = "PARK";
																	layerinfo.catchmentradius = Ext.getCmp("sldISAParkRadiusId").getValue();
																	layerinfo.optipop = Ext.getCmp("txtISAParkOptiPopId").value;
																	layerinfo.mages = "all";
																	layerinfo.fages = "all";
																	params.layerList.push(layerinfo);
																}
																
																if(params.layerList.length == 0){
																	messageHelper.showWarningWait("Need to choose at least one type of service.",2000);
																	return;
																}
																
																// set network buffer size, default is 100
																params.netbufSize = Ext.getCmp("isaNetBufSizeID").value;
																
																//get simid from server
																Ext.Ajax.request({
																   url: SERVICE_URL.initisa,
																   withCredentials:true,
																   timeout: 1000*60*60,
																   method:'POST',
																   params: {"params" : JSON.stringify(params)},
																   success: function(response, opts) {
																	  var obj = Ext.decode(response.responseText);
																	  console.log("==== done");
																	  
																	  //insert into SimPanelGrid
																	  simPanelGrid =  Ext.getCmp('isaSimPanelGridID');
																	  
																	  simPanelGrid.getStore().add(new CoM.model.modelSimPara({simid:obj.simid, simcode:"job_"+obj.simid,simpara:params, simstate:0, simoutput:{}}));
																		
																	  //simPanelGrid.getView().refresh();
																	  
																	  // there is a chance that the window is closed before ajax returns
																	  if(typeof Ext.getCmp('isaParamsWindowID') != "undefined"){
																		Ext.getCmp('isaParamsWindowID').close();
																	  }
																	  Ext.getCmp("btISAConfigButtonID").disabled = false;
																	 
																   },
																   failure: function(response, opts) {
																	  console.log('server-side failure with status code ' + response.status);
																	  console.log('server-side failure details: ' + response.responseText);
																	  Ext.getCmp("btISAConfigButtonID").disabled = false;

																   }
																});
															
															}
														}
													]
											}
											
										});
										
}