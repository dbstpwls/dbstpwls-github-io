$(document).ready(function(){
	var fontSize = null,
		innerSize = null
		H = 7;
		innerH = null;

	for(var n = 1; n<=6; n++){
		innerH =  H - n;
		fontSize = Math.pow(1.25, n);
		$('h'+innerH).css({'font-size' : fontSize+'rem'});
	}

	var $addDiv = $('.color-box'),
		color = $('.color-picker').text().split(',');

	for( var key in color){
		$addDiv.append('<div style="background:'+color[key]+'">'+color[key]+'</div>');
	}
});

function pow(bePow, n) {
	var beforePow = bePow;
	for(var i = n-1; i >= 1; i--){
		bePow *= bePow;
	}
	return bePow;
}

pow(2, 3);

function marginBottom(x) {
    return 1.5/x;
}

function lineHeight(x){
   return Math.ceil(x/1.5) * marginBottom(x);
}