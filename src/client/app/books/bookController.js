(function () {
	'use strict';

	angular
		.module('app.book')
		.controller('Book', ['bookList', 'BookResource', Book])
		.filter('highlight', function ($sce) {
			return function (text, phrase) {
				if (phrase) {
					text = text.replace(new RegExp('(' + phrase + ')', 'gi'),
						'<mark>$1</mark>');
				}
				return $sce.trustAsHtml(text);
			};
		});

	function Book(bookList, BookResource) {
		var vm = this;
		vm.error = '';
        vm.title = 'Books';
		vm.books = [];
		vm.query = '';
		vm.deleteBook = deleteBook;

		vm.books = bookList;

		vm.search = search;

		function search(book) {
			var query = vm.query.toLowerCase();
			if ((book.title.toLowerCase().indexOf(query) !== -1)
				|| (book.author.toLowerCase().indexOf(query) !== -1)
				|| (book.genre.toLowerCase().indexOf(query) !== -1)) {
				return true;
			}
			return false;
		};

		function deleteBook(id) {
			vm.books.forEach(function (book, index) {
				if (id === book._id) {
					book.$delete({ bookId: id }, function (success) {
						vm.books.splice(index, 1);
					});
				}
			});
		}
	}
})();
