(function () {
	'use strict';

	angular
		.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {

		$scope.checkTooMuch = function () {
			if ($scope.meal_input == undefined || $scope.meal_input.length == 0) {
				$scope.group_message = "Please enter data first";
			}
			else {
				$scope.split = $scope.meal_input.split(',');
				if ($scope.split.length <= 3) {
					$scope.group_message = "Enjoy!";
				}
				else {
					$scope.group_message = "Too much!";
				}
			}
		}
	}
})();
