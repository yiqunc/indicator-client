Ext.define('CoM.view.mainControlPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.maincontrolpanel',
	activeTab: 0,
    bodyPadding: 0,
    items: [
        {
			xtype:'maincontrolpaneltab1',
            title: 'Indicator Settings'
            
        }
    ]
});
