export default function BookDetailsController($routeParams, BookFactory) {
  if ($routeParams.id) {

    BookFactory.getBook($routeParams.id)
    .then((book) =>{
      angular.extend(this, book);
    });
  }
}

BookDetailsController.$inject =['$routeParams','BookFactory'];
