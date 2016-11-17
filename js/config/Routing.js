class Routing {

	static getInstance($routeProvider, $locationProvider) {
		Routing.instance = new Routing($routeProvider, $locationProvider);
		return Routing.instance;
	}

	constructor($routeProvider, $locationProvider) {
		'use strict';
		$routeProvider
			// トップページ
			.when('/', {
				templateUrl  : '/templates/index/index.html',
				controller   : 'IndexController',
				controllerAs : 'self',
			})
			// ToDoサンプル
			.when('/todo', {
				templateUrl  : '/templates/todo/index.html',
				controller   : 'TodoController',
				controllerAs : 'self',
			})
			// クッキーテスト
			.when('/cookie', {
				templateUrl  : '/templates/cookie/index.html',
				controller   : 'CookieController',
				controllerAs : 'self',
			})
			// SPAサンプル
			.when('/spa', {
				templateUrl  : '/templates/spa/index.html',
				controller   : 'SpaController',
				controllerAs : 'self',
			})
			.when('/spa/users', {
				templateUrl  : '/templates/spa/users.html',
				controller   : 'SpaUsersController',
				controllerAs : 'self',
			})
			.when('/spa/user/:user', {
				templateUrl  : '/templates/spa/user.html',
				controller   : 'SpaUserController',
				controllerAs : 'self',
			})
			.when('/spa/message', {
				templateUrl  : '/templates/spa/message.html',
				controller   : 'SpaMessageController',
				controllerAs : 'self',
			});

		$locationProvider.html5Mode({
			enabled      : true,
			requireBase  : true,
			rewriteLinks : true,
		});
	}
}

Routing.getInstance.$inject = ['$routeProvider', '$locationProvider'];

app.config(Routing.getInstance);