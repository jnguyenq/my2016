var login = angular.module('login', []);

login.controller('login', ['$scope', '$http', function($scope, $http) {

	console.log('hello from login controller');

	$scope.login = function() {
		console.log('login clicked')
		$http.post('/api/login', $scope.credentials)
			.success(function(res) {
				alert('Response: ' + res);
			});
	}
	
}]);