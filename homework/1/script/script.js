$(document).ready(function(){
	clock();
	fillBar();
});

function clock($selecter){
	function showTime(){
		var object = new Date(),
			year = object.getFullYear(),
			month = object.getMonth(),
			hour = object.getHours(),
			minutes = object.getMinutes(),
			second = addZero(object.getSeconds());

		/*회전 시계*/
		$('.hour').css({'transform':'rotate('+(30*hour)+'deg)'});
		$('.min').css({'transform':'rotate('+(6*	minutes+0.1*second)+'deg)'});
		$('.sec').css({'transform':'rotate('+6*second+'deg)'});

		var time = year+" : "+month+" : "+hour+" : "+minutes+" : "+second;
		$('#timer').text(time);
	}
	showTime();

	setInterval(function() {
		showTime();
	}, 500);

	function addZero(num){
		if(num<10){
			num = '0'+num;
		}
		return num;
	}
}

var sw = 0;
var confirmFill = setInterval(function(){
		if(sw == 8)
			$('.wrap-bar').fadeOut('fast');
		if(sw > 8){
			$('h1').fadeIn('fast');
			clearInterval(confirmFill);
		}
		sw++;
}, 1000);
function fillBar(){
	$('.bar').animate({width : 100+'%'}, 8000);
}