'use strict';

app.controller('ObserverController', function ($scope, Eventlistener)
{
	var self = this;

	self.sendParams = {
		val: ''
	};
	self.result = null;

	self.onSetWatchlistener = function()
	{
		if(Eventlistener.setVal(self.sendParams)){
			console.log('success');
		}
	};

	$scope.$watch('watchlistener', function (data , olddata)
	{
		//console.log(olddata);
		self.result = data;
	});

	$scope.$on('emitlistener', function (data)
	{
		self.result = data;
		// I guess that you souldn't use any $watch event action into $emit and $broadcast
		/*if(Eventlistener.setVal(self.sendParams)){
			console.log('success');
		}*/
	});

	$scope.$on('broadcastlistener', function (data)
	{
		self.result = data;
	});
});