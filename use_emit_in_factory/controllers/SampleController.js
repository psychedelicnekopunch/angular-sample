app.controller('SampleController', function($scope, Sample)
{
	'use strict';

	var self = this;

	self.val = null;
	self.res = null;

	self.set = function()
	{
		Sample.set(self.val);
	};

	$scope.$root.$on('sample:set', function()
	{
		self.res = Sample.val();
	});
});