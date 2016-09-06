app.controller('mainCTRL',function($scope, $state, $http){

var numberofOrders = 0;

$scope.changeView = function(cuisine){
	$state.go(cuisine);
} 

$scope.addToChar = function(name,prize){
	$scope.$broadcast('orderedFood',{name,prize});
	numberofOrders++;
}

$scope.wantToLeave = function(){
	
	if (numberofOrders > 0){
		var opinion = confirm('W koszyku masz zamówienia. Czy chcesz opuścić stronę?');
		
		if (opinion === true){
			$state.go('main');
		
		}
		else{
			return false;
		}
	}
	else{

		$state.go('main')
	}
}

	$http.get('data/sushi.json').then(function(response){
		$scope.sushiArr = response.data;
	});
	$http.get('data/pizza.json').then(function(response){
		$scope.pizzaArr = response.data;
	});
	$http.get('data/polish.json').then(function(response){
		$scope.polishArr = response.data;
	});
	$http.get('data/kebab.json').then(function(response){
		$scope.kebabArr = response.data;
	});

})