app.factory('Chat', function($rootScope)
{
	'use strict';

	self.lists = null;

	self.init = function()
	{
		self.lists = [];
		$rootScope.$emit('lists:init');
	};

	self.add = function(params)
	{
		var _params = {
			id : self.getNewId()
		};
		_.merge(_params, params);
		self.lists.push(_params);
		$rootScope.$emit('lists:add');
	};

	self.delete = function(params)
	{
		_.remove(self.lists, function(obj) {
			return obj.id == params.id;
		});
		$rootScope.$emit('lists:delete');
	};

	self.getNewId = function()
	{
		var res = '0';

		_.map(self.lists, function(obj)
		{
			res = (obj.id > res) ? obj.id : res;
		});
		res = parseInt(res, 10) + 1;

		return res + '';
	};

	return {
		init: function()
		{
			self.init();
		},
		lists: function()
		{
			return self.lists;
		},
		lists2: function()
		{
			return 'test';
		},
		add: function(params)
		{
			self.add(params);
		},
		delete: function(params)
		{
			self.delete(params);
		}
	};
});