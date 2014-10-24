app.controller('FormController', function ($scope, Form)
{
	'use strict';
	var self = this;

	self.sendParams = {
		id : null,
	};

	self.lists  = null;
	self.res    = null;
	self.select = {id : null};

	self.set = function(select)
	{
		//console.log(select);
		self.sendParams.id = select.id;
		self.select.id     = select.id;
		self.res = null;
	};

	self.go = function()
	{
		self.res = self.sendParams;
	};

	Form.init();

	$scope.$watch('formGetSelectList', function (data)
	{
		if (!data) {
			return;
		}
		self.select.id     = '14';
		self.sendParams.id = self.select.id;
		self.lists         = Form.getList();
		console.log(data);
		console.log(self.lists);
	});
});