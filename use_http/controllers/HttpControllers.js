app.controller('HttpControllers', function($scope, $timeout, Http)
{
	var self = this;

	self.sendParams = {
		param_a : '',
		param_b : '',
		param_c : '',
	};

	self.sendFile = null;

	self.initMes = function()
	{
		self.mes = 'console.log()';
	};

	self.get = function()
	{
		Http.get(self.sendParams);
	};

	self.post = function()
	{
		Http.post(self.sendParams);
	};

	self.postJson = function()
	{
		Http.postJson(self.sendParams);
	};

	self.postJquery = function()
	{
		Http.postJquery(self.sendParams);
	};

	self.upload = function()
	{
		Http.upload(self.sendFile);
	};

	self.initMes();

	$scope.fileUploader = function(files)
	{
		var file = (files[0]) ? files[0] : null;

		if (!file) {
			return;
		}
		if (!file.type.match(/^image\/(png|jpeg|gif)$/)) {
			return;
		}

		var image  = new Image();
		var reader = new FileReader();
		var c      = document.getElementById('canvas');
		var ctx    = c.getContext('2d');

		reader.onload = function(e)
		{
			image.src    = e.target.result;
			image.onload = function()
			{
				// c.width  = 100;
				// c.height = 100;
				// ctx.drawImage(image, 0, 0, 100, 100);
				c.width  = image.width;
				c.height = image.height;
				ctx.drawImage(image, 0, 0, c.width, c.height);
			};
		};
		reader.readAsDataURL(file);
		self.sendFile = file;
	};

	$scope.$root.$on('http:success', function()
	{
		self.mes = 'sent it. please check console';
		$timeout(function()
		{
			self.initMes();
		}, 3000);
	});

	$scope.$root.$on('http:error', function()
	{
		self.mes = 'sent it. but its error. please check console';
		$timeout(function()
		{
			self.initMes();
		}, 3000);
	});
});