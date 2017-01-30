'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])



.controller('View1Ctrl', function($scope, $location, $interval) {
  $scope.name2 = "NewName";
  $scope.myUrl = $location.absUrl();
  $scope.theTime = new Date().toLocaleTimeString();
  $interval(function() {
      $scope.theTime = new Date().toLocaleTimeString();
  }, 1000);

  $scope.testFunction = function() {
    return "Here is a function recalling name: " + $scope.name2;
  };
});