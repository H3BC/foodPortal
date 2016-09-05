

app.controller('chartCTRL',function($scope){

	$scope.orderedList = [];
	$scope.totalPrize = 0;


	$scope.$on('orderedFood', function(evt,foodOrder){

		$scope.orderedList.push({'name': foodOrder.name,'prize': foodOrder.prize});
		sum(foodOrder.prize);	
	});

function sum(prize){
	var lumSum = parseInt(prize);
	$scope.totalPrize += lumSum;
	console.log($scope.totalPrize);
}
	

})