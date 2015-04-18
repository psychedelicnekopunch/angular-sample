app.controller('IndexController', function($scope, Chat)
{
	'use strict';

	var self = this;

	self.init = function()
	{
		self.chatSample.init();
	};

	self.chatSample = (function()
	{
		var lists = null;

		var sendAddParams = {
			name    : null,
			comment : null,
		};

		var init = function()
		{
			Chat.init();
		};

		var commentInit = function()
		{
			sendAddParams.comment = null;
		};

		var refreshLists = function()
		{
			this.lists = Chat.lists();
		};

		var add = function()
		{
			Chat.add(sendAddParams);
		};

		var remove = function(id)
		{
			var params = {
				id: id,
			};
			Chat.delete(params);
		};

		return {
			init         : init,
			commentInit  : commentInit,
			refreshLists : refreshLists,
			// for view
			lists         : lists,
			sendAddParams : sendAddParams,
			add           : add,
			delete        : remove
		};
	})();

	$scope.$root.$on('lists:init', function()
	{
		self.chatSample.refreshLists();
	});

	$scope.$root.$on('lists:add', function()
	{
		self.chatSample.refreshLists();
		self.chatSample.commentInit();
		console.log(self.chatSample.lists);
		// why did i get this?
		console.log(lists);
	});

	$scope.$root.$on('lists:delete', function()
	{
		self.chatSample.refreshLists();
	});

	self.init();
});