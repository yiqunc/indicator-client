Ext.define('CoM.view.basicLayerAttributeGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.basicLayerAttributeGrid',
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
        this.cellEditing = new Ext.grid.plugin.CellEditing({
            clicksToEdit: 1
        });
        
        this.plugins = [this.cellEditing];
        
        this.store = {
            fields: ['attrname', 'attrvalue'],
            data  : []
        };
        
        this.columns = [
            {
                text     : 'Attrname',
                width     : 120,
                sortable : false,
                dataIndex: 'attrname'
            },
            {
                text     : 'Attrvalue',
                flex     : 1,
                sortable : false,
                dataIndex: 'attrvalue',
                editor: {
                    allowBlank: false
                }
            }
        ];

        this.callParent();
    }
});