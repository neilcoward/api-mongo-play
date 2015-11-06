(function () {
    'use strict';

    angular
        .module('app.data', ['ngResource'])
        .factory('BookResource', ['$resource', '$q', BookResource]);
//http://plnkr.co/edit/lIQw4uogcoMpcuHTWy2U?p=preview
		function BookResource($resource, $q) {
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
