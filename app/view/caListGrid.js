Ext.define('CoM.view.caListGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.caListGrid',
    requires: ['Ext.grid.column.Action'],
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
        
         this.store = {
            model : 'CoM.model.modelCA',
            data  : [	{
							name:'MELBOURNE', 
							code:343,
							inuse:false
						},
						{
							name:'MORELAND', 
							code:351,
							inuse:false
						},
						{
							name:'MOONEE VALLEY', 
							code:349,
							inuse:false
						},
						{
							name:'MARIBYRNONG', 
							code:341,
							inuse:false
						},
						{
							name:'HOBSONS BAY', 
							code:331,
							inuse:false
						},
						{
							name:'DAREBIN', 
							code:316,
							inuse:false
						},
						{
							name:'YARRA', 
							code:376,
							inuse:false
						},
						{
							name:'PORT PHILLIP', 
							code:358,
							inuse:false
						},
						{
							name:'BANYULE', 
							code:303,
							inuse:false
						},
						{
							name:'BOROONDARA', 
							code:307,
							inuse:false
						},
						{
							name:'GLEN EIRA', 
							code:322,
							inuse:false
						},
						{
							name:'MANNINGHAM', 
							code:340,
							inuse:false
						},
						{
							name:'WHITEHORSE', 
							code:372,
							inuse:false
						}
					]
        };
        this.columns = [
            {
                text     : 'Name',
                flex     : 1,
                sortable : false,
                dataIndex: 'name'
            },
            {
            	text     : 'Action',
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 70,
                items: [
							{
								iconCls: 'layer-visible',
								tooltip: 'preview',
								handler: function(grid, rowIndex, colIndex) {
								
									var rec = grid.getStore().getAt(rowIndex);
									rec.set('inuse',!rec.get('inuse'));

								},
								getClass: function(v, meta, rec) {
									if (rec.get('inuse')) {return 'layer-visible';}
									else {return 'layer-hidden';}
                    				}
							}
						]
            }
        ];

        this.callParent();
    }
});