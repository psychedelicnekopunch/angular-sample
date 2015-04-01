app.factory('Eventlistener', function($rootScope)
{
	'use strict';

	$rootScope.watchlistener = null;

	return {
		setVal: function(params)
		{
			$rootScope.watchlistener = params.val;
		}
	};
});