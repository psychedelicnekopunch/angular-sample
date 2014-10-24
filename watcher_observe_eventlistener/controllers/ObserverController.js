app.controller('ObserverController', function ($scope, Eventlistener)
{
	'use strict';

	var self = this;

	self.sendParams = {
		val: ''
	};
	self.result = null;

	self.onSetWatchlistener = function()
	{
		Eventlistener.setVal(self.sendParams);
	};

	$scope.$watch('watchlistener', function (data)
	{
		self.result = data;
	});

	$scope.$on('emitlistener', function (event, data)
	{
		self.result = data;
	});

	$scope.$on('broadcastlistener', function (event, data)
	{
		self.result = data;
	});
});