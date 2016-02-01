(function(){
  'use strict';

    RouteConfig.$inject = ['$routeProvider'];

    function RouteConfig($routeProvider) {
        $routeProvider
            .when('/', {
              templateUrl: './templates/book.html',
              controller: 'BookListController',
              controllerAs :'bookList'
            })
            .when('/books', {
              templateUrl: './templates/book.html',
              controller: 'BookListController',
              controllerAs :'bookList'
            })
            .when('/books/add', {
              templateUrl: './templates/add-book.html',
              controller: 'BookAddController',
              controllerAs: 'book'
            })
            .when('/books/:id', {
              templateUrl: './templates/book-details.html',
              controller: 'BookDetailsController',
              controllerAs: 'book'
            });
    }

    angular.module('bookstore').config(RouteConfig);

})();

