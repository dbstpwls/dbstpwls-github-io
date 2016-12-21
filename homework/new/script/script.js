$(function () {
	var $nav = $('header>nav'),
		$itemsC = $nav.children('ul'),
		$items = $itemsC.children('li'),
		$title = $('main>section>h1.title');

	var $menuBT = $('button.toggle-menu');

	// ==============================
	// nav 애니매이션
	// ==============================
	function navToggle() {
		$nav.toggleClass('on');
	}
	$items.click(function () {
		var $this = $(this);
		var text = $this.text();
		$title.text(text);
		$items.removeClass('on');
		$this.addClass('on');
		navToggle();
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
	var prevScroll = $(document).scrollTop();
	$(document).mousemove(function () {
		prevScroll = $(document).scrollTop();
	});
	$(document).scroll(function () {
		var $this = $(this),
			scrollTop = $this.scrollTop();
			console.log(scrollTop);
		if (prevScroll < scrollTop) {
			console.log('down');
		}else{
			console.log('up');
		}
	});
});