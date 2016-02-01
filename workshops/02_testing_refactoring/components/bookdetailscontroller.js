(function() {
  'use strict';

  BookDetailsController.$inject =['$routeParams','BookFactory'];

  function BookDetailsController($routeParams, BookFactory) {

    if ($routeParams.id) {

      BookFactory.getBook($routeParams.id)
        .then(function(book){
          angular.extend(this, book);
        });

    }
  }

  angular.module('bookstore').controller('BookDetailsController',BookDetailsController);

})();
