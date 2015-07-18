app.factory('ChatSample2', function(ChatSample, Chat)
{
	'use strict';

	var self = angular.extend(this, ChatSample);

	// override
	self.sendAddParams = {
		name    : null,
		comment : null,
		type    : null,
	};

	// override
	self.commentInit = function()
	{
		// self.sendAddParams.comment = 'override commentInit()';
		self.sendAddParams.comment = '';
	};

	// override
	self.add = function()
	{
		// console.log(self.sendAddParams);
		self.sendAddParams.type = 'override add()';
		Chat.add(self.sendAddParams);
	};

	console.log(self);

	return self;
});