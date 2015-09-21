(function() {
	'use strict';

	angular.module('app').controller('AppController', AppController);

	AppController.$injector = [
		'$interval',
		'$state',
		'user'
	];

	function AppController($interval, $state, user) {

		var vm = this;
		vm.stateName = stateName;

		activate();

		function activate() {
			user.getAll().then(function(user) {
				console.log(user);
			});
		}

		function stateName() {
			return $state.current.name;
		}
	}
})();
