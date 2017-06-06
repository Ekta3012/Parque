(function(){
	var app= angular.module('admin',[]);
	
	app.controller('sectionController',function(){
	this.menu=1;
		this.selectMenu = function(SetMenu){
			this.menu=SetMenu;
		}
		this.menuisSelected = function(checkMenu){
			return this.menu === checkMenu;
		}
	});
})();
