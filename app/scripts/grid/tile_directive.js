'use strict';

angular.module('Grid')
	.directive('tile', function() {
		return {
			restrict: 'A',
			scope: {
				ngModel: '='
			},
			templateUrl: 'views/tile.html'
		};
	});