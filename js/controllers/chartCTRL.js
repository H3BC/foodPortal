

app.controller('chartCTRL',function($scope,$state,prizeFactory){

	$scope.orderedList = [];
	$scope.totalPrize = 0;

	$scope.receiverData = {
		'name': null,
		'lastName': null,
		'address': null,
		'email': null,
		'payway': null,
		'opinion': null
	}
	

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
			
			$state.go('payment');
		}
		else{
			
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

	$scope.send = function(){
		console.log($scope.totalPrize);
		if($scope.receiverData.name == null || $scope.receiverData.lastName == null || $scope.receiverData.lastName < 3 || $scope.receiverData.name.length < 3){
			alert('podane imie bądź nazwisko są nieprawidłowe.');
			return false;
		}
		else if($scope.receiverData.address == null || $scope.receiverData.length < 5){
				alert('podany adres jest nieprawidłowy');
				return false;
		}
		else if($scope.receiverData.email == null || $scope.receiverData.email.length < 4 || $scope.receiverData.email.indexOf('@') == -1){
			alert('podany adres email nie jest prawidłowy');
			return false;
		}
		else if($scope.receiverData.payway == null){
			alert('proszę zaznaczyć sposób płatności');
		}
		else{
			alert('Zamówienie przyjęte do realizacji' + '\n' + 'Imie i nazwisko: ' + $scope.receiverData.name + ' ' + $scope.receiverData.lastName
			+ "\n" + "adres: " + $scope.receiverData.address + '\n' + 'email: ' + $scope.receiverData.email + '\n' + 'Sposób płatności: ' + $scope.receiverData.payway + '\n' + "Do zapłaty: " + prizeFactory.totalPrize +
			'zł' + '\n' + 'Szacowany czas zamówienia: 1 godzina' + '\n' + 'Życzymy smacznego!');
			$state.go('main');

		}

	}

function sum(prize){
	var lumpSum = parseInt(prize);
	prizeFactory.totalPrize = prizeFactory.totalPrize + lumpSum;
	$scope.totalPrize += lumpSum;
}
	

})