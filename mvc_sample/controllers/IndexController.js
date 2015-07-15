app.controller('IndexController', function($scope, ChatSample, ChatSample2)
{
	'use strict';

	var self = this;

	self.init = function()
	{
		self.chatSample.init();
		self.chatSample2.init();
	};

	self.chatSample  = ChatSample;
	self.chatSample2 = ChatSample2;

	$scope.$root.$on('lists:init', function()
	{

	});

	$scope.$root.$on('lists:add', function()
	{
		self.chatSample.commentInit();
		self.chatSample2.commentInit();
		// console.log(self.chatSample);
		// console.log(self.chatSample.contents.lists);
	});

	$scope.$root.$on('lists:delete', function()
	{
		self.chatSample.refreshLists();
		self.chatSample2.refreshLists();
	});

	self.init();
});