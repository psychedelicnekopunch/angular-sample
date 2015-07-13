app.directive('scrollEventTracking', function($rootScope, $window)
{
	'use strict';

	var onceControll = {};

	var emitedEvent = function(name)
	{
		if (onceControll[name]) {
			return;
		}
		onceControll[name] = true;
	};

	return {
		restrict: 'E',
		link: function(scope, element, attrs, controllers)
		{
			// console.log(waypoints);

			var eventName = null;
			var scrollbyOffset = 0;

			var setEventName = (function(name)
			{
				eventName = name;
			})(attrs.eventName);

			var setScrollbyOffset = (function(val)
			{
				scrollbyOffset = (val) ? val : 0;
			})(attrs.scrollbyOffset);

			var emitEvent = function()
			{
				if (onceControll[eventName]) {
					// return;
				}
				var params = {
					name      : eventName,
					// timestamp : moment().format('X'),
				};
				$rootScope.$emit('scrolleventtracking', params);
				emitedEvent(eventName);
			};
			// console.log(scope);
			// console.log(scope.$index);
			// console.log(attrs);
			// console.log(attrs.eventName);
			// console.log(attrs.scrollbyOffset);

			var waypoints = $(element).waypoint({
				handler: function(direction) {
					console.log('Scrolled to waypoint!');
					emitEvent();
				},
				offset: scrollbyOffset + '%'
			});
		}
	};
});