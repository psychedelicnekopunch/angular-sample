app.factory('Chat', function($rootScope)
{
	'use strict';

	self.contents = {
		lists: null,
	};

	self.init = function()
	{
		self.contents.lists = [];
		$rootScope.$emit('lists:init');
	};

	self.add = function(params)
	{
		// console.log(params);
		var prepare = {
			id : self.getNewId()
		};
		/*
		 * the following code is wrong
		 * _.merge(params, prepare);
		 * self.lists.push(params);
		 */
		_.merge(prepare, params);
		// console.log(prepare);
		self.contents.lists.push(prepare);
		$rootScope.$emit('lists:add');
	};

	self.delete = function(params)
	{
		_.remove(self.contents.lists, function(obj) {
			return obj.id == params.id;
		});
		$rootScope.$emit('lists:delete');
	};

	self.getNewId = function()
	{
		var res = '0';

		_.map(self.contents.lists, function(obj)
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
		contents: self.contents,
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