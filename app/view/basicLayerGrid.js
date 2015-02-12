Ext.define('CoM.view.basicLayerGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.basicLayerGrid',
    requires: ['Ext.grid.column.Action','Ext.chart.Chart'],
    xtype: 'array-grid',
    stateful: false,
    collapsible: false,
    multiSelect: false,
    stateId: 'stateGrid',
    viewConfig: {
		markDirty:false, //this prevent the "red triangle/corner" in the changed cell
        stripeRows: true,
        enableTextSelection: true
    },

    initComponent: function () {
        this.scroll = 'vertical';
         this.store = {
			model : 'CoM.model.modelLayerInfo',
            data  : [
					{
						layerdisplayname:'Hospital',
						layername: 'Hospital',    
						layertype: 'point', 
						layervisible:false, 
						plname: '',
						plgeometrytype: '',
						plgeometrycount: -1,
						layerconfig:{
									foikeywords: 'hospital',
									foitype: 'ftype',
									foigeom: 'point',
									mapmarkericonurl:'images/foi-icons/small/hospital.png',
									iconurl:'images/foi-icons/small/hospital.png',
									servicetype:'WFS'
									},
						showdownload:true,
						requiredefinedcasearea:true
					},
					{
						layerdisplayname:'Primary School',
						layername: 'Primary School',    
						layertype: 'point', 
						layervisible:false, 
						plname: '',
						plgeometrytype: '',
						plgeometrycount: -1,
						layerconfig:{
									foikeywords: 'primary school',
									foitype: 'featsubtyp',
									foigeom: 'point',
									mapmarkericonurl:'images/foi-icons/small/primary_school.png',
									iconurl:'images/foi-icons/small/primary_school.png',
									servicetype:'WFS'
									},
						showdownload:true,
						requiredefinedcasearea:true
					},
					{
						layerdisplayname:'Secondary School',
						layername: 'Secondary School',    
						layertype: 'point', 
						layervisible:false, 
						plname: '',
						plgeometrytype: '',
						plgeometrycount: -1,
						layerconfig:{
									foikeywords: 'secondary school',
									foitype: 'featsubtyp',
									foigeom: 'point',
									mapmarkericonurl:'images/foi-icons/small/secondary_school.png',
									iconurl:'images/foi-icons/small/secondary_school.png',
									servicetype:'WFS'
									},
						showdownload:true,
						requiredefinedcasearea:true
					},
					{
						layerdisplayname:'Primary/Secondary School',
						layername: 'Primary/Secondary School',    
						layertype: 'point', 
						layervisible:false, 
						plname: '',
						plgeometrytype: '',
						plgeometrycount: -1,
						layerconfig:{
									foikeywords: 'primary/secondary school',
									foitype: 'featsubtyp',
									foigeom: 'point',
									mapmarkericonurl:'images/foi-icons/small/primary_secondary_school.png',
									iconurl:'images/foi-icons/small/primary_secondary_school.png',
									servicetype:'WFS'
									},
						showdownload:true,
						requiredefinedcasearea:true
					},
					{
						layerdisplayname:'Library',
						layername: 'Library',    
						layertype: 'point', 
						layervisible:false, 
						plname: '',
						plgeometrytype: '',
						plgeometrycount: -1,
						layerconfig:{
									foikeywords: 'library',
									foitype: 'featsubtyp',
									mapmarkericonurl:'images/foi-icons/small/library.png',
									iconurl:'images/foi-icons/small/library.png',
									servicetype:'WFS'
									},
						showdownload:true,
						requiredefinedcasearea:true
					},
					{
						layerdisplayname:'Maternal & Child Health Centre',
						layername: 'Maternal & Child Health Centre',    
						layertype: 'point', 
						layervisible:false, 
						plname: '',
						plgeometrytype: '',
						plgeometrycount: -1,
						layerconfig:{
									foikeywords: 'maternal/child health centre',
									foitype: 'featsubtyp',
									foigeom: 'point',
									mapmarkericonurl:'images/foi-icons/small/maternal_child_health.png',
									iconurl:'images/foi-icons/small/maternal_child_health.png',
									servicetype:'WFS'
									},
						showdownload:true,
						requiredefinedcasearea:true
					},
					{
						layerdisplayname:'Child Care',
						layername: 'Child Care',    
						layertype: 'point', 
						layervisible:false, 
						plname: '',
						plgeometrytype: '',
						plgeometrycount: -1,
						layerconfig:{
									foikeywords: 'child care',
									foitype: 'featsubtyp',
									foigeom: 'point',
									mapmarkericonurl:'images/foi-icons/small/child.png',
									iconurl:'images/foi-icons/small/child.png',
									servicetype:'WFS'
									},
						showdownload:true,
						requiredefinedcasearea:true
					},
					{
						layerdisplayname:'Playground',
						layername: 'Playground',    
						layertype: 'point', 
						layervisible:false, 
						plname: '',
						plgeometrytype: '',
						plgeometrycount: -1,
						layerconfig:{
									foikeywords: 'playground',
									foitype: 'featsubtyp',
									foigeom: 'point',
									mapmarkericonurl:'images/foi-icons/small/playground.png',
									iconurl:'images/foi-icons/small/playground.png',
									servicetype:'WFS'
									},
						showdownload:true,
						requiredefinedcasearea:true
					},
					{
						layerdisplayname:'Park',
						layername: 'Park',    
						layertype: 'polygon', 
						layervisible:false, 
						plname: '',
						plgeometrytype: '',
						plgeometrycount: -1,
						layerconfig:{
									foikeywords: 'park,gardens',
									foitype: 'featsubtyp',
									foigeom: 'polygon',
									//mapmarkericonurl:'images/foi-icons/small/park.png',
									iconurl:'images/foi-icons/small/park.png',
									servicetype:'WFS'
									},
						showdownload:true,
						requiredefinedcasearea:true
					},
					{
						layerdisplayname:'Train Station',
						layername: 'Train Station',    
						layertype: 'point', 
						layervisible:false, 
						plname: '',
						plgeometrytype: '',
						plgeometrycount: -1,
						layerconfig:{
									mapmarkericonurl:'images/foi-icons/small/train.png',
									iconurl:'images/foi-icons/small/train.png',
									servicetype:'WFS'
									},
						showdownload:true,
						requiredefinedcasearea:true
					},
					{
						layerdisplayname:'Tram Stop',
						layername: 'Tram Stop',    
						layertype: 'point', 
						layervisible:false, 
						plname: '',
						plgeometrytype: '',
						plgeometrycount: -1,
						layerconfig:{
									mapmarkericonurl:'images/foi-icons/small/tram.png',
									iconurl:'images/foi-icons/small/tram.png',
									servicetype:'WFS'
									},
						showdownload:true,
						requiredefinedcasearea:true
					}/*,
					{
						layerdisplayname:'SA1',
						layername: 'SA1',    
						layertype: 'polygon', 
						layervisible:false, 
						plname: '',
						plgeometrytype: '',
						plgeometrycount: -1,
						layerconfig:{
									iconurl:'images/foi-icons/small/polygon.png',
									servicetype:'WFS'
									},
						showdownload:true,
						requiredefinedcasearea:true
					},
					{
						layerdisplayname:'Meshblock',
						layername: 'Meshblock',    
						layertype: 'polygon', 
						layervisible:false, 
						plname: '',
						plgeometrytype: '',
						plgeometrycount: -1,
						layerconfig:{
									iconurl:'images/foi-icons/small/polygon.png',
									servicetype:'WFS'
									},
						showdownload:true,
						requiredefinedcasearea:true
					}*/
            ]
        };
        this.columns = [
            {
                text     : 'LayerName',
                flex     : 1,
                sortable : false,
                dataIndex: 'layerdisplayname',
				renderer: function(value, metaData, record, rowIndex, colIndex, store) {
					return '<img src="'+record.data.layerconfig.iconurl+'"/> '+ value;
					}
            },
            {
                text     : 'GeomNum',
                width    : 65,
                sortable : false,
                dataIndex: 'plgeometrycount'
            },
            {
            	text     : 'Action',
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 55,
                items: [
							{
								iconCls: 'layer-config',
								tooltip: 'config',
								handler: function(grid, rowIndex, colIndex) {
								
									var rec = grid.getStore().getAt(rowIndex);
									
									// test if ca is selected
									if(typeof rec.get('requiredefinedcasearea') !== "undefined" && rec.get('requiredefinedcasearea') == true){
										if(ca.regionCodeList.length == 0){
											
											messageHelper.showWarningWait("Need to choose at least one Case Area",2000);
											return;
										}
									}
									
									
									if(rec.get('layerconfig').servicetype === "WFS"){
										
										var tmpLayerName = rec.get('layername');
										var loadWFSLayerWinID = "loadWFSLayerWinID@"+rowIndex+"@"+tmpLayerName;
										//check if the window is already on, 
										if(typeof Ext.getCmp(loadWFSLayerWinID) != "undefined"){
											console.log("load wfs window is already on.")
											return;
										}
										
										var win = Ext.create('Ext.Window', {
											id: loadWFSLayerWinID,
											title: 'Layer Configuration : ' + tmpLayerName,
											width: 400,
											height: 300,
											x: 450,
											y: 200,
											headerPosition: 'top',
											layout: 'fit',
											items: [{
												xtype: 'basicLayerAttributeGrid',
												id:'layerattributegridID@'+loadWFSLayerWinID
											},{
												border: false
											}],
											buttons:[
													{xtype: 'image',
															src: 'images/processing.gif',
															id: 'processingWFSLayerButtonID@'+loadWFSLayerWinID,
															width: 20,
															height:20,
															hidden: true,
															cls: 'iddss-imgButtonCls',
															listeners: {
																render: function(cmp) {
																	Ext.create('Ext.tip.ToolTip', {
																		target: cmp.el,
																		html: "<b>in processing</b>"
																	});
																},
																click: {
																	element: 'el', //bind to the underlying el property on the panel
																	fn: function(){
																		//console.log('show processing'); 
																	}
																}
															}
													},
													{xtype: 'button',
														text : 'Load',
														id: 'loadWFSLayerButtonID@'+loadWFSLayerWinID,
														handler: function() {
																console.log("========= start loading");
																//buttons control
																Ext.getCmp('processingWFSLayerButtonID@'+loadWFSLayerWinID).setVisible(true);
																Ext.getCmp('loadWFSLayerButtonID@'+loadWFSLayerWinID).disable();
																Ext.getCmp(loadWFSLayerWinID).tools.close.setVisible(false);
																saveLayerAttr(rec, loadWFSLayerWinID);
																
																var layerConfig = rec.get('layerconfig');
																var layertype = rec.get('layertype');
																//if foi keyword provide, get url in a different way.
																if(typeof layerConfig.foikeywords !== "undefined"){
																	layerConfig.url = utilHelper.parseRegionalFoIWfsUrl(layerConfig.foitype, layerConfig.foikeywords, layerConfig.foigeom);
																}
																if(rec.get('layername') === "Train Station"){
																	layerConfig.url = utilHelper.parseRegionalWfsUrl(CONSTANT_FOI_LAYER.layerNameTrainStation);
																}else if(rec.get('layername') === "Tram Stop"){
																	layerConfig.url = utilHelper.parseRegionalWfsUrl(CONSTANT_FOI_LAYER.layerNameTramStop);
																}else if(rec.get('layername') === "SA1"){
																	layerConfig.url = utilHelper.parseRegionalWfsUrl(CONSTANT_FOI_LAYER.layerNameSA1);
																}else if(rec.get('layername') === "Meshblock"){
																	layerConfig.url = utilHelper.parseRegionalWfsUrl(CONSTANT_FOI_LAYER.layerNameMeshblock);
																}
																
																console.log(layerConfig.url);
																//try to remove related primitivelayer if exists
																olHelper.removeLayerByLayerName(rec.get('layername'));
																
																//if colorValueField provided, need to load the max/min value from geoserver first then prepare styling for this layer
																if(typeof layerConfig.colorValueField != "undefined"){
																	
																	// get the query url ready 
																	var targetUrl = layerConfig.url+"&propertyName="+layerConfig.colorValueField;
																	//console.log(targetUrl);
																	Ext.Ajax.useDefaultXhrHeader = false;

																	Ext.Ajax.request({
																					   url: encodeURI(targetUrl),
																					   method:'GET',
																					   success: function(response, opts) {
																						  var obj = Ext.decode(response.responseText);
																						  var features = obj.features;
																						  testObj = obj;
																						  //now lets find the max/min value for this property
																						  var min = 99999999.0;
																						  var max = 0.0;
																						  for(var i=0;i<features.length; i++){
																							
																							var v = features[i].properties[layerConfig.colorValueField];
																							if(v>max){
																								max = v;
																							}
																							if(v<min){
																								min = v;
																							}
																						  }
																							console.log("max:"+max+" min:"+min);
																							
																							//create a legend window for current layer start
																							var legendWFSLayerWinID = "legendWFSLayerWinID@"+rowIndex+"@"+tmpLayerName+"@"+layerConfig.colorValueField;
																							
																							if(typeof Ext.getCmp(legendWFSLayerWinID) !== "undefined"){
																								Ext.getCmp(legendWFSLayerWinID).destroy();
																							}
																							var legendItemArr = [];
																							var itemHeaderRank = {};
																							itemHeaderRank.html = "<b>rank</b>";
																							itemHeaderRank.width = 80;
																							
																							legendItemArr.push(itemHeaderRank);
																							var itemHeaderColor = {};
																							itemHeaderColor.html = "<b>color</b>";
																							itemHeaderColor.width = 120;
																							legendItemArr.push(itemHeaderColor);
																							
																							var dynamicRampStlyeNumber  = utilHelper.getColorRampStyleNumber(layerConfig.colorRamp);
																							
																							if(dynamicRampStlyeNumber<max){
																								var interval = Math.floor((max-min)/dynamicRampStlyeNumber)
																								for(var i=0;i<dynamicRampStlyeNumber; i++)
																								{
																									var itemRank = {};
																									if(i==dynamicRampStlyeNumber-1){
																										itemRank.html = ""+(i*interval+1)+" - " + max;
																									}else{
																										itemRank.html = ""+(i*interval+1)+" - " + (i+1)*interval;
																									}
																									itemRank.width = 80;
																									legendItemArr.push(itemRank);
																									
																									var itemColorBar = {};
																									var rgbColor = utilHelper.getColorRampRGB(layerConfig.colorRamp, dynamicRampStlyeNumber - 1 - i);
																									
																									itemColorBar.html = '<div style="background-color:rgb('+rgbColor[0]+','+rgbColor[1]+','+rgbColor[2]+')" width="100%">&nbsp;</div>';
																									
																									itemColorBar.width = 120;
																									legendItemArr.push(itemColorBar);
																								}
																							} else {
																								for(var i=min;i<=max; i++)
																								{
																									var itemRank = {};
																									itemRank.html = ""+i;
																									itemRank.width = 80;
																									legendItemArr.push(itemRank);
																									
																									
																									var idx = dynamicRampStlyeNumber - 1;
																									if((max-min) > 0){
																										idx = Math.floor((i-min) / (max-min) * dynamicRampStlyeNumber);
																									}
																									
																									var itemColorBar = {};
																									var rgbColor = utilHelper.getColorRampRGB(layerConfig.colorRamp, dynamicRampStlyeNumber - 1 - idx);
																									
																									itemColorBar.html = '<div style="background-color:rgb('+rgbColor[0]+','+rgbColor[1]+','+rgbColor[2]+')" width="100%">&nbsp;</div>';
																									
																									itemColorBar.width = 120;
																									legendItemArr.push(itemColorBar);
																								}
																							}
																							
																							
																							var wintitleComponents = tmpLayerName.split("_");
																							var wintitle = "Legend: "+ wintitleComponents[0]+"_"+wintitleComponents[1]+ " (" + rec.get('layerdisplayname') + ")";
																							var legendWin = Ext.create('Ext.Window', {
																								id: legendWFSLayerWinID,
																								title: wintitle,
																								width: 250,
																								height: 250,
																								x: 15,
																								y: 90,
																								closeAction:'hide',
																								headerPosition: 'top',
																								layout: {
																										type: 'table',
																										columns: 2
																									},
																								autoScroll:true,
																								defaults: {
																										bodyStyle: 'background:transparent;margin-left:5px;margin-top:2px',
																										border: 0,
																										width:'100%'
																									},
																								items:legendItemArr
																								}
																								
																							);
																							
																							rec.set('legendwinid', legendWFSLayerWinID);
																							//create a legend window for current layer end
																							
																							
																							//then load it again
																							//ref: http://openlayers.org/ol3-workshop/vector-style/style.html
																							var vector = new ol.layer.Vector({
																							  source: new ol.source.GeoJSON({
																								projection: 'EPSG:3857',
																								url: layerConfig.url
																							  }),
																							  style: (function() {
																								  return function(feature, resolution) {
																								  
																									var dynamicRampStlyeNumber  = utilHelper.getColorRampStyleNumber(layerConfig.colorRamp);
																									var idx = dynamicRampStlyeNumber - 1;
																									if((max-min) > 0){
																										idx = Math.floor((feature.get(layerConfig.colorValueField) - min) / (max-min) * dynamicRampStlyeNumber);
																									} 
																									var dynamicStyle = utilHelper.getColorRampStyle(layerConfig.colorRamp, idx);
																									return dynamicStyle;
																								  };
																								})(),
																							  layername:rec.get('layername')
																							});
																							
																							//set mapmarkericonurl if provided to a point layer
																							if(layertype == "point" && (typeof layerConfig.mapmarkericonurl != "undefined")){
																								var iconStyle = new ol.style.Style({
																								  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
																									anchor: [0, 0],
																									anchorXUnits: 'pixels',
																									anchorYUnits: 'pixels',
																									opacity: 1.0,
																									src: layerConfig.mapmarkericonurl
																								  }))
																								});
																								
																								vector.setStyle(iconStyle);
																							}
																							
																							vector.once('postcompose', onLayerLoaded);
																							
																							mainMap.addLayer(vector);
																						
																							
																					   },
																					   failure: function(response, opts) {
																						  console.log('server-side failure with status code ' + response.status);
																						  console.log('server-side failure details: ' + response.responseText);
																					   }
																					});
																
																} else {
																	
																	
																	//default style if color is not set
																	var layerStyle = [new ol.style.Style({
																								fill: new ol.style.Fill({
																								  color: [105,105,105,128/255]
																								}),
																								stroke: new ol.style.Stroke({
																								  color: '#ffffff'
																								})
																							  })];
																	
																	if(typeof layerConfig.color !== "undefined"){
																		layerStyle = [new ol.style.Style({
																								fill: new ol.style.Fill({
																								  color: [layerConfig.color[0],layerConfig.color[1],layerConfig.color[2],layerConfig.color[3]/255]
																								}),
																								stroke: new ol.style.Stroke({
																								  color: '#ffffff'
																								})
																							  })];
																	}
																	var vector = new ol.layer.Vector({
																							  source: new ol.source.GeoJSON({
																								projection: 'EPSG:3857',
																								url: layerConfig.url
																							  }),
																							  style: layerStyle,
																							  layername:rec.get('layername')
																							});
																							
																							//set mapmarkericonurl if provided to a point layer
																							if(layertype == "point" && (typeof layerConfig.mapmarkericonurl != "undefined")){
																								var iconStyle = new ol.style.Style({
																								  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
																									anchor: [0, 0],
																									anchorXUnits: 'pixels',
																									anchorYUnits: 'pixels',
																									opacity: 1.0,
																									src: layerConfig.mapmarkericonurl
																								  }))
																								});
																								
																								vector.setStyle(iconStyle);
																							}
																							
																							vector.once('postcompose', onLayerLoaded);
																							
																							mainMap.addLayer(vector);
																}
																
																

																
																function onLayerLoaded(evt) {
																
																	var layer = olHelper.getLayerByLayerName(rec.get('layername'));
																	//console.log("== get features:"+layer.getSource().getFeatures().length);
																		
																	rec.set('plgeometrycount', layer.getSource().getFeatures().length);
																	rec.set('layervisible', true);
																	
																	//show legendwin if exists 
																	if(typeof rec.get("legendwinid") !== "undefined" && typeof Ext.getCmp(rec.get("legendwinid")) !== "undefined"){
																		Ext.getCmp(rec.get("legendwinid")).show();
																	}
																	
																	//close window
																	Ext.getCmp('loadWFSLayerButtonID@'+loadWFSLayerWinID).enable();
																	Ext.getCmp('processingWFSLayerButtonID@'+loadWFSLayerWinID).setVisible(false);
																	Ext.getCmp(loadWFSLayerWinID).tools.close.setVisible(true);
																	Ext.getCmp(loadWFSLayerWinID).close();
																}
																
															}
													}
													]
										});
									
									win.show();
									loadLayerAttrToGrid(rec,loadWFSLayerWinID);
								
									}
									
									//load layer config attributes to a popup grid window
									function loadLayerAttrToGrid(layerRecord, windowID){
										//batch layer attributes into grid
										attrRawData = layerRecord.get('layerconfig');
										attrData = [];								
										for(var aname in attrRawData){
											attrData.push({attrname:aname, attrvalue:attrRawData[aname]});
										}
										attrgrid = Ext.getCmp('layerattributegridID@'+windowID);
										attrgrid.getStore().loadData(attrData);
										attrgrid.getView().refresh();
										//console.log("grid loaded");
									};
									
									//save layer config attribute changes and refresh the grid
									function saveLayerAttr(layerRecord,windowID){
										//get changes from editable grid cell
										attrgrid = Ext.getCmp('layerattributegridID@'+windowID);
										attrgrid.getStore().commitChanges();
										
										// define a new layerconfig object to hold all changes.
										var newlayerconfig = {};
										
										//save changes to new layerconfig
										for(var i = 0; i < attrgrid.getStore().data.length; i++){
											
											var record = attrgrid.getStore().getAt(i);
											var rawvalue = record.get('attrvalue').toString();
											var value = {};
											if(record.get('attrname') == 'url'){
												//TODO:check if url is valid.
												//TODO:ncode url if necessary.
												value = rawvalue;
											} else if(record.get('attrname') == 'transparency') {
												var v = parseInt(rawvalue, 10);
												if(isNaN(v)) {v = 128;}
												else if(v > 255) {v = 255;}
												else if (v < 0) {v = 0;}
												value = v;
											} else if(record.get('attrname') == 'color') {
												var defaultcolor = [255,255,0,128];
												var arr = rawvalue.split(",");
												value = [];
												if(arr.length != 4){
													value = defaultcolor;
												} else {
													
													for(var k = 0; k< arr.length; k++) 
													{ 
														var v = parseInt(arr[k], 10);
														if(isNaN(v)) {v = 255;}
														else if(v > 255) {v = 255;}
														else if (v < 0) {v = 0;}
														
														value.push(v); 
													}
												}
											} else if(record.get('attrname') == 'filter'){
												
												value = rawvalue;
											} else if(record.get('attrname') == 'height'){
												var v = parseInt(rawvalue, 10);
												if(isNaN(v)) {v = 0;}
												else if(v > 9999999) {v = 9999999;}
												else if (v < 0) {v = 0;}
												value = v;
											} else if(record.get('attrname') == 'extrudedHeight'){
												var v = parseInt(rawvalue, 10);
												if(isNaN(v)) {v = 0;}
												else if(v > 9999999) {v = 9999999;}
												else if (v < 0) {v = 0;}
												value = v;
											} else if(record.get('attrname') == 'width'){
												var v = parseInt(rawvalue, 10);
												if(isNaN(v)) {v = 1;}
												else if(v > 20) {v = 20;}
												else if (v < 0) {v = 1;}
												value = v;
											} else if(record.get('attrname') == 'radius'){
												var v = parseInt(rawvalue, 10);
												if(isNaN(v)) {v = 0;}
												else if(v > 9999999) {v = 9999999;}
												else if (v < 1) {v = 1;}
												value = v;
											} else if(record.get('attrname') == 'withoutline'){
												if(rawvalue.toLowerCase() == 'true'){value = true;}
												else{value = false;}
											} else if(record.get('attrname') == 'extrudedHeightField'){
												value = rawvalue;
											} else if(record.get('attrname') == 'datagridrowindex'){
												value = rawvalue;
											} else if(record.get('attrname') == 'colorRamp'){
												value = rawvalue;
											} else if(record.get('attrname') == 'colorValueField'){
												value = rawvalue;
											} else if(record.get('attrname') == 'bbox'){
												value = rawvalue;
											} else if(record.get('attrname') == 'granularity'){
												value = rawvalue;
											} else if(record.get('attrname') == 'extrudedHeightFieldScaleFactor'){
												value = rawvalue;
											} else if(record.get('attrname') == 'servicetype'){
												value = rawvalue;
											} else if(record.get('attrname') == 'wmslayer_name'){
												value = rawvalue;
											} else if(record.get('attrname') == 'wmslayer_geomname'){
												value = rawvalue;
											} else if(record.get('attrname') == 'wmslayer_style'){
												value = rawvalue;
											} else if(record.get('attrname') == 'wmslayer_alpha'){
												value = rawvalue;
											} else if(record.get('attrname') == 'wmslayer_cql_filter'){
												value = rawvalue;
											} else if(record.get('attrname') == 'iconurl'){
												value = rawvalue;
											} else if(record.get('attrname') == 'mapmarkericonurl'){
												value = rawvalue;
											} else if(record.get('attrname') == 'foikeywords'){
												value = rawvalue;
											} else if(record.get('attrname') == 'foitype'){
												value = rawvalue;
											}else if(record.get('attrname') == 'foigeom'){
												value = rawvalue;
											}

											newlayerconfig[record.get('attrname')] = value;
											
										}
										
										
										//update store
										layerRecord.set('layerconfig',newlayerconfig);
										//console.log("layer config saved");
										//reload data to grid
										loadLayerAttrToGrid(layerRecord, windowID);
									};
									
								}
							},
							{
								iconCls: 'layer-visible',
								tooltip: 'show/hide',
								handler: function(grid, rowIndex, colIndex) {
									var rec = grid.getStore().getAt(rowIndex);
									//test if primitivelayer is loaded
									if(rec.get('plgeometrycount') < 0) return;
									
									rec.set('layervisible',!rec.get('layervisible'));
									
									var layer = olHelper.getLayerByLayerName(rec.get('layername'));
									layer.setVisible(rec.get('layervisible'));
									
									//show legendwin if exists 
									if(typeof rec.get("legendwinid") !== "undefined" && typeof Ext.getCmp(rec.get("legendwinid")) !== "undefined"){
										if(rec.get('layervisible')){
											Ext.getCmp(rec.get("legendwinid")).show();
										}else
										{
											Ext.getCmp(rec.get("legendwinid")).hide();
										}
									}
									},
							  getClass: function(v, meta, rec) {
									if (rec.get('layervisible')) {return 'layer-visible';}
									else {return 'layer-hidden';}
                    				}
							},
							{
								iconCls: 'download-icon-enabled',
								tooltip: 'download',
								
								handler: function(grid, rowIndex, colIndex) {
									var rec = grid.getStore().getAt(rowIndex);
									
									if(rec.get('showdownload') != true) return;
									//test if primitivelayer is loaded
									if(rec.get('plgeometrycount') < 0) return;
									
									var downloadFileName=rec.get('layername').toString().toLowerCase().replace(" ","_");
									var downloadUrl = utilHelper.getWfsDownloadableUrl(rec.get('layerconfig').url, downloadFileName);
									console.log("====== downloadUrl: "+downloadUrl);
									window.open(downloadUrl, '_blank');
			
									},
							    getClass: function(v, meta, rec) {
									if(rec.get('showdownload') == true){
										if (rec.get('layervisible')) {return 'download-icon-enabled';}
										else {return 'download-icon-disabled';}
										}
									}
							}
						]
            }
        ];
		//this.columns[2].items[4].visible = flase;
        this.callParent();
    }
});