(function () {
    'use strict';

    angular
        .module('app.data', ['ngResource'])
        .factory('BookResource', ['$resource', BookResource]);

		function BookResource($resource) {
			return $resource('http://localhost:3000/api/books/:book_id', {book_id: '@book_id'},
				{
					'get': { method: 'get' },
					'save':   {method:'POST'},
					'update':   {method:'PUT'}
				});
		};
}());
