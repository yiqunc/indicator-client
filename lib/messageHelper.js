var messageHelper = {

		showError: function(content){
			Ext.example.msg("<b><font color='#FF0000'>Error</font></b>",content,1000);
		},
		showWarning: function(content){
			Ext.example.msg("Warning",content,1000);
		},
		showNotification: function(content){
			Ext.example.msg("Notification",content,1000);
		},
		
		showWarningWait: function(content, wait){
			if(isNaN(wait)) wait = 1000;
			if(wait<0 || wait>10000) wait = 1000;
			Ext.example.msg("<b><font color='#FF6600'>Warning</font></b>",content,wait);
		},
		
		showErrorWait: function(content, wait){
			if(isNaN(wait)) wait = 1000;
			if(wait<0 || wait>10000) wait = 1000;
			Ext.example.msg("<b><font color='#FF0000'>Error</font></b>",content,wait);
		},
		
		showNotificationWait: function(content, wait){
			if(isNaN(wait)) wait = 1000;
			if(wait<0 || wait>10000) wait = 1000;
			Ext.example.msg("<b><font color='#4169E1'>Notification</font></b>",content,wait);
		},
		
	};