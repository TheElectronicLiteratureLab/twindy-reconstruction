$(document).ready(function() {

	setTimeout(function(){
		$("#statement").animate({
		opacity: 1
		}, 2000);
	},1000);

	//chapbook fade out and in
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

	$("#parent-link, #parent-link-mobile").attr("href",returnLink);
	
	if ($("#previous-statement").length) {
		var temp = $("#previous-statement").attr("href");
		$("#previous-statement").attr("href",temp+linkPass);
		$("#previous-statement, #previous-statement-mobile").attr("href",temp+linkPass);
	}
	
	if ($("#next-statement").length) {
		var temp = $("#next-statement").attr("href");
		$("#next-statement, #next-statement-mobile").attr("href",temp+linkPass);
	}
	
	//reload on orientation change
	window.addEventListener("orientationchange", function() {
		location.reload();
	});
	
});//end of document ready