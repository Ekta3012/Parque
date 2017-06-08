(function(){
	'use strict';
	angular.module('admin').factory('PartnerService',PartnerService);

	function PartnerService($http,appSetting,$rootScope){
		var baseUrl = appSetting.apiBaseUrl;
		function region(){
			return $http.get(baseUrl+"",);
		}
		function landMark(){
			return $http.get();
		}
		var service={
			region: region,
			landMark: landMark
		}
		return service;
	}
})();