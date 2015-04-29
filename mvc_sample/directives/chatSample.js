app.directive('chatSample', function()
{
	'use strict';

	return {
		restrict: 'E',
		scope: {
			self: '=set'
		},
		templateUrl: '/AngularJsSample/mvc_sample/templates/chatSample.html',
	};
});