angular.module("MainController",[])
  .controller("TestMainCtrl",function ($scope,$state) {
    $scope.onButtonClick = function () {
      $state.go("testButton");
      console.info("testButton");
    }
    $scope.onListClick = function () {
      $state.go("testList");
      console.info("testList");
    }
    $scope.onInputClick = function () {
      $state.go("testInput");
      console.info(testInput);
    }
    $scope.onComplexClick = function () {
      $state.go("testComplex");
      console.info("testComplex");
    }
    $scope.onGridClick = function () {
      $state.go("testGrid");
      console.info("testGrid");
    }
    $scope.onFileClick = function () {
      $state.go("testFile");
      console.info("testFile");
    }
    $scope.onOthers = function () {
      $state.go("testOthers");
      console.info("testOthers");
    }
    $scope.onArray = function () {
      $state.go("testArray");
      console.info("testArray");
    }
  });
