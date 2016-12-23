$(function () {
	var $nav = $('header>nav'),
		$itemsC = $('header>nav>.scroll>ul'),
		$li = $itemsC.children('li')
		$items = $li.children('button'),
		$section = $('main>section');

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
	var $main = $('body>main');
	function navToggle() {
		$nav.toggleClass('on');
	}
	function sectionToggle(className) {
		if(className == "All"){
			$section.fadeIn('fast');
		}else {
			$section.fadeOut('fast');
			$main.children('.'+className).fadeIn('fast');
		}
	}
	$items.click(function () {
		var $this = $(this);
		var text = $this.text().trim();
		$items.removeClass('on');
		$this.addClass('on');
		navToggle();
		sectionToggle(text);
	});
	$menuBT.click(function () {
		navToggle();
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