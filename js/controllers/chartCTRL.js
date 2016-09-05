

app.controller('chartCTRL',function($scope,$state){

	$scope.orderedList = [];
	$scope.totalPrize = 0;

	$scope.$on('orderedFood', function(evt,foodOrder){

		$scope.orderedList.push({'name': foodOrder.name,'prize': foodOrder.prize});
		sum(foodOrder.prize);	
	});

		$scope.goAndPay = function(){
		if($scope.orderedList.length == 0){
			alert('Twoje zamówienie jest puste');
			return false;
		}
		var opinion = confirm('czy zakończyłeś już zamówienie?')
		if (opinion === true){
			console.log('true');
			$state.go('payment');
		}
		else{
			console.log('false');
			return false;
		}

	}

	$scope.deleteOrder = function(index){
		var opinion = confirm('Czy chcesz usunąć to zamówienie z koszyka?');
		if(opinion === true){
			$scope.totalPrize -= parseInt($scope.orderedList[index].prize);
			$scope.orderedList.splice(index,1);
		}
		else{
			return false;
		}
	}

function sum(prize){
	var lumSum = parseInt(prize);
	$scope.totalPrize += lumSum;
}
	

})