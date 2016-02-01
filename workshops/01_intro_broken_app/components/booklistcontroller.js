(function() {
  'use strict';

    BookListController.$inject = ['$scope', 'BookFactory'];

    function BookListController(BookFactory) {
      BookFactory.getBooks()
        .then(function(books){
          this.books = books;
        });
    }

    angular.module('bookstore', []).controller('BookListController', BookListController);
})();
