$(function () {
	var $nav = $('header>nav'),
		$seeAll = $('header>nav>.scroll>button.see-all'),
		$itemsC = $('header>nav>.scroll>ul'),
		$li = $itemsC.children('li'),
		$items = $li.children('button'),
		$main = $('body>main'),
		$section = $main.children('section'),
		$section_day = $main.children('section[class *= day]'),
		$section_work = $main.children('section[class *= work]');

	var $menuBT = $('button.toggle-menu');

	// ==============================
	// list 개수 찾기
	// ==============================
	var $titleWrap = $('header>nav>.scroll>.title-wrap');
	// ==============================
	// list 개수 찾기 END
	// ==============================

	// ==============================
	// nav 애니매이션
	// ==============================
	function navToggle() {
		$nav.toggleClass('on');
	}
	function sectionToggle(className) {
		if(className == "all-day"){
			$section_work.fadeOut('fast');
			$section_day.fadeIn('fast');
		}else if(className == "all-work"){
			$section_day.fadeOut('fast');
			$section_work.fadeIn('fast');
		}else{
			$section.fadeOut('fast');
			$main.children('.'+className).fadeIn('fast');
		}
	}
	function navRemove() {
		$nav.removeClass('on');
	}
	// button click 시
	$items.click(function () {
		var $this = $(this);
		var className = $this.attr('class');
		$items.removeClass('on');
		$this.addClass('on');
		navToggle();
		sectionToggle(className);
	});
	// see-all click
	$seeAll.click(function () {
		$section.fadeIn('fast');
		navRemove();
	});
	// menu button click
	$menuBT.click(function () {
		navToggle();
	});
	// 배경 clikc할때
	$('main').click(function () {
		navRemove();
	});
	// ==============================
	// nav 애니매이션 END
	// ==============================

	// ==============================
	// scroll animtaion
	// ==============================
	// ==============================
	// scroll animation END
	// ==============================
});