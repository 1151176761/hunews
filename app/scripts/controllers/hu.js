angular.module("hu",[]).directive("hu",["$http","server",function($http,server){
	return {
		restrict:"EACM",
//		scope:{data:"=abc"
//		},
		scope:{},
		template:'<ul><li ng-repeat="i in data"><a href="javascript:;">{{i.title}}</a></li></ul>',
//		templateUrl:"views/new.html",
		link:function(scope,elemt,attr){
			var url = attr["abc"]
			$http({
				url:server+url,
				method:"GET"
			}).success(function(e){
				scope.data = e
//				console.log(e)
			})
		}
	}
}]).directive("hb",["$http","server",function($http,server){
	return {
		restrict:"EACM",
		scope:{},
		template:'<a class="font_s" href="javascript:;" ng-repeat="i in data"><img ng-src="{{i.img}}"/>{{i.title}}</a>',
//		templateUrl:"views/new2.html",
		link:function(scope,elemt,attr){
			var orz = attr["ad"]
			$http({
				url:server+orz,
				method:"GET"
			}).success(function(e){
				scope.data = e
				console.log(e)
			})
		}
	}
}])
