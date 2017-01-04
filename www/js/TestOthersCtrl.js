angular.module("TestOthersController",[])
      .controller("TestOthersCtrl",function ($scope,$state) {
          $scope.onBack = function () {
            $state.go("testMain");
            console.info("testMain");
          }
      });
