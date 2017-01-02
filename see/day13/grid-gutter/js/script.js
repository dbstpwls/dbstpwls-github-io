$(document).ready(function(){
	$(document).keypress(function (e) {
		if( e.shiftKey == true && e.keyCode == 71){
			$('body').toggleClass('overlay');
		}
	});
});