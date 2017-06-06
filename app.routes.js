(function(){
	var app = angular.module("admin");
	app.config(function($stateProvider,$urlRouterProvider) {
	    $stateProvider.state('dashboard', {
        url:'/',
        templateUrl: 'components/dashboard/dashboard.html'
      })
	    .state("widgets", {
	    	url:'/widgets',
	        templateUrl : "components/widgets/widgets.html"
	    })
	    .state('secondState',{
        url:'/secondState',
        templateUrl: 'components/forms/forms.html'
      });
	});
})();

