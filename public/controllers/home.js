var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	console.log('hi');

	var refresh = function() {
		$http.get('/api/goals')
			.success(function(res) {

				
			});

		$http.get('/api/users/1')
			.success(function(res) {
				$scope.person = res;
			});
	};

	refresh();

	//Create user
	$scope.createGoal = function() {
		console.log($scope.contact);

		$http.post('/api/goals', $scope.goal)
			.success(function(res) {
				console.log(res);
				refresh();

			});
			refresh();
	};

}]);