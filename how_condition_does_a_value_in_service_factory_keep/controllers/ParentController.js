'use strict';

app.controller('ParentController', function ($scope, FactorySample)
{
	var self = this;

	self.inputValue = '';
	self.inputValue2 = '';
	self.getValue = null;
	self.getValue2 = null;

	self.setVal = function()
	{
		if(!FactorySample.setVal(self.inputValue)){
			console.log('same param : 1');
		}
		if(!FactorySample.setVal2(self.inputValue2)){
			console.log('same param : 2');
		}

		self.getValue = FactorySample.getVal();
	};

	$scope.$watch('factorySampleVal', function (data)
	{
		self.getValue2 = data;
	});
});