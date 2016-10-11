$(document).ready(function(){
	var $input = $('#login>ul>li>input'),
		$do_login = $('#do_login');

	$do_login.click(function(){
		$(this).css({display : 'none'});
		$('#login').fadeIn('slow');
	});

	$input.focusin(function(){
		$(this).next().addClass('select');
	});

});