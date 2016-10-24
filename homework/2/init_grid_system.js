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