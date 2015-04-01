app.factory('Api', function($rootScope, $http, $templateCache)
{
	'use strict';

	var self = this;

	self.emit = function(name, val)
	{
		$rootScope.$emit(name, val);
	};

	self.http = function(method, url, params, success, error)
	{
		var sendParams = (params) ? params : {};
		//console.log(sendParams);
		switch (method) {
			case 'FILES':
				self.fileUploader(url, sendParams, success, error);
				break;
			case 'POST':
				self.post(url, sendParams, success, error);
				break;
			case 'POST-JSON':
				$http({
					method: method, url: url, data: sendParams, cache: $templateCache,
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).success(success).error(error);
				break;
			case 'POST-JQUERY':
				$http({
					method: method, url: url, data: $.param(sendParams), cache: $templateCache,
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).success(success).error(error);
				break;
			case 'GET':
				$http({
					method: method, url: url, params: sendParams, cache: $templateCache,
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).success(success).error(error);
				break;
		}
	};

	self.fileUploader = function(uploadType, file, success, error)
	{
		// var url = '/api/path/to/file/upload/' + uploadType;
		var url    = uploadType;
		var params = new FormData();
		if (file) {
			params.append('uploadfile', file);
		}
		$http({
			method: 'POST', url: url, data: params, cache: $templateCache,
			headers: {'Content-Type': undefined },
			withCredentials: true, transformRequest: angular.identity
		}).success(success).error(error);
	};

	self.post = function(url, sendParams, success, error)
	{
		var params = new FormData();
		angular.forEach(sendParams, function(val, key)
		{
			if (val) {
				params.append(key, val);
			}
		});
		$http({
			method: 'POST', url: url, data: params, cache: $templateCache,
			headers: {'Content-Type': undefined },
			withCredentials: true, transformRequest: angular.identity
		}).success(success).error(error);
	};

	return {
		get: function(url, params, success, error)
		{
			self.http('GET', url, params, success, error);
		},
		post: function(url, params, success, error)
		{
			self.http('POST', url, params, success, error);
		},
		postJson: function(url, params, success, error)
		{
			self.http('POST-JSON', url, params, success, error);
		},
		postJquery: function(url, params, success, error)
		{
			self.http('POST-JQUERY', url, params, success, error);
		},
		upload: function(uploadType, file, success, error)
		{
			self.http('FILES', uploadType, file, success, error);
		},
		emit: function(name, val)
		{
			self.emit(name, val);
		}
	};
});