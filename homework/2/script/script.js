$(document).ready(function(){
	// 페이지 그리드 시스템  삽입
	initGridSystem(10, 20);

	// grid script 활용성 보여주는 애니매이션 삽입
	startTimer();
	show();

	$('body').click(function () {
		$('.grid-wrap').toggle();
	});

});
var time = 0;

function initGridSystem(column, gutter) {
	$('body').prepend('<div class="grid-wrap"></div>');

	for(var i = 1; i<=column; i++){
		$('.grid-wrap').append('<div class="grid"></div>');
	}

	var $grid = $('.grid'),
		bodyWidth = $('body').width(),
		gridWrapHeight = $('body').height(),
		gridWidth = (bodyWidth + gutter)/column - gutter,
		gridWarpTop = $('body').css('padding-top');

	$('.grid-wrap').css({
		position : 'absolute',
		height : gridWrapHeight,
		top : gridWarpTop
	});

	$grid.css({
		width :gridWidth+'px',
		height : 100+'%',
		'margin-right' : gutter+'px',
		background : 'red',
		opacity : '0.3',
		float : 'left'
	});
	$grid.last().css({
		'margin-right' : 0
	})
}

// 애니매이션
function startTimer() {
	var timer = setInterval(function () {
		time++;
		show();
	}, 500);
}

function show() {

	if(time == 10){
		stepOne();
	}
	if(time == 11){
		stepTwo();
	}
}

function stepOne() {
	$('.grid-wrap').fadeOut(500);
	$('.be-hide').fadeOut(500);
	$('footer').fadeOut(500);
	$('body').off();
}
function stepTwo() {
	$('.down-wrap').fadeIn(500);
	$('body').css({
		width : 90 +'%'
	});
}

function sizeUpAndDown() {
	$('.arrow').stop().animate({'font-size' : 15+'rem'}, 700, function () {
		$('.arrow').stop().animate({'font-size' : 10+'rem'}, 700, sizeUpAndDown);
	});
}


