(function() {
  'use strict';

    BookListController.$inject = ['BookFactory'];

    function BookListController(BookFactory) {
      BookFactory.getBooks()
        .then(function(books){
          this.books = books;
        }.bind(this));
    }

    angular.module('bookstore').controller('BookListController', BookListController);
})();
