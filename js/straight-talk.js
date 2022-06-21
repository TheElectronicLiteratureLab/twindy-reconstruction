$(document).ready(function() {
	$(".event-fade").each(function(){
		var tempID = $(this).attr("id");
		var check = tempID[tempID.length -2];

		if (check >= '0' && check <= '9') {
			var id = tempID.slice(tempID.length -2, tempID.length);
		} else {
			var id = tempID[tempID.length -1];
		}
		
		var time = 1000 * id + (id * 2000);
		setTimeout(function(){
			$("#event"+id).animate({
			opacity: 1
			}, 3000);
		},time);
	});
	
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
	
	if ($("#previous-straight").length) {
		var temp = $("#previous-straight").attr("href");
		$("#previous-straight").attr("href",temp+linkPass);
	}
	
	if ($("#next-straight").length) {
		var temp = $("#next-straight").attr("href");
		$("#next-straight").attr("href",temp+linkPass);
	}
	
	//reload on orientation change
	window.addEventListener("orientationchange", function() {
		location.reload();
	});
});