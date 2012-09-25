/**
 * @author hp
 */

function HomeCtrl($scope){
	
	$scope.detail=function($event,hashcode){
		var active=$($event.currentTarget.parentNode);
		$('#navlist li').removeClass('active');
		active.addClass('active');
		$event.preventDefault();
	}
	
}