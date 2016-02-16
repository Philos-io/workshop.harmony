import angular                 from '../../lib/';
import BookDetailsController   from './details/bookdetailscontroller';
import BookListController      from './list/booklistcontroller';
import BookFactory             from './services/bookservice';

angular.module('book', [])
  .controller('BookDetailsController', BookDetailsController)
  .controller('BookListController', BookListController)
  .factory('BookFactory', BookFactory);
