class TodoController {
	constructor($timeout) {
		'use strict';

		this.initialized = false;

		$timeout(() => {
			this.initialized = true;
			console.log('TodoController.initialized');
		}, 500);
	}
}

TodoController.$inject = ['$timeout'];

app.controller('TodoController', TodoController);