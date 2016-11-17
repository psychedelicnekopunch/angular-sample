class TodoController {
	constructor(Location, $timeout) {
		'use strict';

		this.initialized = false;

		$timeout(() => {
			this.initialized = true;
			console.log('TodoController.initialized');
		}, 500);
	}
}

TodoController.$inject = ['Location', '$timeout'];

app.controller('TodoController', TodoController);