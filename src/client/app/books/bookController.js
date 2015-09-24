(function () {
	'use strict';

	angular
		.module('app.book')
		.controller('Book', ['BookResource', Book]);

	function Book(BookResource) {
		var vm = this;
		vm.error = '';
        vm.title = 'Books';
		vm.books = [];

		vm.books = BookResource.query();
	}
})();
