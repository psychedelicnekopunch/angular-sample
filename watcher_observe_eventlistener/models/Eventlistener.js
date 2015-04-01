app.factory('Eventlistener', function ($rootScope)
{
	'use strict';

	var e = $rootScope;

	e.watchlistener = null;

	return {
		setVal: function(params)
		{
			e.watchlistener = params.val;
		}
	};
});