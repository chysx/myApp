angular.module("TestInputController",[])
  .controller("TestInputCtrl",function ($scope,$state) {
    $scope.onBack = function () {
      $state.go("testMain");
      console.info("testMain");
    }
  });
