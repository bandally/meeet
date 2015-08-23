(function() {
	'use strict';

	angular.module('app').controller('LoginController', LoginController);

	LoginController.$injector = [
		'$interval'
	];

	function LoginController($interval) {

		activate();

		function activate() {
			backgroundChanger();
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
