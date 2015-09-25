(function () {
	'use strict';

	angular
		.module('app.book')
		.controller('Book', ['bookList', Book]);

	function Book(bookList) {
		var vm = this;
		vm.error = '';
        vm.title = 'Books';
		vm.books = [];

		vm.books = bookList;
	}
})();
