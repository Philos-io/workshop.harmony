import BookListController from './booklistcontroller';
import booksTemplate from './books.html';

export default function booksDirective(){
  return {
    restrict: 'EA',
    template: booksTemplate,
    controller: BookListController,
    controllerAs: 'model'
  };
}
