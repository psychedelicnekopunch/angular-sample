'use strict';

app.factory('FactorySample', function ($rootScope)
{
	var value = null;

	var e = $rootScope;

	e.factorySampleVal = null;

	var setVal = function(param)
	{
		if(value === param){
			return false;
		}

		value = param;

		return true;
	};

	var setVal2 = function(param)
	{
		if(e.factorySampleVal === param){
			return false;
		}

		e.factorySampleVal = param;

		return true;
	};

	return {
		setVal: function(param)
		{
			return setVal(param);
		},
		setVal2: function(param)
		{
			return setVal2(param);
		},
		getVal: function()
		{
			return value;
		},
		getVal2: function()
		{
			return e.factorySampleVal;
		}
	};
});