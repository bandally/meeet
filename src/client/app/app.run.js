(function() {
	'use strict';

	angular.module('app').run(run);

	run.$injector = ['$anchorScroll', '$rootScope'];

	function run($anchorScroll, $rootScope) {
		$rootScope.$on('$stateChangeSuccess', $anchorScroll);
	}
})();
