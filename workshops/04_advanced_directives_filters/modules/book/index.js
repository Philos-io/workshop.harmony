import angular, {module}       from '../../lib/';
import BookListController      from './list/booklistcontroller';
import BookDetailsController   from './details/bookdetailscontroller';
import BookFactory             from './services/bookservice';

module('book', [])
  .controller('BookListController', BookListController)
  .controller('BookDetailsController', BookDetailsController)
  .factory('BookFactory', BookFactory);
