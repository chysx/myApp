angular.module('TestListController', [])
    .controller('TestListCtrl', function($scope,$state) {
        $scope.onBack = function () {
          $state.go("testMain");
          console.info(testMain);
        }
    });
