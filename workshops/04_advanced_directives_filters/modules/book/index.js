import angular, {module}       from '../../lib/';
import BookDetailsController   from './details/bookdetailscontroller';
import booksDirective          from './list/booksDirective';
import BookFactory             from './services/bookservice';

module('book', [])
  .directive('books', booksDirective)
  .controller('BookDetailsController', BookDetailsController)
  .factory('BookFactory', BookFactory);
