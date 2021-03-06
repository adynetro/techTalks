'use strict';
angular.module('jumboClient').controller('SignUpCtrl', ['User', '$state', '$scope', function (User, $state, $scope) {

	$scope.user = User.new();
		
	$scope.signUp = function(){
		User.signUp($scope.user).then(function(success){
			$state.transitionTo('main.hello');
		},
		function(error){
			console.log(error);
			alert(error.data.error);
		});
	}

}]);