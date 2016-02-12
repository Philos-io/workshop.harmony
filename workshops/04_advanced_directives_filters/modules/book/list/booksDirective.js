import BookListController from './booklistcontroller';

export default function booksDirective(){
  return {
    restrict: 'EA',
    templateUrl: './modules/book/list/book.html',
    controller: BookListController,
    controllerAs: 'model'
  };
}
