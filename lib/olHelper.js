// predefine convertable srs here. the string is directly obtained from http://spatialreference.org/ref/epsg/28355/proj4js/
	Proj4js.defs["EPSG:28355"] = "+proj=utm +zone=55 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";
	
	var olHelper = {
	
		getLayerByLayerName: function(layername){
			var layer = undefined;
			for(var i = mainMap.getLayers().getLength()-1; i >= 0; i--){
				var lyr = mainMap.getLayers().item(i);
				if(lyr.p.layername == layername){
					layer = lyr;
					break;
				}
			}
			return layer;
		},
		
		removeLayerByLayerName: function(layername){
			for(var i = mainMap.getLayers().getLength()-1; i >= 0; i--){
				var lyr = mainMap.getLayers().item(i);
				if(lyr.p.layername == layername){
					mainMap.removeLayer(lyr);
					console.log("=== layer: "+layername+" is removed.");
					break;
				}
			}
		},
		
		// remove all vector layers, include ca layer
		removeAllVectorLayers: function(){
			for(var i = mainMap.getLayers().getLength()-1; i >= 0; i--){
				var lyr = mainMap.getLayers().item(i);
				if(lyr.getSource() instanceof ol.source.Vector){
					mainMap.removeLayer(lyr);
				}
			}
		},
		
		// clean all loaded layers on the map and reset their status in their grids
		cleanLoadedLayers: function(keepCALayer){
		
			var arrBasicLayerGridID = ["basicLayerGridID"];
			var arrResultWrapGridID = ["iopSimPanelGridID", "isaSimPanelGridID", "iiaSimPanelGridID"]; 
			
			for(var k = 0; k < arrResultWrapGridID.length; k++){
				var resultWrapGrid = Ext.getCmp(arrResultWrapGridID[k]);
				for(var i = 0; i < resultWrapGrid.getStore().getCount(); i++)
					{
						var acctNo = resultWrapGrid.getStore().getAt(i).get('simid');
						var targetId = 'ResultGridRow-' + acctNo;
						arrBasicLayerGridID.push("resultBasicLayerGridID@"+targetId+"@"+i);
					}
			}
			
			for(var k = 0; k < arrBasicLayerGridID.length; k++){
				var grid = Ext.getCmp(arrBasicLayerGridID[k]);
				
				if(typeof grid === "undefined") continue;
				
				for(var i = 0; i < grid.getStore().getCount(); i++)
				{
					if (grid.getStore().getAt(i).get('plgeometrycount')>0){
						//console.log("=== clean layer:" + grid.getStore().getAt(i).get('layername'));
						this.removeLayerByLayerName(grid.getStore().getAt(i).get('layername'));
						grid.getStore().getAt(i).set('plgeometrycount', -1);
						grid.getStore().getAt(i).set('layervisible',false);
					}
				}	
			}

			//if keepCALayer set to false, remove the ca layer
			if(!keepCALayer){
				//
				this.removeLayerByLayerName(ca.regionLayerReferenceName);
			}

		},
		
		toggleLayerVisibilityByLayerName: function(layername){
			for(var i = mainMap.getLayers().getLength()-1; i >= 0; i--){
				var lyr = mainMap.getLayers().item(i);
				if(lyr.p.layername == layername){
					
					lyr.p.visible = !lyr.p.visible;
					lyr.setVisible(lyr.p.visible);
					
					break;
				}
			}
		},
	};