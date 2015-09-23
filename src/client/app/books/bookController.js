(function () {
	'use strict';

	angular
		.module('app.book')
		.controller('Book', ['$http','BookResource', Book]);

	function Book($http, BookResource) {
		var vm = this;
		vm.error = '';
        vm.title = 'Books';
		vm.books = [];

		vm.books = BookResource.query();
/*
		var onBooksComplete = function (reponse) {
			vm.books = reponse.data;
		};

		var onError = function(reason){
			vm.error = 'Could not fetch books';
		};

		$http.get('http://localhost:3000/api/books')
			.then(onBooksComplete, onError);
*/
	}
})();
