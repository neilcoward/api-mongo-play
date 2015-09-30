(function () {
	'use strict';

	angular
		.module('app.book')
		.controller('EditBook', ['$routeParams', 'BookResource', '$location', EditBook]);

	function EditBook($routeParams, BookResource, $location) {
		var vm = this;
		vm.error = '';
		vm.bookId = $routeParams.bookId;
		vm.currentBook = BookResource.get({ bookId: vm.bookId });
		vm.saveBook = saveBook;
		vm.deleteBook = deleteBook;

		function saveBook() {
			BookResource.update({ bookId: vm.bookId }, vm.currentBook);
			 $location.path('#/');
		}

		function deleteBook() {
			BookResource.delete({ bookId: vm.bookId }, vm.currentBook);
			$location.path('#/');
		}
	}
})();
