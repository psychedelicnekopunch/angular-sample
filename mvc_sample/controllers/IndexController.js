app.controller('IndexController', function($scope, ChatSampleBase, ChatSample2)
{
	'use strict';

	var self = this;

	self.init = function()
	{
		self.chatSample.init();
		self.chatSample2.init();
	};

	self.chatSample  = ChatSampleBase;
	self.chatSample2 = ChatSample2;

	$scope.$root.$on('lists:init', function()
	{
		self.chatSample.refreshLists();
		self.chatSample2.refreshLists();
	});

	$scope.$root.$on('lists:add', function()
	{
		self.chatSample.refreshLists();
		self.chatSample2.refreshLists();

		self.chatSample.commentInit();
		self.chatSample2.commentInit();

		console.log(self.chatSample.lists);
		// why did i get this?
		console.log(lists);
	});

	$scope.$root.$on('lists:delete', function()
	{
		self.chatSample.refreshLists();
		self.chatSample2.refreshLists();
	});

	self.init();
});