class SpaController {
	constructor(Location, $timeout) {
		'use strict';

		this.initialized = false;

		$timeout(() => {
			this.initialized = true;
			console.log('SpaController.initialized');
		}, 150);
	}
}

SpaController.$inject = ['Location', '$timeout'];

app.controller('SpaController', SpaController);