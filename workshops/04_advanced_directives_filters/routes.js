
export default function RouteConfig($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<books></books>'
    })
    .when('/books', {
      template: '<books></books>'
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

RouteConfig.$inject = ['$routeProvider'];
