import angular                 from '../../lib/';
import BookDetailsController   from './details/bookdetailscontroller';
import booksDirective          from './list/booksDirective';
import BookFactory             from './services/bookservice';
import bookDirective           from './bookComponent/bookDirective';

angular.module('book', [])
  .directive('books', booksDirective)
  .directive('book', bookDirective)
  .factory('BookFactory', BookFactory);
