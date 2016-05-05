$(document).ready(function() {

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	}

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");


	heightDetect();
	$(window).resize(function(){
		heightDetect();
	})
	
});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

$(".toggle_mnu").click(function() {
  $(".sandwich").toggleClass("active");
});

$(".toggle_mnu").click(function() {
	if($(".top_mnu").is(":visible")){
		$(".top_mnu").fadeOut(600);
	}else{
		$(".top_mnu").fadeIn(600);
	}
});

$(".top_mnu ul a").click(function(){
	$(".top_mnu").fadeOut(600);
  $(".sandwich").toggleClass("active");
}).append("<span>");
