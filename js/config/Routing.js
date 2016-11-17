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