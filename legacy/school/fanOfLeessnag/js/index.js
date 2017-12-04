$(document).ready(function(){
	for(var i=1; i<=8 ; i++){
				$(".album").append("<img src=img/"+i+".jpg alt= />");
				$(".album").append("<p>리쌍 "+i+"집</p>");
	}
	$("nav li , .wrap2").on("click",function(){
		$(".wrap2,nav,footer").addClass("on");
		$(".bt").fadeIn(400);
	});
	$(".bt").click(function(){
		$(".bt").fadeOut(400);
		$("nav,.wrap2,footer").removeClass("on");
	});
	$(".seevideo").mouseenter(function(){
		$("nav,.wrap2,footer").addClass("off");
	});
	$(".seevideo").mouseleave(function(){
		$("nav,.wrap2,footer").removeClass("off");
	});
	$("nav li").click(function(){
		$("section").fadeOut(0);
		var li = $(this).index();
		$("section").eq(li).fadeIn(700);
	});

	
	$(".album > img").click(function(){
		var img = $(this).index();
		$(".album").fadeOut(400,function(){
			$(".a"+img).fadeIn(500);
		});
	});

	$(".back img").click(function(){
		$(".a1,.a3,.a5,.a7,.a9,.a11,.a13,.a15").fadeOut(0,function(){
			$(".album").fadeIn(500);
		});
	});
	$(".drop img").draggable({axis:"x"});

	var s=0;
	$(".next").click(function(){
		s++;
		if(s==4){s=0;}
		$(".hswrap").animate({"margin-left":(s*-1300)+"px"},500);
		$(".cwrap > div").css({"background":"none"});
		$(".cwrap > div:nth-child("+(s+1)+")").css({"background":"white"});
	});
	$(".prev").click(function(){
		s--;
		if(s==-1){s=3;}
		$(".hswrap").animate({"margin-left":(s*-1300)+"px"},500);
		$(".cwrap > div").css({"background":"none"});
		$(".cwrap > div:nth-child("+(s+1)+")").css({"background":"white"});
	});
	$(".c").click(function(){
		s = $(this).index();
		$(".cwrap > div").css({"background":"none"});
		$(this).css({"background":"white"});
		$(".hswrap").animate({"margin-left":(s*-1300)+"px"},500);
	});
	$(".box").mouseenter(function(){
		$(".c,.prev,.next").stop().fadeIn(300);
	});
	$(".box").mouseleave(function(){
		$(".c,.prev,.next").stop().fadeOut(300);
	});
});
