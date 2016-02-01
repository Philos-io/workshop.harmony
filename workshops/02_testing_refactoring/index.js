(function() {
  'use strict';

  angular.module('bookstore', ['ngRoute', 'ngMockE2E']);

  document.addEventListener('DOMContentLoaded',function(){
    angular.bootstrap(document.body, ['bookstore']);
  });

})();

