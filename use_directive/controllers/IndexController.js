app.controller('IndexController', function($scope, MusicArtist)
{
	'use strict';

	var self = this;

	self.init = function()
	{
		MusicArtist.init();
	};

	self.listSample1 = {

		lists : null,

		sendAddParams : {
			name  : null,
			title : null,
		},
		sendSaveParams : {
			id    : null,
			name  : null,
			title : null,
		},

		add : function()
		{
			var _self = self.listSample1;
			MusicArtist.add('us', _self.sendAddParams);
		},

		save : function()
		{
			var _self = self.listSample1;
			MusicArtist.save('us', _self.sendSaveParams);
		},

		delete : function(id)
		{
			var params = {
				id: id,
			};
			MusicArtist.delete('us', params);
		},

		prepareSave: function(id)
		{
			var _self = self.listSample1;
			var list  = _.find(_self.lists, function(obj) {
				return (obj.id == id) ? obj : null;
			});

			_self.sendSaveParams.id    = (list) ? list.id    : null;
			_self.sendSaveParams.name  = (list) ? list.name  : null;
			_self.sendSaveParams.title = (list) ? list.title : null;
		},
	};

	self.listSample2 = {

		lists : null,

		sendAddParams : {
			name  : null,
			title : null,
		},
		sendSaveParams : {
			id    : null,
			name  : null,
			title : null,
		},

		add : function()
		{
			var _self = self.listSample2;
			MusicArtist.add('uk', _self.sendAddParams);
		},

		save : function()
		{
			var _self = self.listSample2;
			MusicArtist.save('uk', _self.sendSaveParams);
		},

		delete : function(id)
		{
			var params = {
				id: id,
			};
			MusicArtist.delete('uk', params);
		},

		prepareSave: function(id)
		{
			var _self = self.listSample2;
			var list  = _.find(_self.lists, function(obj) {
				return (obj.id == id) ? obj : null;
			});

			_self.sendSaveParams.id    = (list) ? list.id    : null;
			_self.sendSaveParams.name  = (list) ? list.name  : null;
			_self.sendSaveParams.title = (list) ? list.title : null;
		},
	};

	$scope.$root.$on('lists:init', function()
	{
		self.listSample1.lists = MusicArtist.lists('us');
		self.listSample2.lists = MusicArtist.lists('uk');
	});

	$scope.$root.$on('lists:add', function()
	{
		self.listSample1.lists = MusicArtist.lists('us');
		self.listSample2.lists = MusicArtist.lists('uk');

		self.listSample1.sendAddParams = {
			name  : null,
			title : null,
		};
		self.listSample2.sendAddParams = {
			name  : null,
			title : null,
		};
	});

	$scope.$root.$on('lists:save', function()
	{
		self.listSample1.lists = MusicArtist.lists('us');
		self.listSample2.lists = MusicArtist.lists('uk');

		self.listSample1.sendSaveParams = {
			id    : null,
			name  : null,
			title : null,
		};
		self.listSample2.sendSaveParams = {
			id    : null,
			name  : null,
			title : null,
		};
	});

	$scope.$root.$on('lists:delete', function()
	{
		self.listSample1.lists = MusicArtist.lists('us');
		self.listSample2.lists = MusicArtist.lists('uk');
	});

	self.init();
});