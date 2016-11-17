class SpaMessageController {
	constructor(Location, $timeout) {
		'use strict';

		this.initialized = false;

		$timeout(() => {
			this.initialized = true;
			console.log('SpaMessageController.initialized');
		}, 150);
	}
}

SpaMessageController.$inject = ['Location', '$timeout'];

app.controller('SpaMessageController', SpaMessageController);