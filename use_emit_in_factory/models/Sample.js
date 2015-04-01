app.factory('Sample', function($rootScope)
{
	'use strict';

	var self = this;

	self.val = null;

	self.set = function(val)
	{
		self.val = val;
		$rootScope.$emit('sample:set');
	};

	return {
		set: function(val)
		{
			self.set(val);
		},
		val: function()
		{
			return self.val;
		}
	};
});