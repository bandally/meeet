(function() {
	'use strict';

    angular.module('app').factory('api', api);

	api.$injector = [
		'$resource',
        'conf'
	];

	function api($resource, conf) {

        return {
            user: user
        };

        function user() {
            return $resource(conf.apiDomain + '/users/:userId', {}, {
                get: {
                    method: 'GET',
                    params : {
                        userId: '@userId'
                    }
                },
                query: {
                    method : 'GET',
                    isArray: true
                }
            });
        }
    }
})();
