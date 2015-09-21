(function() {
	'use strict';

	angular.module('app', [
		'ngAnimate',
		'ngTouch',
		'ngResource',
		'ui.router'
	]).value('conf', {
		'apiDomain': 'http://192.168.33.10/meeet'
	});
})();
