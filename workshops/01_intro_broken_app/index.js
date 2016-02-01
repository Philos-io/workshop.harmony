(function() {
  'use strict';

  angular.module('bookstore', ['ngMockE2E']);

  document.addEventListener('DOMContentLoaded',function(){
    angular.bootstrap(document.body, ['bookstore']);
  });

})();

