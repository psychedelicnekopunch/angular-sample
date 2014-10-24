app.factory('Form', function ($rootScope)
{
	'use strict';
	var self = this;
	var e = $rootScope;

	e.formSelectList = null;

	self.getSelectList = function()
	{
		e.formSelectList = [
			{
				id   : '10',
				item : 'test1',
				select : {
					id : '10'
				}
			},
			{
				id   : '7',
				item : 'test2',
				select : {
					id : '7'
				}
			},
			{
				id   : '14',
				item : 'test3',
				select : {
					id : '14'
				}
			},
			{
				id   : '20',
				item : 'test4',
				select : {
					id : '20'
				}
			},
			{
				id   : '8',
				item : 'test5',
				select : {
					id : '8'
				}
			},
		];
	};

	return {
		init: function()
		{
			self.getSelectList();
		},
		getList: function()
		{
			return e.formSelectList;
		}
	};
});