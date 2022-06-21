$(document).ready(function() {
	$(".event-slide").each(function(){
		var tempDone = 0;
		var tempID = $(this).attr("id");
		var check = tempID[tempID.length -2];
		
		if (check >= '0' && check <= '9') {
			var id = tempID.slice(tempID.length -2, tempID.length);
		} else {
			var id = tempID[tempID.length -1];
		}
		
		//check to see if past the trigger point on the page
		var hT = $('#trigger'+id).offset().top,
			hH = $('#trigger'+id).outerHeight(),
			wH = $(window).height(),
			wS = $(this).scrollTop();
			
		if (wS > (hT+hH-wH)) {
			setTimeout(function(){
				$("#event"+id+" .text-before").animate({
				opacity: 1,
				left: "+=25px"
				}, 3500);
			},5000);
	
			setTimeout(function(){
				$("#event"+id+" .text-after").animate({
				opacity: 1,
				right: "+=25px"
				}, 3500);
			},6500);

		}
		else {
			//create scroll trigger and event for all designated animations
			$(window).scroll(function() {
			
				//check to see if already triggered
				if (tempDone == 0) {
					var hT = $('#trigger'+id).offset().top,
					hH = $('#trigger'+id).outerHeight(),
					wH = $(window).height(),
					wS = $(this).scrollTop();
	
					if (wS > (hT+hH-wH)) {
						setTimeout(function(){
							$("#event"+id+" .text-before").animate({
							opacity: 1,
							left: "+=25px"
							}, 3500);
						},2000);
		
						setTimeout(function(){
							$("#event"+id+" .text-after").animate({
							opacity: 1,
							right: "+=25px"
							}, 3500);
						},3500);
						tempDone = 1;//stop triggering more than once
					}
					
				}

			});
		}//end of else check
	
	});//end of each function for slide animations
	
	
	
	$(".event-slide-right-only").each(function(){
		var tempDone = 0;
		var tempID = $(this).attr("id");
		var check = tempID[tempID.length -2];
		
		if (check >= '0' && check <= '9') {
			var id = tempID.slice(tempID.length -2, tempID.length);
		} else {
			var id = tempID[tempID.length -1];
		}
		
		//check to see if past the trigger point on the page
		var hT = $('#trigger'+id).offset().top,
			hH = $('#trigger'+id).outerHeight(),
			wH = $(window).height(),
			wS = $(this).scrollTop();
			
		if (wS > (hT+hH-wH)) {
			setTimeout(function(){
				$("#event"+id+" .text-after").animate({
				opacity: 1,
				right: "+=25px"
				}, 2500);
			},1500);

		}
		else {
			//create scroll trigger and event for all designated animations
			$(window).scroll(function() {
			
				//check to see if already triggered
				if (tempDone == 0) {
					var hT = $('#trigger'+id).offset().top,
					hH = $('#trigger'+id).outerHeight(),
					wH = $(window).height(),
					wS = $(this).scrollTop();
	
					if (wS > (hT+hH-wH)) {
						setTimeout(function(){
							$("#event"+id+" .text-after").animate({
							opacity: 1,
							right: "+=25px"
							}, 2500);
						},1500);
						tempDone = 1;//stop triggering more than once
					}
					
					
				}

			});
		}//end of else check
	
	});//end of each function for slide (right only) animations
	
	
	
	
	$(".event-slide-double-opposite").each(function(){
		var tempDone = 0;
		var tempID = $(this).attr("id");
		var check = tempID[tempID.length -2];
		
		if (check >= '0' && check <= '9') {
			var id = tempID.slice(tempID.length -2, tempID.length);
		} else {
			var id = tempID[tempID.length -1];
		}
		
		//check to see if past the trigger point on the page
		var hT = $('#trigger'+id).offset().top,
			hH = $('#trigger'+id).outerHeight(),
			wH = $(window).height(),
			wS = $(this).scrollTop();
			
		if (wS > (hT+hH-wH)) {
			setTimeout(function(){
				$("#event"+id+" .text-before").animate({
				opacity: 1,
				left: "+=25px"
				}, 3500);
			},2000);
	
			setTimeout(function(){
				$("#event"+id+" .text-after1").animate({
				opacity: 1,
				right: "+=25px"
				}, 3500);
			},2500);
			
			setTimeout(function(){
				$("#event"+id+" .text-after2").animate({
				opacity: 1,
				right: "+=25px"
				}, 3500);
			},2500);

		}
		else {
			//create scroll trigger and event for all designated animations
			$(window).scroll(function() {
			
				//check to see if already triggered
				if (tempDone == 0) {
					var hT = $('#trigger'+id).offset().top,
					hH = $('#trigger'+id).outerHeight(),
					wH = $(window).height(),
					wS = $(this).scrollTop();
	
					if (wS > (hT+hH-wH)) {
						setTimeout(function(){
							$("#event"+id+" .text-before").animate({
							opacity: 1,
							left: "+=25px"
							}, 3500);
						},2000);
	
						setTimeout(function(){
							$("#event"+id+" .text-after1").animate({
							opacity: 1,
							right: "+=25px"
							}, 3500);
						},2500);
			
						setTimeout(function(){
							$("#event"+id+" .text-after2").animate({
							opacity: 1,
							left: "+=25px"
							}, 3500);
						},3000);
						tempDone = 1;//stop triggering more than once
					}
					
				}

			});
		}//end of else check
	
	});//end of each function for slide animations (double)
	
	
	
	$(".event-slide-breadcrumbs").each(function(){
		var tempDone = 0;
			tempID = $(this).attr("id");
			check = tempID[tempID.length -2];
		
		if (check >= '0' && check <= '9') {
			var id = tempID.slice(tempID.length -2, tempID.length);
		} else {
			var id = tempID[tempID.length -1];
		}
		
		//check to see if past the trigger point on the page
		var hT = $('#trigger'+id).offset().top,
			hH = $('#trigger'+id).outerHeight(),
			wH = $(window).height(),
			wS = $(this).scrollTop();
			
		if (wS > (hT+hH-wH)) {
			setTimeout(function(){
				$("#event"+id+" .text-before").animate({
				opacity: 1,
				left: "+=25px"
				}, 4500);
			},3000);
	
			setTimeout(function(){
				$("#event"+id+" .text-after").animate({
				opacity: 1,
				right: "+=25px"
				}, 4500);
			},3500);
			
			//breadcrumbs
			setTimeout(function(){
				$("#event"+id+" p .crumb:nth-child(1)").animate({
				opacity: 1,
				left: "+=25px"
				}, 4500);
			},5500);
			
			setTimeout(function(){
				$("#event"+id+" p .crumb:nth-child(2)").animate({
				opacity: 1,
				left: "+=25px"
				}, 4500);
			},6500);
			
			setTimeout(function(){
				$("#event"+id+" p .crumb:nth-child(3)").animate({
				opacity: 1,
				left: "+=25px"
				}, 4500);
			},7500);
			
			setTimeout(function(){
				$("#event"+id+" p .crumb:nth-child(4)").animate({
				opacity: 1,
				left: "+=25px"
				}, 4500);
			},8500);

		}
		else {
			//create scroll trigger and event for all designated animations
			$(window).scroll(function() {
			
				//check to see if already triggered
				if (tempDone == 0) {
					var hT = $('#trigger'+id).offset().top,
					hH = $('#trigger'+id).outerHeight(),
					wH = $(window).height(),
					wS = $(this).scrollTop();
	
					if (wS > (hT+hH-wH)) {
						setTimeout(function(){
							$("#event"+id+" .text-before").animate({
							opacity: 1,
							left: "+=25px"
							}, 4500);
						},3000);
		
						setTimeout(function(){
							$("#event"+id+" .text-after").animate({
							opacity: 1,
							right: "+=25px"
							}, 4500);
						},3500);
						tempDone = 1;//stop triggering more than once
					}
					
				}

			});
		}//end of else check
	
	});//end of each function for slide animations
	
	
	
	
	
	
	
	$(".event-fade").each(function(){
		var tempDone = 0;
		var tempID = $(this).attr("id");
		var check = tempID[tempID.length -2];
		
		if (check >= '0' && check <= '9') {
			var id = tempID.slice(tempID.length -2, tempID.length);
		} else {
			var id = tempID[tempID.length -1];
		}
		
		//check to see if past the trigger point on the page
		var hT = $('#trigger'+id).offset().top,
			hH = $('#trigger'+id).outerHeight(),
			wH = $(window).height(),
			wS = $(this).scrollTop();
			
		if (wS > (hT+hH-wH)) {
			setTimeout(function(){
				$("#event"+id).animate({
				opacity: 1
				}, 2000);
			},2000);
		}
		else {
			//create scroll trigger and event for all designated animations
			$(window).scroll(function() {
			
				//check to see if already triggered
				if (tempDone == 0) {
					var hT = $('#trigger'+id).offset().top,
					hH = $('#trigger'+id).outerHeight(),
					wH = $(window).height(),
					wS = $(this).scrollTop();
	
					if (wS > (hT+hH-wH)) {
						setTimeout(function(){
							$("#event"+id).animate({
							opacity: 1
							}, 2000);
						},2000);
						
						tempDone = 1;//stop triggering more than once
					}
					
				}

			});
		}//end of else check
	
	});//end of each function for fade animations
	
	
	
	
	
	
	$(".event-fade-multi").each(function(){
		var tempDone = 0;
		var tempID = $(this).attr("id");
		var check = tempID[tempID.length -2];
		
		if (check >= '0' && check <= '9') {
			var id = tempID.slice(tempID.length -2, tempID.length);
		} else {
			var id = tempID[tempID.length -1];
		}
		
		//check to see if past the trigger point on the page
		var hT = $('#trigger'+id).offset().top,
			hH = $('#trigger'+id).outerHeight(),
			wH = $(window).height(),
			wS = $(this).scrollTop();
			
		if (wS > (hT+hH-wH)) {
			setTimeout(function(){
				$("#"+tempID+" p:nth-child(1)").animate({ opacity: 1 }, (4000));
			},500);
			
			setTimeout(function(){
				$("#"+tempID+" p:nth-child(2)").animate({ opacity: 1 }, (4000));
			},2500);
		}
		else {
			//create scroll trigger and event for all designated animations
			$(window).scroll(function() {
			
				//check to see if already triggered
				if (tempDone == 0) {
					var hT = $('#trigger'+id).offset().top,
					hH = $('#trigger'+id).outerHeight(),
					wH = $(window).height(),
					wS = $(this).scrollTop();
	
					if (wS > (hT+hH-wH)) {
						setTimeout(function(){
							$("#"+tempID+" p:nth-child(1)").animate({ opacity: 1 }, (4000));
						},2000);
		
						setTimeout(function(){
							$("#"+tempID+" p:nth-child(2)").animate({ opacity: 1 }, (4000));
						},4000);
						
						tempDone = 1;//stop triggering more than once
					}
					
				}

			});
		}//end of else check
	
	});//end of each function for fade animations
	
	
	
	
	
	
	
	
	
	
	

	
	
	
	
	
	$(".event-cascade").each(function(){
		var tempDone = 0,
			count = 1,
			tempID = $(this).attr("id"),
			check = tempID[tempID.length -2];
		
		//get id from event attr
		if (check >= '0' && check <= '9') {
			var id = tempID.slice(tempID.length -2, tempID.length);
		} else {
			var id = tempID[tempID.length -1];
		}
		
		//check to see if past the trigger point on the page
		var hT = $('#trigger'+id).offset().top,
			hH = $('#trigger'+id).outerHeight(),
			wH = $(window).height(),
			wS = $(this).scrollTop();
			
		if (wS > (hT+hH-wH)) {
			$("#"+tempID+" .text-superscript").each(function(){
				$(this).animate({
				opacity: 1
				}, (5000*count));
				count++;
			});
		}
		else {
			//create scroll trigger and event for all designated animations
			$(window).scroll(function() {
			
				//check to see if already triggered
				if (tempDone == 0) {
				
					//check to see if past the trigger point on the page
					var hT = $('#trigger'+id).offset().top,
						hH = $('#trigger'+id).outerHeight(),
						wH = $(window).height(),
						wS = $(this).scrollTop();
			
					if (wS > (hT+hH-wH)) {
						$("#"+tempID+" .text-superscript").each(function(){
							$(this).animate({
							opacity: 1
							}, (5000*count));
							count++;
						});
					}
					
				}

			});
		}//end of else check
	
	});//end of each function for cascade superscript animations
	
	
	
	
	
	
	
	
	$(".small-dot").click(function() {
		var target = $(this).data("target");
		
		$(".library-tidbit").fadeOut(1000);
		if ($("#"+target).css("display") == "none") {
			$("#"+target).fadeIn(1000);
		}
	});//end of library-tidbit popup
	
	$(".tidbit-close").click(function() {
		$(this).parent(".library-tidbit").fadeOut(1000);
	});//end of tidbit-close
	
	
	$(".addenda").click(function() {
		var target = $(this).data("target");
		
		$(".addenda-modal").fadeOut(1000);
		if ($("#"+target).css("display") == "none") {
			$("#"+target).fadeIn(1000);
		}
	});//end of addenda popup
	
	$(".addenda-close").click(function() {
		$(this).parent(".addenda-modal").fadeOut(1000);
	});//end of addenda-close
	
	
	
	
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

	//terminate window scrolls
	//$(window).off('scroll');
});//end of document ready