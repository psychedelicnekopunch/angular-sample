var app = angular.module('angular-sample', ['ngSanitize', 'ngRoute', 'ngCookies', 'ngAnimate', 'ngTouch', 'ngMessages']);

class Config {

	static getInstance($routeProvider, $locationProvider) {
		Config.instance = new Config($routeProvider, $locationProvider);
		return Config.instance;
	}

	constructor($routeProvider, $locationProvider) {
		'use strict';
		// ルーティング (Routing)
		$routeProvider
			// トップページ
			.when('/', {
				templateUrl  : '/templates/index/index.html',
				controller   : 'IndexController',
				controllerAs : 'self',
			})
			// ToDoサンプル
			.when('/todo.html', {
				templateUrl  : '/templates/todo/index.html',
				controller   : 'TodoController',
				controllerAs : 'self',
			});

		/*$locationProvider.html5Mode({
			enabled      : true,
			requireBase  : true,
			rewriteLinks : false,
		});*/
		$locationProvider.html5Mode({
			enabled      : true,
			requireBase  : true,
			rewriteLinks : true,
		});
	}
}

Config.getInstance.$inject = ['$routeProvider', '$locationProvider'];

app.config(Config.getInstance);