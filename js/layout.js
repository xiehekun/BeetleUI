/**
 * @author hp
 */

angular.module('layout',[],function($routeProvider,$locationProvider){
	$routeProvider.when('/application',{templateUrl:'app/application/application.html',controller:AppCtrl});
	$routeProvider.when('/catalog',{templateUrl:'app/catalog/catalog.html',controller:CatalogCtrl});
	$routeProvider.when('/resources',{templateUrl:'app/resources/resources.html',controller:ResCtrl});
	$routeProvider.when('/fault',{templateUrl:'app/fault/fault.html',controller:FaultCtrl});
	$routeProvider.when('/system',{templateUrl:'app/system/system.html',controller:SysCtrl});
	$routeProvider.when('/home',{templateUrl:'app/home/homepage.html',controller:SysCtrl});
	$routeProvider.otherwise({redirectTo:'/home',templteUrl:'app/home/homepage.html',controller:HomeCtrl});
});

function MainCtrl($scope,$location){
	$scope.routeTo=function(uri){
		$location.path(uri);
	}
}

function AppCtrl($scope,$location){
	
}
function CatalogCtrl($scope,$location){
	
}
function ResCtrl($scope,$location){
	
}
function FaultCtrl($scope,$location){
	
}
function SysCtrl($scope,$location){
	
}
function HomeCtrl($scope,$location){
	
}

