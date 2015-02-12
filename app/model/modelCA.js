Ext.define ('CoM.model.modelCA', {
  extend: 'Ext.data.Model' ,
  fields: [
			{type: 'string', name: 'name'},
			{type: 'string', name: 'code'}, //code is string for more general use
			{type: 'bool', name: 'inuse'}
		]
});