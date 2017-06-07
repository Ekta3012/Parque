(function(){
	angular.module('admin').config(function($stateProvider,$urlRouterProvider) {
	    $stateProvider.state('dashboard', {
        url:'/',
        templateUrl: 'components/dashboard/dashboard.html'
      })
	    .state("widgets", {
	    	url:'/widgets',
	        templateUrl : "components/widgets/widgets.html"
	    })
	    .state('forms',{
        url:'/forms',
        templateUrl: 'components/forms/forms.html'
      });
	  $urlRouterProvider.otherwise("/");
	});
})();



