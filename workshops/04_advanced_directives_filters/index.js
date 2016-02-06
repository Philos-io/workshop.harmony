import angular, {module, bootstrap} from './lib/';
import routes                       from './routes';
import mocks                        from './mocks';

import './lib/angular-route';
import './lib/angular-mocks';
import './modules/book/';
import './modules/common/';

module('bookstore', ['common', 'book', 'ngRoute', 'ngMockE2E'])
  .config(routes)
  .run(mocks);

document.addEventListener('DOMContentLoaded',function(){
  bootstrap(document.body, ['bookstore']);
});


