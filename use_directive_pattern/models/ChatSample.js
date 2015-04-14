app.factory('ChatSample', function(Chat)
{
	var self = this;

	self.lists = null;

	self.sendAddParams = {
		name    : null,
		comment : null,
	};

	self.init = function()
	{
		Chat.init();
	};

	self.commentInit = function()
	{
		self.sendAddParams.comment = null;
	};

	self.refreshLists = function()
	{
		return Chat.lists();
	};

	self.add = function()
	{
		Chat.add(self.sendAddParams);
	};

	self.delete = function(id)
	{
		var params = {
			id: id,
		};
		Chat.delete(params);
	};

	return {
		init : function()
		{
			self.init();
		},
		commentInit : function()
		{
			self.commentInit();
		},
		refreshLists : function()
		{
			return self.refreshLists();
		},

		// for view
		lists : self.lists,
		sendAddParams : self.sendAddParams,

		add : function()
		{
			self.add();
		},
		delete : function(id)
		{
			self.delete(id);
		}
	};
});