angular.module('app')
  .controller("MainController", function() {
    var vm = this;
    vm.title = 'AngularJS Tut Example';
    vm.searchInput = '';
  });