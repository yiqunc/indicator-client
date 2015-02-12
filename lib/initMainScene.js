/*
// ========= cross-browser-event-based-element-resize-detection starts =====
ref: http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/
purpose: this code snippet can auto detect element size change event and trigger a function to response it. The map layers showed in Openlayer3 will get streched if the map div element's size is changed. Using this snippet to detect the change and fire the "updateSize()" to correct it. 
*/
(function(){
  var attachEvent = document.attachEvent;
  var isIE = navigator.userAgent.match(/Trident/);
  var requestFrame = (function(){
    var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
        function(fn){ return window.setTimeout(fn, 20); };
    return function(fn){ return raf(fn); };
  })();
  
  var cancelFrame = (function(){
    var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame ||
           window.clearTimeout;
    return function(id){ return cancel(id); };
  })();
  
  function resizeListener(e){
    var win = e.target || e.srcElement;
    if (win.__resizeRAF__) cancelFrame(win.__resizeRAF__);
    win.__resizeRAF__ = requestFrame(function(){
      var trigger = win.__resizeTrigger__;
      trigger.__resizeListeners__.forEach(function(fn){
        fn.call(trigger, e);
      });
    });
  }
  
  function objectLoad(e){
    this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__;
    this.contentDocument.defaultView.addEventListener('resize', resizeListener);
  }
  
  window.addResizeListener = function(element, fn){
    if (!element.__resizeListeners__) {
      element.__resizeListeners__ = [];
      if (attachEvent) {
        element.__resizeTrigger__ = element;
        element.attachEvent('onresize', resizeListener);
      }
      else {
        if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
        var obj = element.__resizeTrigger__ = document.createElement('object'); 
        obj.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
        obj.__resizeElement__ = element;
        obj.onload = objectLoad;
        obj.type = 'text/html';
        if (isIE) element.appendChild(obj);
        obj.data = 'about:blank';
        if (!isIE) element.appendChild(obj);
      }
    }
    element.__resizeListeners__.push(fn);
  };
  
  window.removeResizeListener = function(element, fn){
    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
    if (!element.__resizeListeners__.length) {
      if (attachEvent) element.detachEvent('onresize', resizeListener);
      else {
        element.__resizeTrigger__.contentDocument.defaultView.removeEventListener('resize', resizeListener);
        element.__resizeTrigger__ = !element.removeChild(element.__resizeTrigger__);
      }
    }
  }
})();
/*
// ========= cross-browser-event-based-element-resize-detection ends =====
*/

function initMainScene(){
	
	backgroundLayer = new ol.layer.Tile({
	  source: new ol.source.OSM()
	});

	mainMap = new ol.Map({
	
	controls: ol.control.defaults().extend([
		new ol.control.ScaleLine({
		  units: 'meters'
		})
	]),
    target: 'mainMapContainer',
    layers: [backgroundLayer],
	//renderer: 'webgl',
    view: new ol.View({
      center: ol.proj.transform([144.969315,-37.804766], 'EPSG:4326', 'EPSG:3857'),
      zoom: 12
    })
  });
  
  
	var mainMapContainerDivObject =  Ext.getElementById("mainMapContainer");

	var resizeFn = function(){
        console.log("map is resizing...");
		mainMap.updateSize();
    };
	
	addResizeListener(mainMapContainerDivObject, resizeFn);
	
	var displayFeatureInfo = function(pixel) {
	
		if(!GLOBAL_VAR.g_enablePickInfo) return;

		var hitObj = mainMap.forEachFeatureAtPixel(pixel, function(feature, layer){
			return {feature:feature, layer:layer};
		});

		// get queryinfo Window
		var qInfoWin = Ext.getCmp('queryInfoWindow');

		// check if the click really hits on something
		if(typeof hitObj !== "undefined"){

			//console.log("===== hit feature geoname: "+ hitObj.feature.getGeometryName() + " on layer:" + hitObj.layer.p.layername);

			if(qInfoWin.hidden) {qInfoWin.show();}

			// set title for queryinfo window
			qInfoWin.setTitle(hitObj.layer.p.layername);

			layerDataGrid = Ext.getCmp('basicLayerDataGrid');
			attrData = [];
			// reload data
			var featureGeomName = hitObj.feature.getGeometryName();
			var featureProps = hitObj.feature.getProperties();
			for(var aname in featureProps){
				
				// ignore if the property is geom
				if(aname == featureGeomName){continue;}
				
				attrData.push({name:aname, value:featureProps[aname]});
			}
			
			layerDataGrid.getStore().loadData(attrData);
			layerDataGrid.getView().refresh();

		} else {
			// if hits nothing, hide the query info window
			qInfoWin.hide();
		}
	  
	};

	mainMap.on('click', function(evt) {
	  displayFeatureInfo(evt.pixel);
	});
	
	// create QueryInfoWindow
	createQueryInfoWindow();

	// create CA list window
	createCAListWindow();
	
	// create background image layer setting window
	createBackgroundImageLayerControllerWindow();
	
	// create tool bar button
	createToolbar();

	//loadResultsIOP
	loadResultsIOP();
	
	//loadResultsISA
	loadResultsISA();
	
	//loadResultsIIA
	loadResultsIIA();
	
	//init indicator param windows
	createIOPParamWin();
	createISAParamWin();
	createIIAParamWin();
	
	//init system color ramps
	utilHelper.initCONSTANT_COLOR_RAMPS();
};

function createQueryInfoWindow(){
	var win = Ext.create('Ext.Window', {
		id: 'queryInfoWindow',
		closeAction: 'hide',
		title: '',
		width: 250,
		height: 300,
		x: 15,
		y: 90,
		headerPosition: 'top',
		layout: 'fit',
		modal : false,
		items: [{
			xtype: 'basicLayerDataGrid',
			id:'basicLayerDataGrid'
		},{
			border: false
		}]
	});
	win.hide();
};

function createCAListWindow(){
	var win = Ext.create('Ext.Window', {
		id: 'caListWindowID',
		closeAction: 'hide',
		title: 'Choose Case Area',
		width: 250,
		height: 350,
		x: 15,
		y: 90,
		headerPosition: 'top',
		layout: 'fit',
		modal : false,
		closable : true,
		items: [{
			xtype: 'caListGrid',
			id:'caListGridID'
		},{
			border: false
		},
		],
		buttons:[
				{xtype: 'button',
					text : 'Ok',
					id : 'btUseSelectedCAID',
					handler: function() {
						//set selected bbox to gobal variable ca
						var grid = Ext.getCmp('caListGridID'); 
						ca.regionCodeList = [];
						ca.regionNameList = [];
						for(var i = 0; i < grid.getStore().getCount(); i++)
						{
							if (grid.getStore().getAt(i).get('inuse')){
								ca.regionCodeList.push(grid.getStore().getAt(i).get('code'));
								ca.regionNameList.push(grid.getStore().getAt(i).get('name'));
							}
						}
						// test if ca is selected
						if(ca.regionCodeList.length == 0){
						
							messageHelper.showWarningWait("Need to choose at least one Case Area",2000);
							return;
						}
						
						//try to load ca on map
						console.log("== "+ utilHelper.parseCAWfsUrl());
						
						//set g_caMapLoaded flag to false
						GLOBAL_VAR.g_caMapLoaded = false;
						
						//try to remove all added vector layers, include ca layer
						olHelper.cleanLoadedLayers(false);
								
						//then load it again
						var vectorPolygon = new ol.layer.Vector({
						  source: new ol.source.GeoJSON({
							projection: 'EPSG:3857',
							url: utilHelper.parseCAWfsUrl()
						  }),
						  layername:ca.regionLayerReferenceName
						});
						
						mainMap.addLayer(vectorPolygon);
						
						vectorPolygon.once('postcompose', onLayerLoaded);
						
						function onLayerLoaded(evt) {
							
							GLOBAL_VAR.g_caMapLoaded = true;
							
							// update scenariao title
							var titleStr = "";
							if(ca.regionNameList.length>5){
								titleStr = ca.regionNameList.slice(0,5).toString() + " ... "+ (ca.regionNameList.length - 5) +" more";
							} else {
								titleStr = ca.regionNameList.toString();
							}
							Ext.getCmp('scenarioTitleID').setTitle("Case Area : "+ titleStr);
							
							Ext.getElementById('btCaListWindowID').src = "images/calist-icon-disabled.png";
							Ext.getElementById('btToggleCABBoxID').src = "images/light-icon.png";
							Ext.getCmp('caListWindowID').hide();
							
							//clean up any exisiting loaded static layers by resetting
							var grid = Ext.getCmp("basicLayerGridID");
							for(var i=0; i<grid.getStore().data.length; i++){
								var rec = grid.getStore().data.getAt(i);
								rec.set('plgeometrycount', -1);
								rec.set('layervisible', false);
							}
							grid.getStore().commitChanges();
							grid.getView().refresh();
							
						}

					}
				}]
	});
	win.on("close", function() {
		var bt = Ext.getElementById('btCaListWindowID');
		bt.src = "images/calist-icon-disabled.png";
	});

};

function createBackgroundImageLayerControllerWindow(){
	var win = Ext.create('Ext.Window', {
		id: 'backgroundImageLayerControllerWindowID',
		title: 'Adjust Background Imagery',
		closeAction: 'hide',
		width: 300,
		height: 250,
		x: 15,
		y: 90,
		headerPosition: 'top',
		
		modal : false,
		closable : true,
		items: [
		{	xtype:'slider',
			margin: '10 10 10 10', 
			id : 'sldBrightnessId',
            fieldLabel: 'Brightness',
            value: 0,
			width: 250,
			minValue: -100,
			maxValue: 100,
			step:1,
			useTips: false,
            name: 'Brightness',
			listeners: {
				change: function(slider, newValue, thumb, eOpts ) {
					backgroundLayer.setBrightness(newValue/100.0);
				}
			}
        },
		{	xtype:'slider',
			margin: '10 10 10 10', 
			id : 'sldContrastId',
            fieldLabel: 'Contrast',
            value: 100,
			width: 250,
			minValue: 0,
			maxValue: 300,
			step:1,
			useTips: false,
            name: 'Contrast',
			listeners: {
				change: function(slider, newValue, thumb, eOpts ) {
					backgroundLayer.setContrast(newValue/100.0);
				}
			}
        },
		{	xtype:'slider',
			margin: '10 10 10 10', 
            fieldLabel: 'Hue',
			id : 'sldHueId',
            value: 0,
			width: 250,
			minValue: -Math.PI*100,
			maxValue: Math.PI*100,
            name: 'Hue',
			useTips: false,
			listeners: {
				change: function(slider, newValue, thumb, eOpts ) {
					//mainCentralBody.getImageryLayers()._layers[0].hue = newValue/100.0;
				}
			}
        },
		{	xtype:'slider',
			margin: '10 10 10 10', 
			id : 'sldSaturationId',
            fieldLabel: 'Saturation',
            value: 100,
			width: 250,
			minValue: 0,
			maxValue: 500,
			step:1,
			useTips: false,
            name: 'Saturation',
			listeners: {
				change: function(slider, newValue, thumb, eOpts ) {
					backgroundLayer.setSaturation(newValue/100.0);
				}
			}
        }
		],
		buttons:[{xtype: 'button',
					text : 'B&W',
					id : 'btBackgroundImageLayerControllerBWID',
					handler: function() {
					
						Ext.getCmp("sldBrightnessId").setValue(100);
						Ext.getCmp("sldContrastId").setValue(100);
						Ext.getCmp("sldHueId").setValue(0);
						Ext.getCmp("sldSaturationId").setValue(100);
						
						
						Ext.getCmp("sldBrightnessId").setValue(100);
						Ext.getCmp("sldContrastId").setValue(100);
						Ext.getCmp("sldHueId").setValue(0);
						Ext.getCmp("sldSaturationId").setValue(0);
					}	
				},
				{xtype: 'button',
					text : 'Reset',
					id : 'btBackgroundImageLayerControllerResetID',
					handler: function() {
						Ext.getCmp("sldBrightnessId").setValue(100);
						Ext.getCmp("sldContrastId").setValue(100);
						Ext.getCmp("sldHueId").setValue(0);
						Ext.getCmp("sldSaturationId").setValue(100);
					}	
				},
				{xtype: 'button',
					text : 'Ok',
					id : 'btBackgroundImageLayerControllerConfirmID',
					handler: function() {
						
						Ext.getCmp('backgroundImageLayerControllerWindowID').hide();
						var bt = Ext.getElementById('btBackgroundImageLayerControllerBtnID');
						bt.src = "images/settings-icon-disabled.png";
					}
				}]
	});
	win.on("close", function() {
		var bt = Ext.getElementById('btBackgroundImageLayerControllerBtnID');
		bt.src = "images/settings-icon-disabled.png";
	});
};

function createToolbar() {
	
	//choose ca button
	var toolbarslot0 = document.getElementById('toolbarslot0');
	var button = document.createElement('img');
	button.id = "btCaListWindowID";
	button.title = "Choose Case Area";
	button.src = "images/calist-icon-disabled.png";
	button.className = 'iddss-viewerInfoButton';
	button.onclick = function() {
		caListWin = Ext.getCmp('caListWindowID');
		
		if(this.src.indexOf("disabled") > 0){
			this.src = "images/calist-icon.png";
			caListWin.show();
		} else {
			this.src = "images/calist-icon-disabled.png";
			caListWin.hide();
		}
	};
	toolbarslot0.appendChild(button);
	
	// query info button
	var toolbarslot1 = document.getElementById('toolbarslot1');
	var button = document.createElement('img');
	button.id = "btInfoQueryID";
	button.title = "Query Infomation";
	button.src = "images/info-icon-disabled.png";
	button.className = 'iddss-viewerInfoButton';
	button.onclick = function() {
	
		//if ca map has not been loaded, ignore toggle action
		//if(!GLOBAL_VAR.g_caMapLoaded) return;
		
		qInfoWin = Ext.getCmp('queryInfoWindow');
		
		if(this.src.indexOf("disabled") > 0){
			this.src = "images/info-icon.png";
			GLOBAL_VAR.g_enablePickInfo = true;
		} else {
			this.src = "images/info-icon-disabled.png";
			GLOBAL_VAR.g_enablePickInfo = false;
			if(!qInfoWin.hidden) {qInfoWin.hide();}
		}
	};
	toolbarslot1.appendChild(button);
	
	// help button
	var toolbarslot2 = document.getElementById('toolbarslot2');
	var button = document.createElement('img');
	button.id = "btSystemHelpBtnID";
	button.title = "Help";
	button.src = "images/help-icon.png";
	button.className = 'iddss-viewerInfoButton';
	button.onclick = function() {
		//todo: base on user's current action, dynamically load help content
		//iddssHelpHelper.updateHelpWindow();
	};
	toolbarslot2.appendChild(button);
	
	//toggle ca region on map
	var toolbarslot3 = document.getElementById('toolbarslot3');
	var button = document.createElement('img');
	button.id = "btToggleCABBoxID";
	button.title = "Switch Case Area on/off";
	button.src = "images/light-icon-disabled.png";
	button.className = 'iddss-viewerInfoButton';
	button.onclick = function() {
		
		//if ca map has not been loaded, ignore toggle action
		if(!GLOBAL_VAR.g_caMapLoaded) return;
		
		if(this.src.indexOf("disabled") > 0){
			this.src = "images/light-icon.png";
			
		} else {
			this.src = "images/light-icon-disabled.png";
		}
		
		olHelper.toggleLayerVisibilityByLayerName(ca.regionLayerReferenceName);
	};
	toolbarslot3.appendChild(button);
	
	/*
	//backgroundImageLayerController
	var toolbarslot4 = document.getElementById('toolbarslot4');
	var button = document.createElement('img');
	button.id = "btBackgroundImageLayerControllerBtnID";
	button.title = "Adjust Background Imagery";
	button.src = "images/settings-icon-disabled.png";
	button.className = 'iddss-viewerInfoButton';
	button.onclick = function() {
		
		backgroundImageLayerControllerWin = Ext.getCmp('backgroundImageLayerControllerWindowID');
		if(this.src.indexOf("disabled") > 0){
			this.src = "images/settings-icon.png";
			backgroundImageLayerControllerWin.show();
		} else {
			this.src = "images/settings-icon-disabled.png";
			backgroundImageLayerControllerWin.hide();
		}

	};
	toolbarslot4.appendChild(button);
	*/
	
	//clean all loaded layers
	var toolbarslot5 = document.getElementById('toolbarslot5');
	var button = document.createElement('img');
	button.id = "btCleanLayersID";
	button.title = "Clean All Loaded Layers";
	button.src = "images/layer-remove-icon.png";
	button.className = 'iddss-viewerInfoButton';
	button.onclick = function() {
		
		//if ca map has not been loaded, ignore toggle action
		//if(!GLOBAL_VAR.g_caMapLoaded) return;

		olHelper.cleanLoadedLayers(true);
	};
	toolbarslot5.appendChild(button);
};


function loadResultsIOP() {
	// load logged in user's previous iop results
	Ext.Ajax.request({
				   url: SERVICE_URL.loadresults,
				   withCredentials:true,
				   timeout: 1000*60*60,
				   method:'GET',
				   params: {"maxnum":10, "modelid":1},
				   success: function(response, opts) {
					  var rawResponseData = Ext.decode(response.responseText);
					  
					   simPanelGrid =  Ext.getCmp('iopSimPanelGridID');
																	  
					  if(rawResponseData.length>0){
						for(var i = rawResponseData.length-1; i >= 0;i--){
							result = rawResponseData[i];
							simPanelGrid.getStore().add(new CoM.model.modelSimPara({simid:result.simid, simcode:"job_"+result.simid,simpara:result.para, simstate:2, simoutput:result.data}));
						}
					  }
					  
				   },
				   failure: function(response, opts) {
					  console.log('server-side failure with status code ' + response.status);
					  console.log('server-side failure details ' + response.responseText);
				   }
				});

};

function loadResultsISA() {
	// load logged in user's previous isa results
	Ext.Ajax.request({
				   url: SERVICE_URL.loadresults,
				   withCredentials:true,
				   timeout: 1000*60*60,
				   method:'GET',
				   params: {"maxnum":10, "modelid":2},
				   success: function(response, opts) {
					  var rawResponseData = Ext.decode(response.responseText);
					  
					   simPanelGrid =  Ext.getCmp('isaSimPanelGridID');
																	  
					  if(rawResponseData.length>0){
						for(var i = rawResponseData.length-1; i >= 0;i--){
							result = rawResponseData[i];
							simPanelGrid.getStore().add(new CoM.model.modelSimPara({simid:result.simid, simcode:"job_"+result.simid,simpara:result.para, simstate:2, simoutput:result.data}));
						}
					  }
					  
				   },
				   failure: function(response, opts) {
					  console.log('server-side failure with status code ' + response.status);
					  console.log('server-side failure details ' + response.responseText);
				   }
				});

};

function loadResultsIIA() {
	// load logged in user's previous iia results
	Ext.Ajax.request({
				   url: SERVICE_URL.loadresults,
				   withCredentials:true,
				   timeout: 1000*60*60,
				   method:'GET',
				   params: {"maxnum":10, "modelid":3},
				   success: function(response, opts) {
					  var rawResponseData = Ext.decode(response.responseText);
					  
					   simPanelGrid =  Ext.getCmp('iiaSimPanelGridID');
																	  
					  if(rawResponseData.length>0){
						for(var i = rawResponseData.length-1; i >= 0;i--){
							result = rawResponseData[i];
							simPanelGrid.getStore().add(new CoM.model.modelSimPara({simid:result.simid, simcode:"job_"+result.simid, simpara:result.para, simstate:2, simoutput:result.data}));
							//console.log(JSON.stringify(result.para));
						}
					  }
					  
				   },
				   failure: function(response, opts) {
					  console.log('server-side failure with status code ' + response.status);
					  console.log('server-side failure details ' + response.responseText);
				   }
				});

}