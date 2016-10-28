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
	// insertBaseLine($('body'), baseLine);				// base-line 삽입

	var control = 0;
	$('.complete').click(function () {
		initEvent();
		initHtml($resultHtml);
		initCss($resultCss1, $resultCss2);
		$('.result-css').css({
			'border-top' :10+'px solid #ff6a6a'
		});

		control++;
		if(control ==1){
			$('#result-html').after('<p class="title">- REM - </p>');
			$('.result-css.px').after('<p class="title">- PX - </p>');
		}
	});

	$('.result-css').click (function () {
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
	$resultCss1 = $('.result-css').eq(0);
	$resultCss2 = $('.result-css').eq(1);
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
	bodyFontSize = inputVal[0],
	baseLine = inputVal[1],
	lineHeight = baseLine/10,
	HR = inputVal[2];
	$('html').css({
		'font-size' : 10+'px'
	});


	$this.html('<h1>H1 가</h1><h2>H2 가</h2><h3>H3 가</h3><h4>H4 가</h4><h5>H5 가</h5><h6>H6 가</h6><p>1 line = '+lineHeight+'rem</p><ul>UL<li>li</li></ul>');
	$this.css({
		'font-size' : 10 +'px'
	});
	$this.find('p, ul').css({
		'font-size' : bodyFontSize+'px',
		'margin-top' : lineHeight+'rem',
		'line-height' : lineHeightNum(bodyFontSize/10)+'rem',

		//보기좋게
		background: 'blue',
		opacity : 0.7,
		color : 'white'
	});
	initH(HR);
	insertBaseLine($this, baseLine);

	$('.other').html('<p>\tfont-size :'+bodyFontSize+'px\n</p><p>\tline-height :'+lineHeightNum(bodyFontSize/10)+'rem or '+lineHeightNum(bodyFontSize/10)*10+'px</p>');
}


function initCss($this, $this2) {
	var resultCssRem = '<p>html {\n</p><p class="indent">\tfont-size :'+10+'px;\n</p><p>}\n</p><p>body, p, ul, table {\n</p><p class="indent">\tfont-size :'+bodyFontSize+'px;\n</p><p class="indent">\tline-height :'+lineHeight+'rem;\n</p><p>}</p>';
	var resultCssPx = '<p>html {\n</p><p class="indent">\tfont-size :'+10+'px;\n</p><p>}\n</p><p>body, p, ul, table {\n</p><p class="indent">\tfont-size :'+bodyFontSize+'px;\n</p><p class="indent">\tline-height :'+lineHeight*10+'px;\n</p><p>}</p>';

	for(var key in outPutHSize){
		outPutHSize[key];
		outPutHLineHeight[key];
		resultCssRem +='\n<p>h'+(6-key)+' {\n</p><p class="indent">\tfont-size:'+outPutHSize[key]+'rem;\n</p><p class="indent">\tline-height :'+outPutHLineHeight[key]+'rem;</p><p>\n}</p>'

		resultCssPx +='\n<p>h'+(6-key)+' {\n</p><p class="indent">\tfont-size:'+outPutHSize[key]*10+'px;\n</p><p class="indent">\tline-height :'+outPutHLineHeight[key]*10+'px;</p><p>\n}</p>'
	}

	$this.html(resultCssRem);
	$this2.html(resultCssPx);

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
		var HfontSizeRem = Math.pow(ratio, i)*1.6,
			HLineHeight = lineHeightNum(HfontSizeRem);
		$('h'+Hcontrol).css({
			'font-size' : HfontSizeRem +'rem',
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

	return Math.ceil(fontRem*rootFontSize/baseLine)*lineHeight;
}