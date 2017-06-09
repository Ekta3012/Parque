(function(){	
	var app= angular.module('admin',[
		'ngRoute',
		'ngAnimate',
		'ui.router',
		'toaster',
		'LocalStorageModule'
		]);
	var apiBase = "http://174.138.58.181/";
	app.value("appSetting", {
	    "apiBaseUrl": apiBase
	});
})();

