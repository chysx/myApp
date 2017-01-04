angular.module("TestFileController",[])
  .controller("TestFileCtrl",function ($scope,$cordovaFile,$ionicPopup) {
    $scope.logtext="";
    $scope.helpinfo = {
      title : "" ,
      helpurl : "" ,
      jumpurl : ""
    };
    $scope.helpinfo.title="File";
    $scope.helpinfo.helpurl="File.html";

    var t_FileName = 'ionic.txt';
    var t_text = 'ionic中文网';
    var t_DirName ='mydir';

    $scope.logtext = $scope.logtext + cordova.file.applicationDirectory+"\n";
    $scope.logtext = $scope.logtext + cordova.file.dataDirectory+"\n";
    //获取设备剩余空间
    $scope.getFreeDiskSpace = function(){
      $cordovaFile.getFreeDiskSpace()
        .then(function (success) {
          // success in kilobytes
          $scope.logtext = $scope.logtext + "空闲空间: : " + success + "字节\n";

          $ionicPopup.alert({
            title: '提示',
            template: $scope.logtext
          });
        }, function (error) {
          // error
        });

    }
    //检测目录
    $scope.checkDir = function(){
      $cordovaFile.checkDir(cordova.file.dataDirectory, t_DirName)
        .then(function (success) {
          // success
          $scope.logtext = $scope.logtext + cordova.file.dataDirectory+t_DirName+success+" 存在\n";

          $ionicPopup.alert({
            title: '提示',
            template: $scope.logtext
          });
        }, function (error) {
          // error
          $scope.logtext = $scope.logtext + cordova.file.dataDirectory+t_DirName+error+"不存在\n";

          $ionicPopup.alert({
            title: '提示',
            template: $scope.logtext
          });
        });
    }
    $scope.createDir = function(){
      $cordovaFile.createDir(cordova.file.dataDirectory,t_DirName, false)
        .then(function (success) {
          // success
          $scope.logtext = $scope.logtext + cordova.file.dataDirectory+t_DirName+success+" 创建目录成功\n";

          $ionicPopup.alert({
            title: '提示',
            template: $scope.logtext
          });
        }, function (error) {
          // error
          $scope.logtext = $scope.logtext + cordova.file.dataDirectory+t_DirName+error+"创建目录失败\n";

          $ionicPopup.alert({
            title: '提示',
            template: $scope.logtext
          });
        });
    }
    //删除目录
    $scope.removeDir = function(){
      $cordovaFile.removeDir(cordova.file.dataDirectory, t_DirName)
        .then(function (success) {
          // success
          $scope.logtext = $scope.logtext + cordova.file.dataDirectory+t_DirName+success+" 删除成功\n";

          $ionicPopup.alert({
            title: '提示',
            template: $scope.logtext
          });
        }, function (error) {
          // error
          $scope.logtext = $scope.logtext + cordova.file.dataDirectory+t_DirName+error+"删除失败\n";

          $ionicPopup.alert({
            title: '提示',
            template: $scope.logtext
          });
        });
    }
    //检测文件
    $scope.checkFile = function(){
      $cordovaFile.checkFile(cordova.file.dataDirectory, t_FileName)
        .then(function (success) {
          // success
          $scope.logtext = $scope.logtext + success + "\n";

          $ionicPopup.alert({
            title: '提示',
            template: $scope.logtext
          });
        }, function (error) {
          // error
          $scope.logtext = $scope.logtext + error + "\n";

          $ionicPopup.alert({
            title: '提示',
            template: $scope.logtext
          });
        });
    }
    //创建一个文件
    $scope.createFile = function(){

      $cordovaFile.createFile(cordova.file.dataDirectory, t_FileName, true)
        .then(function (success) {
          // success
          $scope.logtext = $scope.logtext + cordova.file.dataDirectory+"t_FileName 创建文件OK\n";

          $ionicPopup.alert({
            title: '提示',
            template: $scope.logtext
          });
        }, function (error) {
          // error
        });
    }
    //写入文件
    $scope.writeFile = function(){
      $cordovaFile.writeFile(cordova.file.dataDirectory, t_FileName, "ionic中国", true)
        .then(function (success) {
          // success
          $scope.logtext = $scope.logtext + cordova.file.dataDirectory+"t_FileName 写入文件成功\n";

          $ionicPopup.alert({
            title: '提示',
            template: $scope.logtext
          });
        }, function (error) {
          // error
        });
    }
    //读取文件
    $scope.readFile = function(){
      $cordovaFile.readAsText(cordova.file.dataDirectory, t_FileName)
        .then(function (success) {
          // success
          $scope.logtext = $scope.logtext + cordova.file.dataDirectory+t_FileName +"内容:"+success+"读取内容成功\n";

          $ionicPopup.alert({
            title: '提示',
            template: $scope.logtext
          });
        }, function (error) {
          // error
        });
    }
    //删除文件
    $scope.removeFile = function(){
      $cordovaFile.removeFile(cordova.file.dataDirectory, t_FileName)
        .then(function (success) {
          // success
          $scope.logtext = $scope.logtext + cordova.file.dataDirectory+"t_FileName 删除成功 + success\n";

          $ionicPopup.alert({
            title: '提示',
            template: $scope.logtext
          });
        }, function (error) {
          // error
          $scope.logtext = $scope.logtext + error + "\n";

          $ionicPopup.alert({
            title: '提示',
            template: $scope.logtext
          });
        });
    }
  })
