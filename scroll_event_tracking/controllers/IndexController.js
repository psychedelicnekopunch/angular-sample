app.controller('IndexController', function($scope)
{
	'use strict';

	// you can get scroll event tracking here
	$scope.$root.$on('scrolleventtracking', function(e, res)
	{
		console.log(res);
	});

});