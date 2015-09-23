(function () {
    'use strict';

    angular
        .module('app.data', ['ngResource'])
        .factory('BookResource', ['$resource', BookResource]);

		function BookResource($resource) {
			return $resource('http://localhost:3000/api/books/', null,
				{
					'get': { method: 'get' }
				});
		};
}());
