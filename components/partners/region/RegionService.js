(function(){
	'use strict';
	angular.module('admin').factory('RegionService',RegionService);

	function RegionService($http,appSetting,$rootScope,$scope){
		var baseUrl = appSetting.apiBaseUrl;
		function get(){
			return $http.get(baseUrl + 'region');
		}
		/*function getLandmark(id){
			return $http.get(baseUrl+'landmark/'+'1');
		}*/
		var service={
			get: get,
			//getLandmark: getLandmark
		}
		return service;
	}

})();