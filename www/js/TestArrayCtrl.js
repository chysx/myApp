angular.module("TestArrayController",[])
  .factory("customerArray",function () {
    var myArray = {};
    myArray.createArray = function () {
      var array1 = new Array();
      var array2 = new Array(5);
      var array3 = new Array(1,"str1");
      var array4 = [2,"str2"];
      var str = "array1 : " + typeof array1+ "\n" +
        "array2 : " + array2.toString() + "\n" +
        "array3 : " + array3.toString() + "\n" +
        "array4 : " + array4;
      return str;
    };
    //模拟栈的后进先出
    myArray.stackArray = function () {
      var arrays = ['1','2',3];
      var len = arrays.push('4');//在数组的末端添加项，返回操作后的数组的长度
      alert(arrays + "\n" + " len = " + len);
      arrays[7] = '8';
      alert(arrays + "\n" + " len = " + arrays.length);
      var item = arrays.pop();//在数组的末端删除项，返回删除项
      alert(arrays + "\n" + " len = " + arrays.length);
    };
    //模拟列队的先进先出
    myArray.queueArray = function () {
      var arrays = ['1','2','3'];
      var len = arrays.push('4','5');//在数组的末端添加项，返回操作后的数组的长度
      alert(arrays + "\n" + " len = " + len);
      var item = arrays.shift();//在数组的前端删除项，返回删除项
      alert(arrays + "\n" + " len = " + arrays.length);
    };
    //在数组的前端添加项
    myArray.unShiftArray = function () {
      var arrays = ['1','2','3'];
      var len = arrays.unshift('4','5','6');
      alert(arrays + "\n" + " len = " + arrays.length);
    };
    //数组排序
    myArray.sortArray = function () {
      var arrays = ['1','2','3','4','5'];
      arrays.reverse();//反转数组内容
      alert(arrays + "\n" + " len = " + arrays.length);

      arrays = [1,5,8,15,20];
      arrays.sort();
      alert(arrays + "\n" + " len = " + arrays.length);
      var compare = function (value1,value2) {
        if(value1 > value2){
          return -1;
        }else if(value1 < value2){
          return 1;
        }else{
          return 0;
        }
      };
      arrays.sort(compare);//根据数组内容排序
      alert(arrays + "\n" + " len = " + arrays.length);
    };
    //数组连接
    myArray.concatArray = function () {
      var arrays = [1,2,3];
      var newArrays = arrays.concat(4,[5,6],'7str');//可以连接单项和数组
      alert(arrays + "\n" + " len = " + arrays.length);
      alert(newArrays + "\n" + " len = " + newArrays.length);
    };
    //数组截取
    myArray.sliceArray = function () {
      var arrays = [1,2,3,4,5,6,7];
      var newArrays1 = arrays.slice(2);//截取索引为2到末尾的所有项（包含索引为2的项）
      var newArrays2 = arrays.slice(2,5);//截取索引为2到索引为5的所有项（不包含索引为5的项）
      alert(arrays + "\n" + " len = " + arrays.length);
      alert(newArrays1 + "\n" + " len = " + newArrays1.length);
      alert(newArrays2 + "\n" + " len = " + newArrays2.length);
    };
    //最强大的数组操作
    myArray.spliceArray = function () {
      //删除操作
      var arrays = [1,2,3,4,5,6,7];
      var removeArrays = arrays.splice(2,3);//第一个参数为索引，第二个参数为删除的项数，返回值是删除的项的数组
      alert(arrays + "\n" + " len = " + arrays.length);
      alert(removeArrays + "\n" + " len = " + removeArrays.length);
      //插入操作
      arrays = [1,2,3,4,5,6,7];
      var insertArrays = arrays.splice(2,0,'8','9str');//第一个参数为索引，第二个参数为删除的项数，
      //第三个和后面的参数为插入的项，返回值是删除的项的数组，因为现在第二个参数为0，所以返回的是空数组
      alert(arrays + "\n" + " len = " + arrays.length);
      alert(insertArrays + "\n" + " len = " + insertArrays.length);
      //替换操作
      arrays = [1,2,3,4,5,6,7];
      var replaceArrays = arrays.splice(2,1,'8','9str');//第一个参数为索引，第二个参数为删除的项数，
      //第三个和后面的参数为插入的项，返回值是删除的项的数组，因为现在第二个参数为1，所以返回的是含有一项的数组
      alert(arrays + "\n" + " len = " + arrays.length);
      alert(replaceArrays + "\n" + " len = " + replaceArrays.length);
    };
    //查找索引方法
    myArray.indexOfArray = function () {
      var arrays = [1,2,3,4,5,4,3,2,1];
      var index1 = arrays.indexOf(4);
      var index2 = arrays.lastIndexOf(4);
      alert(arrays + "\n" + " indexOf(4) = " + index1 + " lastIndexOf(4) = " + index2);
    };
    //数组迭代
    myArray.iteratorArray = function () {
      var arrays = [1,2,3,4,5,6,7,8,9];
      //对数组中的每一项运行给定函数，如果该函数对每一项都返回TRUE，则返回TRUE
      var everyResult = arrays.every(function (item, index, array) {
        if(item > 2){
          return true;
        }
      });
      alert("everyResult = " + everyResult);
      //对数组的每一项运行给定函数，如果该函数对任一项返回TRUE，则返回TRUE
      var someResult = arrays.some(function (item,index,array) {
        if(item > 8){
          return true;
        }
      });
      alert("someResult = " + someResult);
      //对数组中的每一项运行给定函数，返回该函数会返回TRUE的项组成的数组
      var filterResult = arrays.filter(function (item,index,array) {
        if(item > 2 && item < 8){
          return true;
        }
      });
      alert("filterResult = " + filterResult);
      //对数组的每一项运行给定函数，返回每次函数调用的结果组成的数组
      var mapResult = arrays.map(function (item,index,array) {
        return item * 2;
      });
      alert("mapResult = " + mapResult);
      //对数组的每一项运行给定函数，该方法没有返回值
      var forEachResult = arrays.forEach(function (item,index,array) {
        //do somethings
      });
    };

    //对象序列号为json字符串
    myArray.stringifyJson = function () {
      var book = {
        title: "javascript",
        authors:["zhang","guo","peng"],
        edition:3,
        year:2016,
        toString: function () {
          return "this is book";
        }
      };
      var jsonBookStr = JSON.stringify(book);
      alert("book = " + book);
      alert("jsonBookStr = " + jsonBookStr);

      book = {
        title: "javascript",
        authors:["zhang","guo","peng"],
        edition:3,
        year:2016,
        toString: function () {
          return "this is book";
        },
        toJSON: function () {
          return "title:" + this.title
        }
      };
      jsonBookStr = JSON.stringify(book);
      alert("jsonBookStr = " + jsonBookStr);
    };
    myArray.parseJson = function () {
      var jsonBookStr = "{\"title\":\"javascript\",\"year\":2016}";
      var book = JSON.parse(jsonBookStr);
      alert("book.title = " + book.title + "\nbook.year = " + book.year);
    };
    return myArray;
  })
  .controller("TestArrayCtrl",function ($scope,$state,customerArray) {
    $scope.onBack = function () {
      $state.go("testMain");
      console.info("testMain");
    };
    $scope.create = function () {
      var str = customerArray.createArray();
      alert(str);
    };
    $scope.stack = function () {
      customerArray.stackArray();
    };
    $scope.queue = function () {
      customerArray.queueArray();
    };
    $scope.unShift = function () {
      customerArray.unShiftArray();
    };
    $scope.sort = function () {
      customerArray.sortArray();
    };
    $scope.concat = function () {
      customerArray.concatArray();
    };
    $scope.slice = function () {
      customerArray.sliceArray();
    };
    $scope.splice = function () {
      customerArray.spliceArray();
    };
    $scope.indexOf = function () {
      customerArray.indexOfArray();
    };
    $scope.iterator = function () {
      customerArray.iteratorArray();
    };
    $scope.stringify = function () {
      customerArray.stringifyJson();
    }
    $scope.parse = function () {
      customerArray.parseJson();
    }
  });
