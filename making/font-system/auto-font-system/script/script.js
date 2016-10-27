var rootFontSize = null,
	bodyFontSize = null,
	baseLine = null,
	lineHeight = null;

var outPutHSize = null, outPutHLineHeight = null, inputVal = [], otherInputVal = [];

var $resultHtml = null,
	$resultCss = null;


$(document).ready(function () {
	// 초기화
	init()

	initH(1.25);								// 비율에 맞춘 h태그 삽입
	insert('p', 16);							// 다른태그 삽입
	// insertBaseLine($('body'), baseLine);				// base-line 삽입

	$('.complete').click(function () {
		initEvent();
		initHtml($resultHtml);
		initCss($resultCss);
	});

	$resultCss.click (function () {
		copyHelp($(this));
	});
	$('.other').click (function () {
		copyHelp($	(this));
	});
});

function init() {
	rootFontSize = parseInt($('html').css('font-size'));
	bodyFontSize = 16/rootFontSize;
	baseLine = 24;
	lineHeight = baseLine/rootFontSize;

	outPutHSize = [];
	outPutHLineHeight = [];

	$resultHtml = $('#result-html'),
	$resultCss = $('#result-css');
}

function initEvent() {
	var index = -1,
		index2 = -1;
	$('.default input').each(function () {
		index++;
		inputVal[index] = $(this).val();
	});
	$('.other input').each(function () {
		index2++;
		otherInputVal[index2] = $(this).val();
	});
}

function copyHelp($this) {
	var copyText = $this.text();
	window.prompt('복사 도우미', copyText);
}

function initHtml($this) {
	rootFontSize = inputVal[0],
	bodyFontSize = 16/rootFontSize,
	baseLine = inputVal[1],
	lineHeight = baseLine/rootFontSize,
	HR = inputVal[2];
	$('html').css({
		'font-size' : rootFontSize+'px'
	});


	$this.html('<h1>H1</h1><h2>H2</h2><h3>H3</h3><h4>H4</h4><h5>H5</h5><h6>H6</h6><p>1 line = '+lineHeight+'rem</p>');
	$this.css({
		'font-size' : rootFontSize +'px'
	});
	initH(HR);
	insertBaseLine($this, baseLine);

	$('.other').html('<p>\tfont-size :'+bodyFontSize+'rem\n</p><p>\tline-height :'+lineHeight+'rem</p>');
}


function initCss($this) {
	var resultCss = '<p>html {\n</p><p class="indent">\tfont-size :'+rootFontSize+'px;\n</p><p>}\n</p><p>body {\n</p><p class="indent">\tfont-size :'+bodyFontSize+'rem;\n</p><p class="indent">\tline-height :'+lineHeight+'rem;\n</p><p>}</p>';
	for(var key in outPutHSize){
		outPutHSize[key];
		outPutHLineHeight[key];
		resultCss +='\n<p>h'+(6-key)+' {\n</p><p class="indent">\tfont-size:'+outPutHSize[key]+'rem;\n</p><p class="indent">\tline-height :'+outPutHLineHeight[key]+'rem;</p><p>\n}</p>'
	}

	$this.html(resultCss);

}


//Default Function
function insertBaseLine($this, baseLine) {
	var height =  parseInt($this.css('height')),
		baseLineNum = height/baseLine;
	$this.append('<div class="base-line-wrap"></div>');

	for(var i = 0; i<=baseLineNum; i++)
		$('.base-line-wrap').prepend('<div></div>');

	$('.base-line-wrap').css({
		position : 'absolute',
		width : 100+'%',
		top: 0+'px'
	});
	$('.base-line-wrap>div').css({
		height : baseLine-1,
		'border-bottom' : '1px solid black'
	});
	$this.css({
		position : 'relative'
	});
}

function initH(ratio) {
	var Hcontrol = 7;
	for(var i = 1; i < 7; i++){
		Hcontrol--;
		var HfontSizeRem = Math.pow(ratio, i)*bodyFontSize,
			HLineHeight = lineHeightNum(HfontSizeRem);
		$('h'+Hcontrol).css({
			'font-size' : HfontSizeRem +'em',
			'margin-top' : lineHeight+'rem',
			'line-height' : HLineHeight+'rem',
			'background' : 'blue',
			'opacity' : 0.7
		});
		outPutHSize[i-1] = HfontSizeRem;
		outPutHLineHeight[i-1] = HLineHeight;
	}
}

function insert(name, fontSize) {
	var fontSizeRem = fontSize/rootFontSize;
	$(name).css({
		'font-size' : fontSizeRem + 'rem',
		lineHeight : lineHeightNum(fontSizeRem)+'rem'
	});
}

function lineHeightNum(fontRem) {
	return Math.ceil(fontRem*rootFontSize/baseLine)*lineHeight;				//부동 소수점 연산 오류가 발생
}