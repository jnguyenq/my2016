var signup = angular.module('signup', []);

signup.controller('signup', ['$scope', '$http', function($scope, $http) {

	console.log('hello from signup controller');

	$scope.createCredentials = function() {
		console.log($scope.credentaisl);

		$http.post('/api/signup', $scope.credentials)
			.success(function(res) {
				console.log(res);
			});
	};
	
}]);