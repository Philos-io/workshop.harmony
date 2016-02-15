import bookTemplate from './book.html';

export default function booksDirective(){
  return {
    restrict: 'EA',
    template: bookTemplate,
    scope: {
      book: '=source'
    }
  };
}
