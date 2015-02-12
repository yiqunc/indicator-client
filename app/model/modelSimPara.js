Ext.define ('CoM.model.modelSimPara', {
  extend: 'Ext.data.Model' ,
  fields: [
			{type: 'integer', name: 'simid'},
			{type: 'string', name: 'simcode'},
			{type: 'auto', name: 'simpara'},
			{type: 'integer', name: 'simstate'},
			{type: 'auto', name: 'simoutput'}
		]
});
