app.factory('FactorySample', function ($rootScope)
{
	'use strict';

	var self = this;
	var e = $rootScope;

	self.value = null;
	e.factorySampleVal = null;

	self.setVal = function(param)
	{
		if (self.value === param) {
			return false;
		}

		self.value = param;

		return true;
	};

	self.setVal2 = function(param)
	{
		if (e.factorySampleVal === param) {
			return false;
		}

		e.factorySampleVal = param;

		return true;
	};

	return {
		setVal: function(param)
		{
			return self.setVal(param);
		},
		setVal2: function(param)
		{
			return self.setVal2(param);
		},
		getVal: function()
		{
			return self.value;
		},
		getVal2: function()
		{
			return e.factorySampleVal;
		}
	};
});