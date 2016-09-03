var app = angular.module('foodPortal',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider.state("main", {
    url: "/",
    templateUrl: "views/main.html",
    controller: 'mainCTRL'
	});

  $urlRouterProvider.otherwise('/');
});