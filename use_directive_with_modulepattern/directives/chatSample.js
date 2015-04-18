app.directive('chatSample', function()
{
	'use strict';

	return {
		restrict: 'E',
		scope: {
			self: '=set'
		},
		templateUrl: '/AngularJsSample/use_directive_with_modulepattern/templates/chatSample.html',
	};
})
.directive('chatSampleAdd', function()
{
	'use strict';

	return {
		restrict: 'E',
		scope: {
			self: '=set'
		},
		templateUrl: '/AngularJsSample/use_directive_with_modulepattern/templates/chatSampleAdd.html',
	};
});