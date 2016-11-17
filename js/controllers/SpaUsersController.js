class SpaUsersController {
	constructor(Location, $timeout) {
		'use strict';

		this.initialized = false;

		$timeout(() => {
			this.initialized = true;
			console.log('SpaUsersController.initialized');
		}, 150);
	}
}

SpaUsersController.$inject = ['Location', '$timeout'];

app.controller('SpaUsersController', SpaUsersController);