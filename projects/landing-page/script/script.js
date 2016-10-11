$(document).ready(function(){
	init();
});

function init() {
	var li_leng = $('.slider li').length,
		li_img = [1, 3, 5, 7, 9];

	for(var n=0; n<li_leng; n++){
		$('.menu').append('<li></li>');
	}
	$('.slider').css({width : 100*li_leng+'%'});
	$('.slider>li').css({width : 100/li_leng+'%'});
}

function initEvent(){
	function move_right(){

	}
}