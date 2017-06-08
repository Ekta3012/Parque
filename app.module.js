(function(){	
	var app= angular.module('admin',[
		'ngRoute',
		'ngAnimate',
		'ui.router'
		]);
	})();

var apiBase = "http://174.138.58.181/region";
app.value("appSetting", {
    "apiBaseUrl": apiBase
});