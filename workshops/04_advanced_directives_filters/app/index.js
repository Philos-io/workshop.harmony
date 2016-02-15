import angular from './lib/';
import routes  from './routes';
import mocks   from './mocks';

import './lib/angular-route';
import './lib/angular-mocks';
import './modules/book/';
import './modules/common/';

angular.module('bookstore', ['common', 'book', 'ngRoute', 'ngMockE2E'])
  .config(routes)
  .run(mocks);

document.addEventListener('DOMContentLoaded',function(){
  angular.bootstrap(document.body, ['bookstore']);
});


