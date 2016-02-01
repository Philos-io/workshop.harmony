(function() {
  'use strict';

  angular.module('bookstore', ['common', 'book', 'ngRoute', 'ngMockE2E']);

  document.addEventListener('DOMContentLoaded',function(){
    angular.bootstrap(document.body, ['bookstore']);
  });

})();

