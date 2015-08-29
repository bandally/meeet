(function() {
	'use strict';

	angular.module('app').directive('meeetTabMenu', meeetTabMenu);

	meeetTabMenu.$injector = [];

	function meeetTabMenu() {
		return {
			bindToController: true,
			controller: tabMenuController,
			controllerAs: 'tabMenu',
			restrict: 'E',
			scope: {},
			templateUrl: 'app/layout/tab-menu.directive.html'
		};
	}

	tabMenuController.$injector = ['$state'];

	function tabMenuController($state) {

		var vm = this;
		vm.isActive = isActive;
		vm.stateName = stateName;

		function isActive(state) {
			return $state.current.name === state;
		}

		function stateName() {
			return $state.current.name;
		}
	}
})();
