'use strict';

angular.module('Game', [])
	.service('GameManager', function() {
		// create a new game
		this.newGame = function() {};

		//handle movement
		this.move = function() {};

		//update score
		this.updateScore = function(newscore) {};

		//check for moves available
		this.movesAvailable = function() {
			return GridService.anyCellsAvailable() ||
					GridService.tileMatchesAvailable();
	};
});