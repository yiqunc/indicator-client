Ext.require('Ext.container.Viewport');
Ext.application({
	appFolder: 'app',
    name: 'CoM',
	models: ['modelLayerInfo',
			 'modelSimPara',
			 'modelCA'],    
	autoCreateViewport: true,
    launch: function() {
		//to solve ajax cors session issue, must set the 'withCredentials' to true in the ajax call.
		//ref: http://software.dzhuvinov.com/cors-filter-tips.html (it works)
		//ref: http://blog.dzhuvinov.com/?p=1015
		//ref: http://www.nczonline.net/blog/2010/05/25/cross-domain-ajax-with-cross-origin-resource-sharing/
		
			//check if user has logged in or not
		Ext.Ajax.request({
			   url: SERVICE_URL.islogined,
			   withCredentials:true,
			   success: function(response, opts) {
				  var obj = Ext.decode(response.responseText);
				  testObj = obj;
				  //if not login yet, jump to index.html
				  if (obj.status != "ok"){
					window.location.href = "index.html";
				  }else
				  {
					//show logged in user info and logout button
					Ext.getCmp("lbLoggedUserInfoLabelID").setText("You are logged in as <b>"+obj.username+"</b>", false);
					Ext.getCmp("btLogoutButtonID").setVisible(true);
				  }
				  },
				  failure: function(res, o) {
				  console.log('server-side failure with status code ' + res.status);
				  window.location.href = "index.html";
			   }
			  
		   });
		
    }
});

