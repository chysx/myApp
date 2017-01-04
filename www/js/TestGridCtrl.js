angular.module("TestGridController",[])
  .controller("TestGridCtrl",function ($scope, $state) {
    $scope.onBack = function () {
      $state.go("testMain");
      console.info("testMain");
    }
  });
