(function() {
	'use strict';

	angular.module('app').controller('AppController', AppController);

	AppController.$injector = [
		'$interval',
		'$state'
	];

	function AppController($interval, $state) {

		var vm = this;
		vm.stateName = stateName;

		function stateName() {
			return $state.current.name;
		}
	}
})();
