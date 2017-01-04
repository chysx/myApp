angular.module("TestComplexController",[])
  .controller("TestComplexCtrl",function ($scope,$state) {
    $scope.onBack = function () {
      $state.go("testMain");
      console.info("testMain");
    }
    $scope.isChecked = true;
    $scope.isSelected = true;
  });
