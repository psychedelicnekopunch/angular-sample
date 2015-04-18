app.directive('chatSample', function()
{
	'use strict';

	return {
		restrict: 'E',
		scope: {
			self: '=set'
		},
		templateUrl: '/AngularJsSample/use_directive_pattern/templates/chatSample.html',
	};
})
.directive('chatAddSample', function()
{
	'use strict';

	return {
		restrict: 'E',
		scope: {
			self: '=set'
		},
		templateUrl: '/AngularJsSample/use_directive_pattern/templates/chatAddSample.html',
	};
});