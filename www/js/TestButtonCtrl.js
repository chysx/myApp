angular.module("TestButtonController",[])
.controller("TestButtonCtrl",function ($scope,$state) {
    $scope.onBack = function () {
      $state.go("testMain");
      console.info("testMain");
      var dir = cordova.file.applicationDirectory;
      console.info("dir = " + dir);
    }
});
