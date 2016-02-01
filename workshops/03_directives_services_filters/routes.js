(function(){
  'use strict';

    RouteConfig.$inject = ['$routeProvider'];

    function RouteConfig($routeProvider) {
        $routeProvider
            .when('/', {
              templateUrl: './modules/book/list/book.html',
              controller: 'BookListController',
              controllerAs :'model'
            })
            .when('/books', {
              templateUrl: '/modules/books/list/book.html',
              controller: 'BookListController',
              controllerAs :'bookList'
            })
            .when('/books/add', {
              templateUrl: './modules/book/add/add-book.html',
              controller: 'BookAddController',
              controllerAs: 'book'
            })
            .when('/books/:id', {
              templateUrl: './modules/book/details/book-details.html',
              controller: 'BookDetailsController',
              controllerAs: 'book'
            });
    }

    angular.module('bookstore').config(RouteConfig);

})();

