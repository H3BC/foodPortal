var app = angular.module('foodPortal',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider.state("main", {
    		url: "/",
    		templateUrl: "views/main.html",
    		controller: 'mainCTRL'
		})

  .state('sushi', {
			url: '/sushi',
			views: {
				'@': {
					templateUrl: '/views/sushi.html',
					controller: 'mainCTRL'
				}
			}
		})
   .state('kebab', {
			url: '/kebab',
			views: {
				'@': {
					templateUrl: '/views/kebab.html',
					controller: 'mainCTRL'
				}
			}
		})
    .state('polish', {
			url: '/polish',
			views: {
				'@': {
					templateUrl: '/views/polish.html',
					controller: 'mainCTRL'
				}
			}
		})
     .state('pizza', {
			url: '/pizza',
			views: {
				'@': {
					templateUrl: '/views/pizza.html',
					controller: 'mainCTRL'
				}
			}
		})


  $urlRouterProvider.otherwise('/');
});