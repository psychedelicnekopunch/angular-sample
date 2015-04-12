app.directive('listSample', function()
{
	'use strict';

	return {
		restrict: 'E',
		scope: {
			self: '=set'
		},
		templateUrl: '/AngularJsSample/use_directive/templates/listSample.html',
	};
})
.directive('listAddSample', function()
{
	'use strict';

	return {
		restrict: 'E',
		scope: {
			self: '=set'
		},
		templateUrl: '/AngularJsSample/use_directive/templates/listAddSample.html',
	};
})
.directive('listSaveSample', function()
{
	'use strict';

	return {
		restrict: 'E',
		scope: {
			self: '=set'
		},
		templateUrl: '/AngularJsSample/use_directive/templates/listSaveSample.html',
	};
});