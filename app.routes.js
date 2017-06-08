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
	    .state('register_valet',{
        url:'/register_valet',
        templateUrl: 'components/valet/registration/valet_registration.html'
      })
	    .state('register_Partner',{
        url:'/register_Partner',
        templateUrl: 'components/partners/registration/form.html'
      });
	  $urlRouterProvider.otherwise("/");
	});
})();



