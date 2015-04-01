app.factory('Http', function(Api)
{
	'use strict';

	var self = this;

	self.get = function(params)
	{
		Api.get('api.php', params,
			function(data, status)
			{
				console.log(status);
				console.log(data);
				Api.emit('http:success');
			},
			function(data, status)
			{
				console.log(status);
				console.log(data);
				Api.emit('http:error');
			});
	};

	self.post = function(params)
	{
		Api.post('api.php', params,
			function(data, status)
			{
				console.log(status);
				console.log(data);
				Api.emit('http:success');
			},
			function(data, status)
			{
				console.log(status);
				console.log(data);
				Api.emit('http:error');
			});
	};

	self.postJson = function(params)
	{
		Api.postJson('api.php', params,
			function(data, status)
			{
				console.log(status);
				console.log(data);
				Api.emit('http:success');
			},
			function(data, status)
			{
				console.log(status);
				console.log(data);
				Api.emit('http:error');
			});
	};

	self.postJquery = function(params)
	{
		Api.postJquery('api.php', params,
			function(data, status)
			{
				console.log(status);
				console.log(data);
				Api.emit('http:success');
			},
			function(data, status)
			{
				console.log(status);
				console.log(data);
				Api.emit('http:error');
			});
	};

	self.upload = function(file)
	{
		Api.upload('api.php', file,
			function(data, status)
			{
				console.log(status);
				console.log(data);
				Api.emit('http:success');
			},
			function(data, status)
			{
				console.log(status);
				console.log(data);
				Api.emit('http:error');
			});
	};


	return {
		get: function(params)
		{
			self.get(params);
		},
		post: function(params)
		{
			self.post(params);
		},
		postJson: function(params)
		{
			self.postJson(params);
		},
		postJquery: function(params)
		{
			self.postJquery(params);
		},
		upload: function(file)
		{
			self.upload(file);
		}
	};
});