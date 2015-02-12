Ext.define('CoM.view.basicLayerDataGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.basicLayerDataGrid',
    requires: [
    	'Ext.selection.CellModel',
        'Ext.grid.*',
        'Ext.data.*'
    ],
    xtype: 'array-grid',
    stateful: false,
    collapsible: false,
    multiSelect: false,
    stateId: 'stateGrid',
    viewConfig: {
        stripeRows: true,
        enableTextSelection: true
    },

    initComponent: function () {
	/*
        this.cellEditing = new Ext.grid.plugin.CellEditing({
            clicksToEdit: 1
        });
      
        this.plugins = [this.cellEditing];
     */     
        this.store = {
            fields: ['name', 'value'],
            data  : [{name:'--',value:'--'}]
        };
        
        this.columns = [
            {
                text     : 'Attrname',
                width     : 100,
                sortable : false,
                dataIndex: 'name'
            },
            {
                text     : 'Attrvalue',
                flex     : 1,
                sortable : false,
                dataIndex: 'value'
            }
        ];

        this.callParent();
    }
});