app.controller('IndexController', function($scope)
{
	'use strict';

	var self = this;

	self.init = function()
	{

	};

	// you can get scroll event tracking here
	$scope.$root.$on('scrolleventtracking', function(e, res)
	{
		console.log(res);
	});

	self.init();
});