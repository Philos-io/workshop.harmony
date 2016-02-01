(function(){
  'use strict';

    RouteConfig.$inject = ['$routeProvider'];

    function RouteConfig($routeProvider) {
        $routeProvider
            .when('/', {
              templateUrl: './src/templates/book.html',
              controller: 'BookListController',
              controllerAs :'bookList'
            })
            .when('/books/add', {
              templateUrl: './src/templates/add-book.html',
              controller: 'BookAddController',
              controllerAs: 'book'
            })
            .when('/books/:id', {
              templateUrl: './src/templates/book-details.html',
              controller: 'BookDetailsController',
              controllerAs: 'book'
            });
    }

    angular.module('bookstore').config(RouteConfig);

})();

