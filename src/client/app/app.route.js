(function() {
	'use strict';

	angular.module('app').config(route);

	route.$injector = [
		'$stateProvider',
		'$urlRouterProvider'
	];

	function route($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('login', {
				url: '/',
				templateUrl: 'app/login.html',
				controller: 'LoginController',
				controllerAs: 'login'
			})
			.state('home', {
				url: '/home',
				templateUrl: 'app/home.html'
			})
			.state('user', {
				url: '/user/:userId',
				templateUrl: 'app/user.html'
			})
			.state('search', {
				url: '/search',
				templateUrl: 'app/search.html'
			})
			.state('friends', {
				url: '/friends',
				templateUrl: 'app/friends.html'
			});
	}
})();
