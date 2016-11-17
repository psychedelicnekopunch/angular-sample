class SpaUserController {
	constructor(Location, $routeParams, $timeout) {
		'use strict';

		this.initialized = false;

		this.routeParams = $routeParams;

		$timeout(() => {
			this.initialized = true;
			console.log('SpaUserController.initialized');
		}, 150);
	}
}

SpaUserController.$inject = ['Location', '$routeParams', '$timeout'];

app.controller('SpaUserController', SpaUserController);