Ext.define('CoM.view.iopSimPanelGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.iopSimPanelGrid',
    requires: ['Ext.grid.column.Action'],
    xtype: 'row-expander-grid',
    stateful: false,
    collapsible: false,
    multiSelect: false,
    stateId: 'stateGrid2',
    viewConfig: {
        stripeRows: true,
        enableTextSelection: true
    },

	plugins: [{
        ptype: 'rowexpander',
        pluginId: 'iopSimPanelGridrowexpanderID',
        selectRowOnExpand: true,
		expandOnDblClick:false,
        // this gives each row a unique identifier based on record's "acct_no"
        rowBodyTpl: [
            '<div id="ResultGridRow-{simid}"></div>'
        ],

        // stick a grid into the rowexpander div whenever it is toggled open
        toggleRow: function(rowIdx) {
			console.log("rowIdx:" + rowIdx);
            var rowNode = this.view.getNode(rowIdx);
			row = Ext.get(rowNode),
	
			nextBd = Ext.get(row).down(this.rowBodyTrSelector),
			hiddenCls = this.rowBodyHiddenCls,
			record = this.view.getRecord(rowNode),
			grid = this.getCmp(),
			acctNo = record.get('simid'),
			targetId = 'ResultGridRow-' + acctNo;

            if (row.hasCls(this.rowCollapsedCls)) {
                row.removeCls(this.rowCollapsedCls);
                this.recordsExpanded[record.internalId] = true;
                this.view.fireEvent('expandbody', rowNode, record, nextBd.dom);
				
				nextBd.removeCls(hiddenCls);
				
				if(typeof Ext.getCmp("resultBasicLayerGridID@"+targetId+"@"+rowIdx) !== "undefined"){
					Ext.getCmp("resultBasicLayerGridID@"+targetId+"@"+rowIdx).getView().refresh();
				}
				
				if (record.get('simstate')== 2 && typeof Ext.getCmp("resultBasicLayerGridID@"+targetId+"@"+rowIdx) === "undefined"){
					
					//check if rowNode.grid already exist

					rowNode.grid = Ext.create('CoM.view.basicLayerGrid', { // <-- this is my "inner" grid view
							renderTo: targetId,
							id:"resultBasicLayerGridID@"+targetId+"@"+rowIdx,
							row: row,
							hideHeaders: true
						});
						
					rowNode.grid.getStore().removeAll();
					//rowNode.grid.getView().refresh();
					rowNode.grid.doComponentLayout();
					
					console.log("get init loaded");
					// I didn't want to listen to events from the inner grid
					rowNode.grid.suspendEvents(); 
					
					simoutput = record.get('simoutput');	
					vectors = simoutput.vectors;
					infos = simoutput.infos[0].caFois;

						for(var j=0; j < vectors.length; j++){
							//create an extra layerdata object and pass it into modelLayerInfo, so the analysis window can use this information
							var layerdata = {};
							layerdata.simid = record.get('simid');
							layerdata.simcode = record.get('simcode');
							layerdata.baselayername = vectors[j].name;
							//here, the layername always equals to plname
							var layerinfo = undefined;
							if (vectors[j].layertype == "polygon" && vectors[j].layerclass == "iop")
							{
								for(var k=0; k<infos.length; k++){
									var displayname = vectors[j].layerclass+"_"+infos[k].abbr;
							 
									layerinfo = new CoM.model.modelLayerInfo({
													layerdisplayname: displayname,
													layername: vectors[j].name+"_"+infos[k].abbr, 
													layertype: vectors[j].layertype,
													layervisible: false, 
													plname: '',
													plgeometrytype: '',
													plgeometrycount: -1,
													layerconfig:{
														url:vectors[j].gsurl,
														servicetype:'WFS',
														colorValueField: 'iop_'+infos[k].abbr+"_r",
														colorRamp:'white-red',
														iconurl:'images/'+vectors[j].layertype+'.png'
													},
													showdownload:true
													});
									rowNode.grid.getStore().add(layerinfo);
								}
							} else if (vectors[j].layertype == "point" && vectors[j].layerclass == "iop_cardinalpoint")
							{
								var displayname = vectors[j].layerclass;
							 
								layerinfo = new CoM.model.modelLayerInfo({
													layerdisplayname: displayname,
													layername: vectors[j].name, 
													layertype: vectors[j].layertype,
													layervisible: false, 
													plname: '',
													plgeometrytype: '',
													plgeometrycount: -1,
													layerconfig:{
														url:vectors[j].gsurl,
														servicetype:'WFS',
														mapmarkericonurl:'images/foi-icons/small/destination.png',
														iconurl:'images/'+vectors[j].layertype+'.png'
													},
													showdownload:true
													});
								rowNode.grid.getStore().add(layerinfo);
							} 
							//console.log(JSON.stringify(layerinfo));
							
						}
					
					console.log("loaded vector layer number:", rowNode.grid.getStore().getCount());
                    rowNode.grid.view.refresh();
				}
            } else {
                row.addCls(this.rowCollapsedCls);
                nextBd.addCls(this.rowBodyHiddenCls);
                this.recordsExpanded[record.internalId] = false;
                this.view.fireEvent('collapsebody', rowNode, record, nextBd.dom);
            }
        }
		
    }],
	
    initComponent: function () {
        
        
		this.store = {
			model : 'CoM.model.modelSimPara',
			data:[]
		};
        this.columns = [
            {
                text     : 'JobCode',
                width: 210,
                sortable : false,
                dataIndex: 'simcode'
            },
            {
            	text     : 'Action',
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                flex     : 1,
                items: [
							{
								iconCls: 'sim-run',
								tooltip: 'run',
								handler: function(grid, rowIndex, colIndex) {
									var rec = grid.getStore().getAt(rowIndex);
									
									// can only run sim once
									if(rec.get('simstate')>0) return;
									
									//console.log("run simulation: simid("+rec.get('simid')+")");
									grid.getStore().getAt(rowIndex).set('simstate',1);
									//console.log("run simulation: para("+rec.get('simpara')+")");
									
									Ext.Ajax.request({
													   url: SERVICE_URL.execiop,
													   withCredentials:true,
													   timeout: 1000*60*60,
													   method:'POST',
													   params: {"simpara":JSON.stringify(rec.get('simpara')), "simid":rec.get('simid'), "simcode":rec.get('simcode')},
													   success: function(response, opts) {
														  var rawResponseData = Ext.decode(response.responseText);
														  var obj = rawResponseData.data;
														  if(obj.vectors.length>0){
															messageHelper.showNotificationWait("IOP: Finished. <br/>Click the + button to explore model outputs.", 3000);
															//store result into store and update sim state
															grid.getStore().getAt(rowIndex).set('simoutput',obj);
															grid.getStore().getAt(rowIndex).set('simstate',2);
														  }else
														  {
															messageHelper.showErrorWait("IOP: Failed. Empty outputs returned.<br/>Reason: Server exception occurs.<br/>Please try it again.", 3000);
															grid.getStore().getAt(rowIndex).set('simstate',3);
														  }
														  
													   },
													   failure: function(response, opts) {
														  console.log('server-side failure with status code ' + response.status);
														  console.log('server-side failure details ' + response.responseText);
														  messageHelper.showErrorWait("IOP: Failed. <br/>Reason: "+response.responseText+"<br/>Please try it again.", 3000);
														  grid.getStore().getAt(rowIndex).set('simstate',3);
													   }
													});
								},
								//getTip doesn't work
								//ref: http://stackoverflow.com/questions/13641405/how-to-add-dynamic-tooltip-on-extjs-actioncolumn-icons
								//ref: http://www.sencha.com/forum/showthread.php?262743-4.2.1.744-dynamic-tooltip-in-action-column-not-working
								getClass: function(v, meta, rec, rowIndex, colIndex, store) {
									if (rec.get('simstate') == 1) {return 'sim-processing';}
									else if(rec.get('simstate') == 2) {return 'sim-success-enabled';}
									else if(rec.get('simstate') == 3) {return 'sim-warning';}
									else if(rec.get('simstate') == 0) {return 'sim-run';}
                    			}
							}/*,
							{
								iconCls: 'sim-delete',
								tooltip: 'delete sim',
								handler: function(grid, rowIndex, colIndex) {
										
										}
							}*/
						]
            }
        ];

        this.callParent();
    }
});