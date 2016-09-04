class IndexController {
	constructor($timeout) {
		'use strict';

		this.initialized = false;

		$timeout(() => {
			this.initialized = true;
			console.log('IndexController.initialized');
		}, 500);
	}
}

IndexController.$inject = ['$timeout'];

app.controller('IndexController', IndexController);