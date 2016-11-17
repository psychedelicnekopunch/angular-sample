class IndexController {
	constructor(Location, $timeout) {
		'use strict';

		this.initialized = false;

		$timeout(() => {
			this.initialized = true;
			console.log('IndexController.initialized');
		}, 500);
	}
}

IndexController.$inject = ['Location', '$timeout'];

app.controller('IndexController', IndexController);