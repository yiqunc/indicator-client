// predefine convertable srs here. the string is directly obtained from http://spatialreference.org/ref/epsg/28355/proj4js/
	Proj4js.defs["EPSG:28355"] = "+proj=utm +zone=55 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";
	
	var utilHelper = {
	
		
		parseRegionalFoIWfsUrl: function(foitype, foikeywords, foigeom){
		
			if(typeof foitype==="undefined" ||foitype == "") foitype = "ftype";
			
			testObj = foikeywords;
			var foiMatchConditionStr = "";
			foikeywords = foikeywords.split(",");
			if(Object.prototype.toString.call(foikeywords) === '[object Array]' && foikeywords.length > 0){
				for(var i = 0; i < foikeywords.length; i++){
					foiMatchConditionStr = foiMatchConditionStr + foitype+"='"+foikeywords[i]+"'" + " OR ";
				}
				foiMatchConditionStr = foiMatchConditionStr.substring(0, foiMatchConditionStr.length-4);
				foiMatchConditionStr = " AND (" + foiMatchConditionStr + ")";
			} 
			
			var intersectConditionStr="";
			for(var i = 0; i < ca.regionCodeList.length; i++){
				intersectConditionStr = intersectConditionStr + ca.regionCodeAttributeString + "="+ca.regionCodeList[i]+" OR ";
			}
			intersectConditionStr = intersectConditionStr.substring(0, intersectConditionStr.length-4);
			var wfsLayerName = CONSTANT_FOI_LAYER.layerName;
			if(foigeom === "polygon"){
				wfsLayerName = CONSTANT_FOI_LAYER.layerNamePolygon;
			}
			var url = SERVICE_URL.geoserverurl+"/wfs?service=wfs&version=1.1.0&request=GetFeature&srsname="+CONSTANT_FOI_LAYER.srsName+"&typeName="+wfsLayerName+"&outputFormat=json&cql_filter=INTERSECTS("+CONSTANT_FOI_LAYER.geomAttributeString+", collectGeometries(queryCollection('"+ca.regionLayerName+"','"+ca.regionGeomAttributeString+"','"+intersectConditionStr+"')))" + foiMatchConditionStr;
			
			return url;
		},
		
		parseRegionalWfsUrl: function(layername){
		
			var intersectConditionStr="";
			for(var i = 0; i < ca.regionCodeList.length; i++){
				intersectConditionStr = intersectConditionStr + ca.regionCodeAttributeString + "="+ca.regionCodeList[i]+" OR ";
			}
			intersectConditionStr = intersectConditionStr.substring(0, intersectConditionStr.length-4);
			
			var url = SERVICE_URL.geoserverurl+"/wfs?service=wfs&version=1.1.0&request=GetFeature&srsname="+CONSTANT_FOI_LAYER.srsName+"&typeName="+layername+"&outputFormat=json&cql_filter=INTERSECTS("+CONSTANT_FOI_LAYER.geomAttributeString+", collectGeometries(queryCollection('"+ca.regionLayerName+"','"+ca.regionGeomAttributeString+"','"+intersectConditionStr+"')))";
			
			return url;
		},
		
		parseFilteredMeshBlockWfsUrl: function(caList, populationThreshold){
		
			var intersectConditionStr="";
			for(var i = 0; i < caList.length; i++){
				intersectConditionStr = intersectConditionStr + ca.regionCodeAttributeString + "="+caList[i]+" OR ";
			}
			intersectConditionStr = intersectConditionStr.substring(0, intersectConditionStr.length-4);
			
			var url = SERVICE_URL.geoserverurl+"/wfs?service=wfs&version=1.1.0&request=GetFeature&srsname="+CONSTANT_FOI_LAYER.srsName+"&typeName="+CONSTANT_FOI_LAYER.layerNameMeshblock+"&outputFormat=json&cql_filter=INTERSECTS("+CONSTANT_FOI_LAYER.geomAttributeString+", collectGeometries(queryCollection('"+ca.regionLayerName+"','"+ca.regionGeomAttributeString+"','"+intersectConditionStr+"'))) AND population<"+populationThreshold;
			console.log(url);
			return url;
		},
		
		parseCAWfsUrl: function(){
		
			var conditionStr="";
			for(var i = 0; i < ca.regionCodeList.length; i++){
				conditionStr = conditionStr + ca.regionCodeAttributeString + "="+ca.regionCodeList[i]+" or ";
			}
			conditionStr = conditionStr.substring(0, conditionStr.length-4);
				
			var url = SERVICE_URL.geoserverurl+"/wfs?service=wfs&version=1.1.0&request=GetFeature&srsname="+ca.srsName+"&typeName="+ca.regionLayerName+"&outputFormat=json&cql_filter="+conditionStr;
			
			return url;
		},
	
		getWfsDownloadableUrl: function(url, downloadFileName){
			// ref: http://docs.geoserver.org/2.3.0/user/services/wfs/outputformats.html
			// it must be "format_options", NOT "format-options".
			var newUrl = url.replace("outputFormat=json", "outputFormat=shape-zip&format_options=filename:"+downloadFileName+".zip");
			return newUrl;
		},
		
		checkdatetime: function(strDateTime){
			var out = moment(strDateTime);
			if(typeof out._f  === "undefined"){
				return false;
			}
			return true;
		},
		
		str2fltarr: function(strs){
			strarr = strs.split(",");
			out = [];
			for (var i=0; i<strarr.length; i++) {
				 out.push(parseFloat(strarr[i], 10));
			}
			return out;
		},
		
		projtransform : function(srcEPSG, tarEPSG, xy)
			{
			var pt = new Proj4js.Point(xy);
			var srcpj  = new Proj4js.Proj(srcEPSG);
			var tarpj  = new Proj4js.Proj(tarEPSG);
			var newpt = Proj4js.transform(srcpj, tarpj, pt);
			return newpt.toShortString();
			},
		
		// 4326->28355
		projtransform_default : function(xy)
			{
			var pt = new Proj4js.Point(xy);
			var srcpj  = new Proj4js.Proj("EPSG:4326");
			var tarpj  = new Proj4js.Proj("EPSG:28355");
			var newpt = Proj4js.transform(srcpj, tarpj, pt);
			return newpt.toShortString();
			},
		
			
		projtransform_pointarr : function(srcEPSG, tarEPSG, pointarr)
			{
				//pointarr format: [x0,y0,x1,y1,x2,y2...]
				var out = [];
				for(var i=0; i < pointarr.length; i++){
					var xy_proj = this.projtransform(srcEPSG, tarEPSG, pointarr[i]+ "," + pointarr[i+1]);
					i = i + 1;
					var pt = xy_proj.split(",");
					out.push(parseFloat(pt[0], 10));
					out.push(parseFloat(pt[1], 10));
				}
				return out;
			},
		
		// 4326->28355
		projtransform_default_pointarr : function(pointarr)
			{
				//pointarr format: [x0,y0,x1,y1,x2,y2...]
				var out = [];
				for(var i=0; i < pointarr.length; i++){
					var xy_proj = this.projtransform_default(pointarr[i]+ "," + pointarr[i+1]);
					i = i + 1;
					var pt = xy_proj.split(",");
					out.push(parseFloat(pt[0], 10));
					out.push(parseFloat(pt[1], 10));
				}
				return out;
			},
			
		hexToRgb: function(hex, alpha) {
				if ( typeof alpha === "undefined" || alpha < 0 || alpha > 255) {alpha = 128;}
				
				var bigint = parseInt(hex, 16);
				var r = (bigint >> 16) & 255;
				var g = (bigint >> 8) & 255;
				var b = bigint & 255;

				return [r,g,b,alpha];
		},
		
		S4: function(){
			return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
		},
		
		GUID: function(){
			return(this.S4() + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() + this.S4() + this.S4()).toLowerCase();
		},
		
		getCurrentTimeString: function(){
			var now = new Date(); 
			strMonth = ''+(now.getMonth()+1);
			if(now.getMonth()+1<10){
				strMonth = '0'+strMonth
			}
			
			strDay = ''+(now.getDate());
			if(now.getDate()<10){
				strDay = '0'+strDay
			}
			
			strHour = ''+(now.getHours());
			if(now.getHours()<10){
				strHour = '0'+strHour
			}
			
			strMin = ''+(now.getMinutes());
			if(now.getMinutes()<10){
				strMin = '0'+strMin
			}
			
			strSec = ''+(now.getSeconds());
			if(now.getSeconds()<10){
				strSec = '0'+strSec
			}
			
			var datetime = now.getFullYear()+'-'+strMonth+'-'+strDay; 
			datetime += 'T'+strHour+':'+strMin+':'+strSec; 
			return(datetime);
		},
		
		initCONSTANT_COLOR_RAMPS: function(){
			for(var i=0; i<CONSTANT_COLOR_RAMPS.length; i++){
				var rgbarr = CONSTANT_COLOR_RAMPS[i].rgb;
				var opacity = CONSTANT_COLOR_RAMPS[i].opacity;
				CONSTANT_COLOR_RAMPS[i].styles = [];
				for(var j=rgbarr.length-1;j>=0;j--){
					var style = [new ol.style.Style({
															fill: new ol.style.Fill({color: [rgbarr[j][0],rgbarr[j][1],rgbarr[j][2],opacity]}),
															stroke: new ol.style.Stroke({color: 'black', width: 1})
															})];
					CONSTANT_COLOR_RAMPS[i].styles.push(style);				
				}
			}
		},
		getColorRampStyleNumber: function(colorRampName){
			for(var i=0; i<CONSTANT_COLOR_RAMPS.length; i++){
			
				if(colorRampName === CONSTANT_COLOR_RAMPS[i].name){
					
					return CONSTANT_COLOR_RAMPS[i].styles.length;
				}
			}
			
			//if not found, return the default ramp style number
			return CONSTANT_COLOR_RAMPS[0].styles.length;
		},
		
		getColorRampStyle: function(colorRampName, idx){
			for(var i=0; i<CONSTANT_COLOR_RAMPS.length; i++){
			
				if(colorRampName === CONSTANT_COLOR_RAMPS[i].name){
					if(idx < 0) idx=0;
					if(idx >= CONSTANT_COLOR_RAMPS[i].styles.length) idx = CONSTANT_COLOR_RAMPS[i].styles.length - 1;
					return CONSTANT_COLOR_RAMPS[i].styles[idx];
				}
			}
			
			//if not found, return the first style of the default ramp
			return CONSTANT_COLOR_RAMPS[0].styles[0];
		},
		
		getColorRampRGB: function(colorRampName, idx){
			for(var i=0; i<CONSTANT_COLOR_RAMPS.length; i++){
			
				if(colorRampName === CONSTANT_COLOR_RAMPS[i].name){
					if(idx < 0) idx=0;
					if(idx >= CONSTANT_COLOR_RAMPS[i].rgb.length) idx = CONSTANT_COLOR_RAMPS[i].rgb.length - 1;
					return CONSTANT_COLOR_RAMPS[i].rgb[idx];
				}
			}
			
			//if not found, return the first style of the default ramp
			return CONSTANT_COLOR_RAMPS[0].rgb[0];
		}
	};