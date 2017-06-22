// 기본 scripting 시간 => 128ms (내용이 빈 script파일 불러오는 시간)
'use strict';

function dunamuMobilePopup(opt) {
	// url filter
	if(opt.filter !== undefined){
		var pageUrl = location.href;
		for (var i=0; i<opt.filter.reg.length; i++){
			var filterRegExp = new RegExp(opt.filter.reg[i]);
			var filterResult = pageUrl.match(filterRegExp);
			if(!filterResult && opt.filter.display)
				return;
			else if(filterResult && !opt.filter.display)
				return;
		}
	}

	// cookie filter
		function getCookie(name) {
			var cookieList = document.cookie;
			cookieList = decodeURIComponent(cookieList);
			cookieList = cookieList.split(';');
			for(var i=0; i<cookieList.length; i++){
				var cookie = cookieList[i];
				while(cookie.charAt(0) == ' '){
					cookie = cookie.substring(1);
				}
				if(cookie.indexOf(name) != -1){
					return cookie.substring((name.length+1), cookie.length);
				}
			}
		}
		function setCookie(name, value, exHours) {
			var d = new Date();
			d.setHours(d.getHours()+exHours);
			d.toUTCString();
			document.cookie = name+'='+value+';expires='+d+';path=/';
		}
		function removeCookie(name) {
			setCookie(name, false, -24);
		}
	if(getCookie('closeDay') == 'true'){
		return
	}
	var userEnv = window.navigator.userAgent.toLowerCase();

	// variables filter
	if(opt === undefined)
		opt = {};
	if(opt.closeHours === undefined)
		opt.closeHours = {};
	if(opt.eventBtNaming === undefined)
		opt.eventBtNaming = {};
	if(opt.url === undefined)
		console.error("Please Set option.url!!");
	if(opt.link === undefined)
		console.error("Please Set option.link!!");

	// default Setting
	var initial = {
		device : 'all',
		ani : 'bottom-top',
		time : 400,
		closeHours : {
			long : 168,
			default : 12
		},
		eventBtNaming : {
			link : 'dnm-link',
			close : 'dnm-close',
			periodClose : 'dnm-close-period'
		}
	};
	function setVariables() {
		// 값이 없을경우 initial에 세팅된 값 적용
		if(opt.device === undefined)
			opt.device = initial.device;
		if(opt.floatControl === undefined)
			opt.floatControl = {};
		opt.ani = (opt.ani===undefined)? initial.ani : opt.ani;
		opt.time = (opt.time===undefined)? initial.time : opt.time;
		opt.closeHours.long = (opt.closeHours.long===undefined)? initial.closeHours.long : opt.closeHours.long;
		opt.closeHours.default = (opt.closeHours.default===undefined)? initial.closeHours.default : opt.closeHours.default;
		opt.eventBtNaming.link = (opt.eventBtNaming.link===undefined)? initial.eventBtNaming.link : opt.eventBtNaming.link;
		opt.eventBtNaming.close = (opt.eventBtNaming.close===undefined)? initial.eventBtNaming.close : opt.eventBtNaming.close;
		opt.eventBtNaming.periodClose = (opt.eventBtNaming.periodClose===undefined)? initial.eventBtNaming.periodClose : opt.eventBtNaming.periodClose;
		opt.floatControl.scrollAttr = (opt.floatControl.scrollAttr===undefined)? true : false;
		opt.floatControl.style = (opt.floatControl.style===undefined)? true : false;
	}
	setVariables();

	// opt.device에 따른 분기처리
	if(userEnv.indexOf('mobile') != -1){
		if(opt.device == 'pc')
			return
	}else{
		if(opt.device == 'mobile')
			return
	}
	// opt.link 에 따른 분기처리
	if(opt.link.pc !== undefined && userEnv.indexOf('mobile') == -1)
		opt.href = opt.link.pc;
	else if(opt.link.mobile !== undefined && userEnv.indexOf('mobile') != -1)
		opt.href = opt.link.mobile;
	else
		opt.href = opt.link;

	function insertIframe() {
		// make iframe
		var body = document.body;
		var iframe = document.createElement("iframe");
		iframe.src = opt.url;
		iframe.setAttribute('id', 'dnm-popup-page');
		if(opt.floatControl.scrollAttr)
			iframe.setAttribute('scrolling', 'no');
		// iframe style
		if(opt.floatControl.style){
			iframe.style.border = '0';
			iframe.style.width = '100%';
			iframe.style.position = 'fixed';
			iframe.style.overflow = 'hidden';
			iframe.style.opacity = '0';
		}
		// iframe style
		body.appendChild(iframe);
		var popupDom = document.getElementById('dnm-popup-page');
		var popup = {
			doc : null,
			height : null
		};

		iframe.onload = function () {
			popup.doc = popupDom.contentWindow.document;
			setEvent();
			getPopupHeight();
			if(opt.floatControl.style)
				animation();
			else
				iframe.setAttribute('class', 'screen-on');
			resizePopup();
		};
		function animation() {
			if(opt.ani == 'bottom-top')
				iframe.style.bottom = '-'+popup.height+'px';
			if(opt.ani == 'left-right')
				iframe.style.left = '-100%';
			if(opt.ani == 'right-left')
				iframe.style.left = '100%';
			if(opt.ani != 'fadeIn')
				iframe.style.opacity = '1';

			setTimeout(function () {
				iframe.style.transition = 'all 0.'+opt.time+'s';
				iframe.style.opacity = '1';
				iframe.style.left = '0';
				iframe.style.bottom = '0';
			}, 100);
		}
		function setEvent() {
			eventBt.close = popup.doc.getElementById(opt.eventBtNaming.close);
			eventBt.periodClose = popup.doc.getElementById(opt.eventBtNaming.periodClose);
			eventBt.link = popup.doc.getElementById(opt.eventBtNaming.link);

			if(eventBt.link !== null){
				eventBt.link.setAttribute('href', opt.href);
				eventBt.link.setAttribute('target', '_blank');
			}
			if(eventBt.close !== null){
				eventBt.close.onclick = function () {
					iframe.style.display = 'none';
					setCookie('closeDay', 'true', opt.closeHours.default);
				};
			}
			if(eventBt.periodClose !== null){
				eventBt.periodClose.onclick = function () {
					iframe.style.display = 'none';
					setCookie('closeDay', 'true', opt.closeHours.long);
				};
			}
		}
		function getPopupHeight() {
			popup.height = popup.doc.body.offsetHeight;
		}
		function resizePopup() {
			popupDom.style.height = popup.height+'px';
		}

		window.onresize = function () {
			getPopupHeight();
			resizePopup();
		};
	}

	// insert iframe in current page
	var eventBt = {};
	window.onload = function () {
		insertIframe();
	};
}

dunamuMobilePopup({
	url : 'http://publishing.dunamu.io/others/dnm_event/pub-63-2/html/index.html',
	filter : {
		reg : ['KOREA|t1'],
		display : true
	},
	link : {
		pc : 'http://naver.com',
		mobile : 'http://stock.kakao.com/m'
	}
});