Ext.define('CoM.view.Viewport', {
    extend: 'Ext.container.Viewport',
	requires: [
        'CoM.view.mainScene',
        'CoM.view.mainControlPanel',
		'CoM.view.mainControlPanelTab1',
		'CoM.view.basicLayerDataGrid',
		'CoM.view.caListGrid'
    ],
	layout: 'border',
	bodyBorder: false,
	defaults: {
		collapsible: true,
		split: true
	},
	items: [
	{
		title: 'Case Area : To Be Chosen',
		id: 'scenarioTitleID',
		collapsible: false,
		region: 'center',
		margins: '5 0 0 0',
		xtype:'mainscene',
		tools:[
				{
					xtype: 'label',
					id : 'lbLoggedUserInfoLabelID',
					text : '',
					padding: '0 10 0 0'
				},
				{
					xtype: 'button',
					id : 'btLogoutButtonID',
					text : 'logout',
					hidden: true,
					handler: function() {
						Ext.Ajax.request({
						url: SERVICE_URL.dologout,
						withCredentials:true,
						success: function(response, opts) {
							window.location.href = "index.html";
						  },
						failure: function(res, o) {
							window.location.href = "index.html";
						}
			  
					});
					}
				}
		]
	},{
		title: 'Control Panel',
		region:'east',
		floatable: false,
		margins: '5 0 0 0',
		width: 350,
		minWidth: 350,
		maxWidth: 350,
		xtype:'maincontrolpanel'
	}]
});