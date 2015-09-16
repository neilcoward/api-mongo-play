(function () {
	'use strict';

	angular
		.module('app.book')
		.controller('Books', Books);

	function Books($http) {
		var vm = this;

        vm.title = 'Books';
		////////////////
		vm.books = activate();

		function activate() {
			$http({ method: 'GET', url: 'http://localhost:3000/api/books', headers: { 'X-Parse-Application-Id': 'XXXXXXXXXXXXX', 'X-Parse-REST-API-Key': 'YYYYYYYYYYYYY' } })
				.success(function (data, status) {
					vm.books = data;
				})
				.error(function (data, status) {
					alert("Error");
				});
        };
	}
})();