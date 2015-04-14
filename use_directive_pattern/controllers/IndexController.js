app.controller('IndexController', function($scope, ChatSample)
{
	'use strict';

	var self = this;

	self.init = function()
	{
		self.chatSample.init();
	};

	self.chatSample = ChatSample;

	$scope.$root.$on('lists:init', function()
	{
		self.chatSample.lists = self.chatSample.refreshLists();
	});

	$scope.$root.$on('lists:add', function()
	{
		self.chatSample.lists = self.chatSample.refreshLists();
		self.chatSample.commentInit();
	});

	$scope.$root.$on('lists:delete', function()
	{
		self.chatSample.refreshLists();
	});

	self.init();
});