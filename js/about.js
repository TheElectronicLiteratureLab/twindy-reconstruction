$(document).ready(function() {

	$(".thanksgiving").click(function() {
		var target = $(this).data("target");
		
		$(".thanksgiving-modal").fadeOut(1000);
		if ($("#"+target).css("display") == "none") {
			$("#"+target).fadeIn(1000);
		}
	});//end of thanksgiving popup

	$(".thanksgiving-close").click(function() {
		$(this).parent(".thanksgiving-modal").fadeOut(1000);
	});//end of thanksgiving-close
	
	
	
	//new links based on parent page from url
	var url = window.location.href,
		stringStart = url.search("#"),
		stringEnd = url.indexOf("?");

	if (stringStart > -1 && stringEnd > -1) {
		anchor = url.slice(stringStart,stringEnd);
		window.location.hash = anchor;
	}
	
	//reload on orientation change
	window.addEventListener("orientationchange", function() {
		location.reload();
	});
	
	
});//end of document ready