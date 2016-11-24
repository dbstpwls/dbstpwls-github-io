$(document).ready(function(){
	var $title = $('h1');
	var top = new Array;
	var count = -1;

	$title.each(function (index) {
		top[index] = $(this).position().top;
		var text = $(this).text();
		$('.modal>ul').append('<li>'+text+'</li>');
	});

	$('.modal li').click(function () {
		count = $(this).index();
		$(document).scrollTop(top[count]);
		modalLi(count);
	});
});