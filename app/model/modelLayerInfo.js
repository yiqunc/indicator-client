Ext.define ('CoM.model.modelLayerInfo', {
  extend: 'Ext.data.Model' ,
  fields: [
			{type: 'string', name: 'layerdisplayname'},
			{type: 'string', name: 'layername'},
			{type: 'string', name: 'layertype'},
			{type: 'bool', name: 'layervisible'},
			{type: 'string', name: 'plname'},
			{type: 'string', name: 'plgeometrytype'},
			{type: 'integer', name: 'plgeometrycount'},
			{type: 'string', name: 'legendwinid'},
			{type: 'auto', name: 'layerconfig'},
			{type: 'bool', name: 'showanalysis'},
			{type: 'bool', name: 'showdownload'},
			{type: 'bool', name: 'requiredefinedcasearea'} //if requiredefinedcasearea, layer cannot be accessed if ca is not defined yet.
		]
});