/**
 * @author jeff
 */

var layout=angular.module('layout',[]);
var hashrouter={};

layout.config(function($routeProvider){
	$routeProvider.when('/:hashcode',{
		template:'<div ng-include="templateUrl">Loading...</div>',
		controller:RouteCtrl
	});
	$routeProvider.otherwise({redirectTo:'/homepage',templateUrl:'app/home/homepage.html',controller:HomeCtrl});
});

function MainCtrl($scope,$http){
	$http.get('config/menu.json').success(function(data){
		var temp=[];
		for(i=0,length=data.length;i<length;i++){
			var menu=data.shift();
			hashrouter[menu.hashcode]=menu.url;
			temp.push(menu);
		}
  		$scope.menus =temp;
  	});
}

function RouteCtrl($scope,$routeParams){
	var url=hashrouter[$routeParams.hashcode];
    if(url==undefined){
        setTimeout(function(){
            $scope.$apply(function(){
                $scope.templateUrl=hashrouter[$routeParams.hashcode];
            });
        },200);
    }else{
        $scope.templateUrl=url;
    }
}

