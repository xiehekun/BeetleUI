/**
 * @author jeff
 */
'use strict'
var widgetModule=angular.module("widgets",[]);

widgetModule.directive("menu",function(){
	return {
		restrict:'E',
		transclude:false,
		priority:0,
		templateUrl:'menu_template.html',
		replace:true,
		scope:{
			'menudata':'='
		},
		link:function(scope,element,attr){
			var $wrap=$(element);
			$wrap.on('mouseover','#navMenu ul li',function(){
				$(this).find(".menu_pop_box").show();
			});
			$wrap.on('mouseout','#navMenu ul li',function(){
				$(this).find(".menu_pop_box").hide();
			});
			
		}
	}
})
