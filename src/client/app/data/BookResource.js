(function () {
    'use strict';

    angular
        .module('app.data', ['ngResource'])
        .factory('BookResource', ['$resource', BookResource]);

		function BookResource($resource) {
			return $resource('http://localhost:3000/api/books/:bookId', {bookId: '@bookId'},
				{
					'get': { method: 'GET' },
					'save':   {method:'POST'},
					'update':   {method:'PUT',
					params: {
						bookId: "@bookId"
						}},
					'delete':   {method:'DELETE',
					params: {
						bookId: "@bookId"
						}}
				});
		};
}());
