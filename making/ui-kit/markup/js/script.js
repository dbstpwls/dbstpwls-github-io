(function ($) {
	const doc = document;
	var span = doc.getElementsByTagName('span');
	var twitter = span[0].className;
	ec(span, (key, value) => {
			// var th = span[key]
			// th.onclick = function (e) {
			// console.log(th.style);
	});
	// var div = doc.getElementsByTagName('div');
	// function findRadio(parentClassName) {
	// 	var parents = document.getElementsByClassName(parentClassName);
	// 	console.log(parents);
	// 	ec(div, (key, value) => {
	// 		if(div[key].attributes['aria-role'])
	// 			div[key].onclick = function (e) {
	// 				console.log('asd');
	// 			}
	// 	});
	// }
	// findRadio('radio-group');

	// * radio 버튼
	$radioGroup = $('.input-wrap ul>li');
	$radio = $radioGroup.children();
	$radio.click(function () {
		var $this = $(this);
		if($this.hasClass('on')){
			$this.removeClass('on');
			$this.attr('aria-checked', false);
		}else{
			$this.toggleClass('on');
			$this.attr('aria-checked', true);
		}
	});

})(window.jQuery);

function ec(map, callback){
	var leng = map.length;
	for(var i = 0; i<leng; i++){
		var key = i
		var value = map[i]
		callback(key, value);
	}
}

// 목표
// 쌩 자바스크립트 연습,
// 누르면 자동으로 스타일이 나오게 하는 script 개발