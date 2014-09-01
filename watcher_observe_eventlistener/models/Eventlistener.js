'use strict';

app.factory('Eventlistener', function ($rootScope)
{
	var e = $rootScope;

	e.watchlistener = null;

	return {
		setVal: function(params)
		{
			if(!params.val === undefined){
				return false;
			}
			e.watchlistener = params.val;
			return true;
		}
	};
});