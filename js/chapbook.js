$(document).ready(function() {
	var previousScroll = 0,
		animateYes = 0
		swipe = -1;

	//chapbook fade out and in
	$(window).scroll(function() {
		var hT = $('#chapter-title').offset().top,
		hH = $('#chapter-title').outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();

		if (wS > (hT+hH-wH) && $("#chapter-over").css("opacity") == 1 && wS > previousScroll && animateYes == 0 && swipe < 0) {
			animateYes = 1;
			$("#chapter-over").animate({opacity: 0}, 1000);
			
			setTimeout(function(){
				animateYes = 0;
			},1000);
		}
		else if (wS < 200 && $("#chapter-over").css("opacity") == 0 && wS < previousScroll && animateYes == 0 && swipe < 0) {
			animateYes = 1;
			$("#chapter-over").animate({opacity: 1}, 1000);
			
			setTimeout(function(){
				animateYes = 0;
			},1000);
		}
		
		//track direction
		previousScroll = wS;
	});//end of each function for fade animations
	
	//fix links to track parent page
	function getParameterByName(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, '\\$&');
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}

	//new links based on parent page from url
	var parentPage = getParameterByName('parentpage'),
		parentAnchor = getParameterByName('parentanchor'),
		returnLink = parentPage,
		linkPass = "?parentpage="+parentPage;

	if (parentAnchor) {
		returnLink = returnLink + "#" + parentAnchor;
		linkPass = linkPass + "&parentanchor=" + parentAnchor;
	}

	$("#parent-link").attr("href",returnLink);
	
	if ($("#previous-chap").length) {
		var temp = $("#previous-chap").attr("href");
		$("#previous-chap").attr("href",temp+linkPass);
	}
	
	if ($("#next-chap").length) {
		var temp = $("#next-chap").attr("href");
		$("#next-chap").attr("href",temp+linkPass);
	}

	
	
	//swiping
	$("#chapter").onSwipe(function(results){
		swipe = 1;
		
		if ($("#chapter-over").css("opacity") == 1 && animateYes == 0 && results.right) {
			animateYes = 1;
			
			
			$("#chapter-over").animate({opacity: 0}, 1000);
			
			setTimeout(function(){
				animateYes = 0;
			},1000);
		}
		else if ($("#chapter-over").css("opacity") == 0 && animateYes == 0 && results.left) {
			animateYes = 1;
			
			$("#chapter-over").animate({opacity: 1}, 1000);
			
			setTimeout(function(){
				animateYes = 0;
			},1000);
		}
	});
	
	//reload on orientation change
	window.addEventListener("orientationchange", function() {
		location.reload();
	});

	
});//end of document ready