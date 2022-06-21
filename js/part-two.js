$(document).ready(function() {

	setTimeout(function(){
		$("#fade1").animate({
		opacity: 1,
		left: "+=25px"
		}, 2500);
	},0);
	
	setTimeout(function(){
		$("#fade2").animate({
		opacity: 1,
		left: "+=25px"
		}, 2500);
	},1000);
	
	
	
	
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