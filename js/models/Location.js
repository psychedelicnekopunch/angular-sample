class Location {

	static getInstance($rootScope, $location) {
		Location.instance = new Location($rootScope, $location);
		return Location.instance;
	}

	constructor($rootScope, $location) {
		'use strict';
		console.log('init class Location');
		$rootScope.$on('$locationChangeSuccess', (e, newUrl, oldUrl, newState, oldState) => {
			// console.log('IndexController', newUrl, oldUrl, newState, oldState);
		});
	}
}

Location.getInstance.$inject = ['$rootScope', '$location'];

app.factory('Location', Location.getInstance);