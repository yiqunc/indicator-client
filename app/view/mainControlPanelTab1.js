Ext.define('CoM.view.mainControlPanelTab1', {
    extend: 'Ext.panel.Panel',
    requires : ['CoM.view.basicLayerGrid','CoM.view.basicLayerAttributeGrid','CoM.view.iopSimPanelGrid','CoM.view.isaSimPanelGrid','CoM.view.iiaSimPanelGrid'],
    alias: 'widget.maincontrolpaneltab1',
    layout: 'accordion',
	items:[
	{
		title: '',
		id: 'tab1panel1',
		layout: 'fit',
		header:{
                titlePosition: 1,
				listeners:{click:function(){
					//do nothing but to screen the default header-click event
					//console.log("header-click is screened");
				}},
                items:[{xtype: 'button',
				id : 'btStaticLayerButtonID',
				text : 'Infrastructure Service Layers',
				handler: function() {
					//expand panel
					Ext.getCmp('tab1panel1').expand();
					}}]
			},
				items:[{
			xtype:'basicLayerGrid',
			id:'basicLayerGridID',
		}]
	}	,
	{
		title: '',
		titleAlign: 'center',
		header:{
                titlePosition: 1,
				listeners:{click:function(){
					//do nothing but to screen the default header-click event
					//console.log("header-click is screened");
				}},
                items:[{xtype: 'button',
				id : 'btIOPConfigButtonID',
				text : 'Index of Proximity (IOP)',
				handler: function() {
				
					//expand panel
					Ext.getCmp('tab1panel2').expand();
					
					// test if ca is selected
					if(ca.regionCodeList.length == 0){
						
						messageHelper.showWarningWait("Need to choose at least one Case Area",2000);
						return;
					}
					
					Ext.getCmp("btIOPConfigButtonID").disabled = true;
					
					/////////////////////
					createIOPParamWin();
					var win = GLOBAL_VAR.iopParamWindow;
					win.on("close", function() {
						
						Ext.getCmp("btIOPConfigButtonID").disabled = false;
						
					});
					win.show();		
					
				}}
				]    
            },
		id: 'tab1panel2',
		layout: 'fit',
		items:[
				{
						xtype:'iopSimPanelGrid',
						id:'iopSimPanelGridID'
				}
				]
	},
	{
		title: '',
		titleAlign: 'center',
		header:{
                titlePosition: 1,
				listeners:{click:function(){
					//do nothing but to screen the default header-click event
					//console.log("header-click is screened");
				}},
                items:[{xtype: 'button',
				id : 'btISAConfigButtonID',
				text : 'Index of Service Accessibility (ISA)',
				handler: function() {
				
					//expand panel
					Ext.getCmp('tab1panel3').expand();
					
					// test if ca is selected
					if(ca.regionCodeList.length == 0){
						
						messageHelper.showWarningWait("Need to choose at least one Case Area",2000);
						return;
					}
					
					Ext.getCmp("btISAConfigButtonID").disabled = true;
					
					/////////////////////
					createISAParamWin();
					var win = GLOBAL_VAR.isaParamWindow;
					
					win.on("close", function() {
						
						Ext.getCmp("btISAConfigButtonID").disabled = false;
						
					});
					win.show();		
					
				}}
				]    
            },
		id: 'tab1panel3',
		layout: 'fit',
		items:[
				{
						xtype:'isaSimPanelGrid',
						id:'isaSimPanelGridID'
				}
				]
	},
	{
		title: '',
		titleAlign: 'center',
		header:{
                titlePosition: 1,
				listeners:{click:function(){
					//do nothing but to screen the default header-click event
					//console.log("header-click is screened");
				}},
                items:[{xtype: 'button',
				id : 'btIIAConfigButtonID',
				text : 'Index of Infrastructure Accessibility (IIA)',
				handler: function() {
				
					//expand panel
					Ext.getCmp('tab1panel4').expand();
					
					// test if ca is selected
					if(ca.regionCodeList.length == 0){
						
						messageHelper.showWarningWait("Need to choose at least one Case Area",2000);
						return;
					}
					
					Ext.getCmp("btIIAConfigButtonID").disabled = true;
					
					/////////////////////
					createIIAParamWin();
					var win = GLOBAL_VAR.iiaParamWindow;
					
					win.on("close", function() {
						
						Ext.getCmp("btIIAConfigButtonID").disabled = false;
						
					});
					win.show();
					//update lblTotalWeightId color with default value ( 100, should be in green) 
					updateTTLWeights();
				}}
				]    
            },
		id: 'tab1panel4',
		layout: 'fit',
		items:[
				{
						xtype:'iiaSimPanelGrid',
						id:'iiaSimPanelGridID'
				}
				]
	}
	]
});
