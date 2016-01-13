// var myApp = angular.module('myApp', []);
// myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
// 	console.log('hi');

// 	var refresh = function() {
// 		$http.get('/api/goals')
// 			.success(function(res) {

				
// 			});

// 		$http.get('/api/users/1')
// 			.success(function(res) {
// 				$scope.person = res;
// 			});
// 	};

// 	refresh();

// 	//Create user
// 	$scope.createGoal = function() {
// 		console.log($scope.contact);

// 		$http.post('/api/goals', $scope.goal)
// 			.success(function(res) {
// 				console.log(res);
// 				refresh();

// 			});
// 			refresh();
// 	};

// }]);

 // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2]
        ]);

        // Set chart options
        var options = {'title':'How Much Pizza I Ate Last Night',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
