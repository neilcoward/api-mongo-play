(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'app.data', 'app.book']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/Home', {
                templateUrl: 'app/books/books.html',
                controller: 'Book'
            })
            .when('/', {
                templateUrl: 'app/books/books.html',
                controller: 'Book'
            })
            .when('/EditBook/:bookId', {
                templateUrl: 'app/books/editBook.html',
                controller: 'EditBook'
            })
            .when('/AddBook', {
                templateUrl: 'app/books/addBook.html',
                controller: 'AddBook'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
})();
