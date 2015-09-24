(function () {
	'use strict';

	angular
		.module('app.book')
		.controller('AddBook', ['BookResource', AddBook]);

	function AddBook(BookResource) {
		var vm = this;
		vm.error = '';
		vm.addBook = addBook;

		function addBook() {
			BookResource.save(vm.book);
		}
	}
})();