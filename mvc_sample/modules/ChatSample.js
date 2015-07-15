app.factory('ChatSample', function(Chat)
{
	'use strict';

	var self = this;

	self.contents = {
		lists : null,
	};

	self.sendAddParams = {
		name    : null,
		comment : null,
	};

	self.init = function()
	{
		Chat.init();
		self.contents.lists = Chat.contents.lists;
	};

	self.commentInit = function()
	{
		self.sendAddParams.comment = null;
	};

	self.add = function()
	{
		// console.log(self.sendAddParams);
		Chat.add(self.sendAddParams);
	};

	self.remove = function(id)
	{
		var params = {
			id: id,
		};
		Chat.delete(params);
	};

	return {
		init         : self.init,
		commentInit  : self.commentInit,
		// for view
		contents      : self.contents,
		sendAddParams : self.sendAddParams,
		add           : self.add,
		delete        : self.remove
	};
});