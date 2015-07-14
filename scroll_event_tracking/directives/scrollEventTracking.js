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
			var displayHeight = null;
			var eventName     = null;
			var eventOffset   = null;

			var eventOffsetTop, eventScrollbyOffset;

			$window.addEventListener('scroll', function(e)
			{
				// console.log('success');
				// console.log(e);
				// console.log(this);
				// console.log(this.pageYOffset);
				setWinHeight($window.innerHeight);
				setEventOffset(null, null);

				if (canEmit(this.pageYOffset)) {
					emitEvent();
				}
			});

			var setWinHeight = function(height)
			{
				displayHeight = height;
			};

			var setEventName = function(name)
			{
				eventName = name;
			};

			var setEventOffset = function(offsetTop, scrollbyOffset)
			{
				eventOffsetTop      = (eventOffsetTop)      ? eventOffsetTop      : offsetTop;
				eventScrollbyOffset = (eventScrollbyOffset) ? eventScrollbyOffset : scrollbyOffset;

				var fix = (eventScrollbyOffset) ? displayHeight * (eventScrollbyOffset * 0.01) : 0;

				eventOffset = ((eventOffsetTop - fix) < 0) ? 0 : eventOffsetTop - fix;
			};

			var canEmit = function(pageX)
			{
				// console.log(eventOffset);
				// console.log(pageX);
				if (onceControll[eventName]) {
					return;
				}
				/**
				 * you can change the following code if you want
				 * e.g.
				 * if (eventOffset < pageX && (eventOffset + n) > pageX) {
				 * if (eventOffset < pageX) {
				 */
				if (eventOffset < pageX && (eventOffset + 100) > pageX) {
					return true;
				} else {
					return false;
				}
			};

			var emitEvent = function()
			{
				var params = {
					name      : eventName,
					// timestamp : moment().format('X'),
				};
				$rootScope.$emit('scrolleventtracking', params);
				emitedEvent(eventName);
			};
			// console.log(attrs);
			// console.log(attrs.eventName);
			// console.log(element);
			// console.log(element[0].offsetTop);
			setWinHeight($window.innerHeight);
			setEventName(attrs.eventName);
			setEventOffset(element[0].offsetTop, attrs.scrollbyOffset);
		}
	};
});