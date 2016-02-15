export default function BookAddController($routeParams, BookFactory) {

  function addBook() {
    BookFactory.addBook(this.book);
  }

  this.addBook = addBook;
}

BookAddController.$inject=['$scope','$routeParams','BookFactory'];
