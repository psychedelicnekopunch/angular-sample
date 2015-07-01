app.factory('ChatSample', function(Chat)
{
	'use strict';

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
		console.log(sendAddParams);
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
});