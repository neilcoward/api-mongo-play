(function () {
	'use strict';

	angular
		.module('app.book')
		.controller('EditBook', ['$routeParams', 'BookResource', EditBook]);

	function EditBook($routeParams, BookResource) {
		var vm = this;
		vm.error = '';

		vm.cuurentBook = BookResource.get({ book_id: $routeParams.bookID });

		vm.saveBook = function () {
			vm.currentBook.$update();
		};
		/*
		BookResource.save({
			title: 'Espedair Street',
			author: 'Iain Banks',
			genre: 'fiction',
			coverArtPath: 'http://ecx.images-amazon.com/images/I/4135ufJ2b-L._AA160_.jpg'
		}, function (data) {
			alert('success');
		});
*/
	}
})();
