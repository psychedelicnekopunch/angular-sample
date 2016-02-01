/**
 * smaple main.js
 */

var app = angular.module('AngularJsSample', ['ngSanitize', 'ngAnimate', 'ngRoute', 'ngCookies', 'ngTouch', 'ngMaterial', 'ngMessages', 'angularMoment']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)
{
	$locationProvider.html5Mode({
		enabled      : true,
		requireBase  : true,
		rewriteLinks : false,
	});
}]);

// setting for angular-moment
app.run(['amMoment', function(amMoment) {
	amMoment.changeLocale('ja');
}]);