$('document').ready(function () {
	$('.intro-leessang > article').mouseover(function () {
		$(this).find('.text-box').fadeIn();
		$(this).find('img').fadeIn();
		if($(this).index() == 1){
			$('.gill-text').addClass('hover');
			$('.gary-text').removeClass('hover');
		}else{
			$('.gary-text').addClass('hover');
			$('.gill-text').removeClass('hover');
		}
	});
	document.onkeydown = function (e) {
		if(e.keyCode == 71 && e.keyCode == 70){
			$('.grid').toggle();
			$('.intro-text').fadeOut();
		}
	}
});