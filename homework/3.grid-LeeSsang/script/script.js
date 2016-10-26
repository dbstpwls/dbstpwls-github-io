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
	window.onkeydown = function (e) {
		var keyCode = e.keyCode;
		if(keyCode == 71){
			$('.grid').toggle();
			$('.intro-text').fadeOut();
		}
	}

});