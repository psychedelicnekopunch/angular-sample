app.factory('MusicArtist', function($rootScope)
{
	'use strict';

	self.us = null;
	self.uk = null;

	self.init = function()
	{
		self.us = [
			{
				id    : '1',
				name  : 'Red Hot Chili Peppers',
				title : 'Californication',
			},
			{
				id    : '2',
				name  : 'The Dodos',
				title : 'Carrier',
			},
			{
				id    : '3',
				name  : 'Kings Of Leon',
				title : 'Come Around Sundown',
			},
			{
				id    : '4',
				name  : 'Rage Against The Machine',
				title : 'Live At The Grand Olympic Auditorium',
			},
			{
				id    : '5',
				name  : 'Vampire Weekend',
				title : 'Vampire Weekend',
			}
		];

		self.uk = [
			{
				id    : '1',
				name  : 'Oasis',
				title : 'Familiar To Millions',
			},
			{
				id    : '2',
				name  : 'Ed Sheeran',
				title : '+ (Deluxe Edition)',
			},
			{
				id    : '3',
				name  : 'Arctic Monkeys',
				title : 'Whatever People Say I Am, That\'s What I\'m Not',
			},
			{
				id    : '4',
				name  : 'The Verve',
				title : 'Urban Hymns',
			},
			{
				id    : '5',
				name  : 'Simian Mobile Disco',
				title : 'Whorl',
			}
		];

		$rootScope.$emit('lists:init');
	};

	self.add = function(country, params)
	{
		if (!self.exists(country)) {
			$rootScope.$emit('lists:add');
			return;
		}
		params.id = self.getNewId(country);
		console.log(params);
		self[country].push(params);
		$rootScope.$emit('lists:add');
	};

	self.save = function(country, params)
	{
		var id = null;

		if (!self.exists(country)) {
			$rootScope.$emit('lists:save');
			return;
		}
		console.log(params);
		id = _.findIndex(self[country], function(obj) {
			return obj.id == params.id;
		});
		if (id < 0) {
			$rootScope.$emit('lists:save');
			return;
		}
		_.merge(self[country][id], params);
		$rootScope.$emit('lists:save');
	};

	self.delete = function(country, params)
	{
		if (!self.exists(country)) {
			$rootScope.$emit('lists:delete');
			return;
		}
		console.log(params);
		_.remove(self[country], function(obj) {
			return obj.id == params.id;
		});
		$rootScope.$emit('lists:delete');
	};

	self.exists = function(country)
	{
		return (country === 'uk' || country === 'us') ? true : false;
	};

	self.getNewId = function(country)
	{
		var res = '0';

		_.map(self[country], function(obj)
		{
			res = (obj.id > res) ? obj.id : res;
		});
		res = parseInt(res, 10) + 1;

		return res + '';
	};

	return {
		init: function()
		{
			self.init();
		},
		lists: function(country)
		{
			return (self[country]) ? self[country] : null;
		},
		add: function(country, params)
		{
			self.add(country, params);
		},
		save: function(country, params)
		{
			self.save(country, params);
		},
		delete: function(country, params)
		{
			self.delete(country, params);
		}
	};
});