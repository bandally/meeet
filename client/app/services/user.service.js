(function() {
	'use strict';

    angular.module('app').factory('user', user);

	user.$injector = ['$q', 'api'];

	function user($q, api) {

        return {
            get   : get,
			getAll: getAll
        };

		function get(id) {
			var deferred = $q.defer();
			api.user().get({
				userId: id
			}, function(user) {
				deferred.resolve(user);
			});
			return deferred.promise;
		}

		function getAll() {
			var deferred = $q.defer();
			api.user().query(function(users) {
				deferred.resolve(users);
			});
			return deferred.promise;
		}
    }
})();
