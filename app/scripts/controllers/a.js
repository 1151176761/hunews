angular.module('hubinApp',[]).constant("a","http://www.somenote.cn:1510").directive("test",["$http","server",function($http,server){
    return {
      restrict:"ECMA",
      scope:{},
      replace:true,
      templateUrl:"views/a.html",
      link:function(scope,el,attr){
        scope.uid=attr["uid"]
        var url=attr["url"]
        $http({
          url:server+url,
          method:"get"
        }).success(function(e){
          scope.data=e
        })
      }
    }
  }]).directive("autoplay",["$http","server",function($http,server){
    return {
      restrict:"ECMA",
      scope:{},
      replace:true,
      templateUrl:"views/a.html",
      link:function(scope,el,attr){
        var url=attr["url"]
        $http({
          url:server+url,
          method:"get"
        }).success(function(e){
          scope.data=e
        })
      }
    }
  }])
