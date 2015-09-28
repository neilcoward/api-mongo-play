(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'ngResource', 'app.data', 'app.book']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/Home', {
                templateUrl: 'app/books/books.html',
                controller: 'Book',
                controllerAs: 'vm',
                resolve: {
                    bookList: function (BookResource) {
                        return BookResource.query().$promise.then(function (data) {
                            return data;
                        });
                    }
                }
            })
            .when('/', {
                templateUrl: 'app/books/books.html',
                controller: 'Book',
                controllerAs: 'vm',
                resolve: {
                    bookList: function (BookResource) {
                        return BookResource.query().$promise.then(function (data) {
                            return data;
                        });
                    }
                }
            })
            .when('/EditBook/:bookId', {
                templateUrl: 'app/books/editBook.html',
                controller: 'EditBook',
                controllerAs: 'vm'
            })
            .when('/AddBook', {
                templateUrl: 'app/books/addBook.html',
                controller: 'AddBook',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
})();
