(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'app.data', 'app.book']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/books/books.html',
                controller: 'Book'
            });
    }]);
})();
