(function() {
	'use strict';

	angular.module('app').run(run);

	run.$injector = [
		'$interval',
		'$state'
	];

	function run($interval, $state) {

		activate();

		function activate() {
			// if ($state.current.name === 'login') {
			if (true) {
				backgroundChanger();
			}
		}

		function backgroundChanger() {

			var activeClass, bg;
			activeClass = 'active';
			$interval(changeBackgroundClass, 3000);

			function changeBackgroundClass() {
				angular.forEach(angular.element('.bg'), function(bg) {
					var bg = angular.element(bg);
					if (bg.hasClass(activeClass)) {
						bg.removeClass(activeClass);
					} else {
						bg.addClass(activeClass);
					}
				});
			}
		}
	}
})();
