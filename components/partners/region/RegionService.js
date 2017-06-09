(function(){
	'use strict';
	angular.module('admin').factory('RegionService',RegionService);

	function RegionService($http,appSetting,$rootScope){
		var baseUrl = appSetting.apiBaseUrl;
		function get(){
			return $http.get(baseUrl + 'region');
		}

		/*function getLandmark(){
			return $http.get(baseUrl+'landmark'+region_id);
		}*/
		var service={
			get: get
			//getLandmark: getLandmark
		}
		return service;
	}

})();