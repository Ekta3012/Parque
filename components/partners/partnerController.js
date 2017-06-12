(function(){
	angular.module('admin')
	.controller('partnerController',function($scope,toaster,RegionService,localStorageService){
	$scope.regions=[];
		RegionService.get()
		.success(function(response){
			console.log("Regions ",response);
			$scope.regions = response;
		})
		.error(function(error){
			console.log(error);
			toaster.pop('error', "Error", "An Error has occured.Please try again after sometime.");
		});
		/*RegionService.getLandmark()
		.success(function(response){
			console.log("Landmark",response);
			$scope.landmark=response;
		})
		.error(function(error){
			console.log(error);
			toaster.pop('error',"Error","Try again later");
		});*/
	});
})();
