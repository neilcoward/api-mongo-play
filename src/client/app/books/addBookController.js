(function () {
	'use strict';

	angular
		.module('app.book')
		.controller('AddBook', ['BookResource', '$location', AddBook]);

	function AddBook(BookResource, $location) {
		var vm = this;
		vm.error = '';
		vm.addBook = addBook;

		function addBook() {
			BookResource.save(vm.book);
			$location.path('#/');
		}
	}
})();