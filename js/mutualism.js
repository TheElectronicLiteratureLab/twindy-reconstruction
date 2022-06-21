$(document).ready(function() {
	$(".event-slide.no-cascade").each(function(){
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
			},5500);

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
						},2500);
						tempDone = 1;//stop triggering more than once
					}
					
				}

			});
		}//end of else check
	
	});//end of each function for slide animations
	
	
	
	$(".event-slide-right-only.no-cascade").each(function(){
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
	
	
	
	$(".event-slide-double-opposite.no-cascade").each(function(){
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
	
	
	
	$(".event-slide-breadcrumbs.no-cascade").each(function(){
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
	
	

	$(".event-fade.no-cascade").each(function(){
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
	
	
	
	$(".event-fade-multi.no-cascade").each(function(){
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
	
		
	
	$(".event-cascade.no-cascade").each(function(){
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

















	//------------------
	//UNIQUE ANIMATION 1
	//------------------
	var uniqueDone1 = 0;
	
	//check to see if past the trigger point on the page
	var hT = $('#trigger-unique1').offset().top,
		hH = $('#trigger-unique1').outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
		
	if (wS > (hT+hH-wH)) {
		setTimeout(function(){
			$("#event2 .text-superscript").animate({
			opacity: 1
			}, 5000);
		},500);
		
		//
		
		setTimeout(function(){
			$("#event2 .text-after").animate({
			opacity: 1,
			right: "+=25px"
			}, 2500);
		},6000);
		
		//
		
		setTimeout(function(){
			$("#event3 .text-superscript").animate({
			opacity: 1
			}, 5000);
		},8000);
		
		//
		
		setTimeout(function(){
			$("#event3 .text-after").animate({
			opacity: 1,
			right: "+=25px"
			}, 2500);
		},11500);
		
		//
		
		setTimeout(function(){
			$("#event4 .text-after").animate({
			opacity: 1,
			right: "+=25px"
			}, 2500);
		},14500);
		
	}
	else {
		//create scroll trigger and event for all designated animations
		$(window).scroll(function() {
		
			//check to see if already triggered
			if (uniqueDone1 == 0) {
				var hT = $('#trigger-unique1').offset().top,
					hH = $('#trigger-unique1').outerHeight(),
					wH = $(window).height(),
					wS = $(this).scrollTop();
		
				if (wS > (hT+hH-wH)) {
					setTimeout(function(){
						$("#event2 .text-superscript").animate({
						opacity: 1
						}, 5000);
					},500);
		
					//
		
					setTimeout(function(){
						$("#event2 .text-after").animate({
						opacity: 1,
						right: "+=25px"
						}, 2500);
					},6000);
		
					//
		
					setTimeout(function(){
						$("#event3 .text-superscript").animate({
						opacity: 1
						}, 5000);
					},8000);
		
					//
		
					setTimeout(function(){
						$("#event3 .text-after").animate({
						opacity: 1,
						right: "+=25px"
						}, 2500);
					},11500);
		
					//
		
					setTimeout(function(){
						$("#event4 .text-after").animate({
						opacity: 1,
						right: "+=25px"
						}, 2500);
					},14500);
					
					uniqueDone1 = 1;//stop triggering more than once
				}
				
				
			}

		});
	}//end of else check
	
	
	
	
	
	//------------------
	//UNIQUE ANIMATION 2
	//------------------
	var uniqueDone2 = 0;
	
	//check to see if past the trigger point on the page
	var hT = $('#trigger-unique2').offset().top,
		hH = $('#trigger-unique2').outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
		
	if (wS > (hT+hH-wH)) {
		setTimeout(function(){
			$("#event6 .text-after").animate({
			opacity: 1,
			right: "+=25px"
			}, 2500);
		},3500);
		
		//
		
		setTimeout(function(){
			$("#event7 .text-after").animate({
			opacity: 1,
			right: "+=25px"
			}, 2500);
		},8500);
		
		//
		
		setTimeout(function(){
			$("#event8 .text-after").animate({
			opacity: 1,
			right: "+=25px"
			}, 2500);
		},11500);
		
	}
	else {
		//create scroll trigger and event for all designated animations
		$(window).scroll(function() {
		
			//check to see if already triggered
			if (uniqueDone2 == 0) {
				var hT = $('#trigger-unique2').offset().top,
					hH = $('#trigger-unique2').outerHeight(),
					wH = $(window).height(),
					wS = $(this).scrollTop();
		
				if (wS > (hT+hH-wH)) {
					setTimeout(function(){
						$("#event6 .text-after").animate({
						opacity: 1,
						right: "+=25px"
						}, 2500);
					},3500);
	
					//
	
					setTimeout(function(){
						$("#event7 .text-after").animate({
						opacity: 1,
						right: "+=25px"
						}, 2500);
					},8500);
	
					//
	
					setTimeout(function(){
						$("#event8 .text-after").animate({
						opacity: 1,
						right: "+=25px"
						}, 2500);
					},11500);
					
					uniqueDone2 = 1;//stop triggering more than once
				}
				
				
			}

		});
	}//end of else check
	
	
	
	
	
	//------------------
	//UNIQUE ANIMATION 3
	//------------------
	var uniqueDone3 = 0;
	
	//check to see if past the trigger point on the page
	var hT = $('#trigger-unique3').offset().top,
		hH = $('#trigger-unique3').outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
		
	if (wS > (hT+hH-wH)) {
		setTimeout(function(){
			$("#event10 .text-after").animate({
			opacity: 1,
			right: "+=25px"
			}, 2500);
		},500);
		
		//
		
		setTimeout(function(){
			$("#event11 .text-superscript:nth-child(1)").animate({
			opacity: 1
			}, 5000);
		},3000);
		
		//
		
		setTimeout(function(){
			$("#event11 .text-superscript:nth-child(2)").animate({
			opacity: 1
			}, 5000);
		},7500);
		
		//
		
		setTimeout(function(){
			$("#event11 .text-after").animate({
			opacity: 1,
			right: "+=25px"
			}, 2500);
		},13000);
		
		//
		
		setTimeout(function(){
			$("#event12 .text-superscript").animate({
			opacity: 1
			}, 5000);
		},16000);
		
		//
		
		setTimeout(function(){
			$("#event12 .text-after").animate({
			opacity: 1,
			right: "+=25px"
			}, 2500);
		},20500);
		
		//
		
		setTimeout(function(){
			$("#event13 .text-superscript").animate({
			opacity: 1
			}, 5000);
		},23500);
		
		//
		
		setTimeout(function(){
			$("#event13 .text-after").animate({
			opacity: 1,
			right: "+=25px"
			}, 2500);
		},28000);
		
	}
	else {
		//create scroll trigger and event for all designated animations
		$(window).scroll(function() {
		
			//check to see if already triggered
			if (uniqueDone3 == 0) {
				var hT = $('#trigger-unique3').offset().top,
					hH = $('#trigger-unique3').outerHeight(),
					wH = $(window).height(),
					wS = $(this).scrollTop();
		
				if (wS > (hT+hH-wH)) {
					setTimeout(function(){
						$("#event10 .text-after").animate({
						opacity: 1,
						right: "+=25px"
						}, 2500);
					},500);
		
					//
		
					setTimeout(function(){
						$("#event11 .text-superscript:nth-child(1)").animate({
						opacity: 1
						}, 5000);
					},3000);
		
					//
		
					setTimeout(function(){
						$("#event11 .text-superscript:nth-child(2)").animate({
						opacity: 1
						}, 5000);
					},7500);
		
					//
		
					setTimeout(function(){
						$("#event11 .text-after").animate({
						opacity: 1,
						right: "+=25px"
						}, 2500);
					},13000);
		
					//
		
					setTimeout(function(){
						$("#event12 .text-superscript").animate({
						opacity: 1
						}, 5000);
					},16000);
		
					//
		
					setTimeout(function(){
						$("#event12 .text-after").animate({
						opacity: 1,
						right: "+=25px"
						}, 2500);
					},20500);
		
					//
		
					setTimeout(function(){
						$("#event13 .text-superscript").animate({
						opacity: 1
						}, 5000);
					},23500);
		
					//
		
					setTimeout(function(){
						$("#event13 .text-after").animate({
						opacity: 1,
						right: "+=25px"
						}, 2500);
					},28000);
					
					uniqueDone3 = 1;//stop triggering more than once
				}
				
				
			}

		});
	}//end of else check
	
	
	
	
	
	//------------------
	//UNIQUE ANIMATION 4
	//------------------
	var uniqueDone4 = 0;
	
	//check to see if past the trigger point on the page
	var hT = $('#trigger-unique4').offset().top,
		hH = $('#trigger-unique4').outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
		
	if (wS > (hT+hH-wH)) {
		setTimeout(function(){
			$("#event15 .text-superscript").animate({
			opacity: 1
			}, 5000);
		},500);
		
		//
		
		setTimeout(function(){
			$("#event15 .text-after").animate({
			opacity: 1,
			right: "+=25px"
			}, 2500);
		},5000);
		
		//
		
		setTimeout(function(){
			$("#event16 .text-superscript").animate({
			opacity: 1
			}, 5000);
		},9000);
		
		//
		
		setTimeout(function(){
			$("#event16 .text-after").animate({
			opacity: 1,
			right: "+=25px"
			}, 2500);
		},14500);
		
		//
		
		setTimeout(function(){
			$("#event17 .text-superscript").animate({
			opacity: 1
			}, 5000);
		},16500);
		
		//
		
		setTimeout(function(){
			$("#event17 .text-after").animate({
			opacity: 1,
			right: "+=25px"
			}, 2500);
		},21000);
		
		//
		
		setTimeout(function(){
			$("#event14 .text-superscript").animate({
			opacity: 1
			}, 5000);
		},23000);
		
	}
	else {
		//create scroll trigger and event for all designated animations
		$(window).scroll(function() {
		
			//check to see if already triggered
			if (uniqueDone4 == 0) {
				var hT = $('#trigger-unique4').offset().top,
					hH = $('#trigger-unique4').outerHeight(),
					wH = $(window).height(),
					wS = $(this).scrollTop();
		
				if (wS > (hT+hH-wH)) {
					setTimeout(function(){
						$("#event15 .text-superscript").animate({
						opacity: 1
						}, 5000);
					},500);
		
					//
		
					setTimeout(function(){
						$("#event15 .text-after").animate({
						opacity: 1,
						right: "+=25px"
						}, 2500);
					},5000);
		
					//
		
					setTimeout(function(){
						$("#event16 .text-superscript").animate({
						opacity: 1
						}, 5000);
					},9000);
		
					//
		
					setTimeout(function(){
						$("#event16 .text-after").animate({
						opacity: 1,
						right: "+=25px"
						}, 2500);
					},14500);
		
					//
		
					setTimeout(function(){
						$("#event17 .text-superscript").animate({
						opacity: 1
						}, 5000);
					},16500);
		
					//
		
					setTimeout(function(){
						$("#event17 .text-after").animate({
						opacity: 1,
						right: "+=25px"
						}, 2500);
					},21000);
		
					//
		
					setTimeout(function(){
						$("#event14 .text-superscript").animate({
						opacity: 1
						}, 5000);
					},23000);
					
					uniqueDone4 = 1;//stop triggering more than once
				}
				
				
			}

		});
	}//end of else check
	
	
	
	
	
	//------------------
	//UNIQUE ANIMATION 5
	//------------------
	var uniqueDone5 = 0;
	
	//check to see if past the trigger point on the page
	var hT = $('#trigger-unique5').offset().top,
		hH = $('#trigger-unique5').outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
		
	if (wS > (hT+hH-wH)) {
		setTimeout(function(){
			$("#event19 .text-superscript").animate({
			opacity: 1
			}, 5000);
		},500);
		
		//
		
		setTimeout(function(){
			$("#event19 .text-after").animate({
			opacity: 1,
			right: "+=25px"
			}, 2500);
		},5500);
		
		//
		
		setTimeout(function(){
			$("#event20 .text-superscript:nth-child(1)").animate({
			opacity: 1
			}, 5000);
		},8500);
		
		//
		
		setTimeout(function(){
			$("#event20 .text-superscript:nth-child(2)").animate({
			opacity: 1
			}, 5000);
		},11500);
		
		//
		
		setTimeout(function(){
			$("#event20 .text-after").animate({
			opacity: 1,
			right: "+=25px"
			}, 2500);
		},17000);
		
		//
		
		setTimeout(function(){
			$("#event21 .text-superscript").animate({
			opacity: 1
			}, 5000);
		},20000);
		
		//
		
		setTimeout(function(){
			$("#event21 .text-after").animate({
			opacity: 1,
			right: "+=25px"
			}, 2500);
		},25500);
		
	}
	else {
		//create scroll trigger and event for all designated animations
		$(window).scroll(function() {
		
			//check to see if already triggered
			if (uniqueDone5 == 0) {
				var hT = $('#trigger-unique5').offset().top,
					hH = $('#trigger-unique5').outerHeight(),
					wH = $(window).height(),
					wS = $(this).scrollTop();
		
				if (wS > (hT+hH-wH)) {
					setTimeout(function(){
						$("#event19 .text-superscript").animate({
						opacity: 1
						}, 5000);
					},500);
		
					//
		
					setTimeout(function(){
						$("#event19 .text-after").animate({
						opacity: 1,
						right: "+=25px"
						}, 2500);
					},5500);
		
					//
		
					setTimeout(function(){
						$("#event20 .text-superscript:nth-child(1)").animate({
						opacity: 1
						}, 5000);
					},8500);
		
					//
		
					setTimeout(function(){
						$("#event20 .text-superscript:nth-child(2)").animate({
						opacity: 1
						}, 5000);
					},11500);
		
					//
		
					setTimeout(function(){
						$("#event20 .text-after").animate({
						opacity: 1,
						right: "+=25px"
						}, 2500);
					},17000);
		
					//
		
					setTimeout(function(){
						$("#event21 .text-superscript").animate({
						opacity: 1
						}, 5000);
					},20000);
		
					//
		
					setTimeout(function(){
						$("#event21 .text-after").animate({
						opacity: 1,
						right: "+=25px"
						}, 2500);
					},25500);
					
					uniqueDone5 = 1;//stop triggering more than once
				}
				
				
			}

		});
	}//end of else check
	
	
	
	
	
	//------------------
	//UNIQUE ANIMATION 6
	//------------------
	var uniqueDone6 = 0;
	
	//check to see if past the trigger point on the page
	var hT = $('#trigger-unique6').offset().top,
		hH = $('#trigger-unique6').outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
		
	if (wS > (hT+hH-wH)) {
		setTimeout(function(){
			$("#event22 .text-superscript:nth-child(1)").animate({
			opacity: 1
			}, 5000);
		},500);
		
		//
		
		setTimeout(function(){
			$("#event22 .text-superscript:nth-child(2)").animate({
			opacity: 1
			}, 5000);
		},6000);
		
		//
		
		setTimeout(function(){
			$("#event22 .text-after").animate({
			opacity: 1,
			right: "+=25px"
			}, 2500);
		},10500);
		
		//
		
		setTimeout(function(){
			$("#event24 .text-superscript").animate({
			opacity: 1
			}, 5000);
		},13500);
		
		//
		
		setTimeout(function(){
			$("#event23 .text-after").animate({
			opacity: 1,
			right: "+=25px"
			}, 2500);
		},19000);
		
	}
	else {
		//create scroll trigger and event for all designated animations
		$(window).scroll(function() {
		
			//check to see if already triggered
			if (uniqueDone6 == 0) {
				var hT = $('#trigger-unique6').offset().top,
					hH = $('#trigger-unique6').outerHeight(),
					wH = $(window).height(),
					wS = $(this).scrollTop();
		
				if (wS > (hT+hH-wH)) {
					setTimeout(function(){
						$("#event22 .text-superscript:nth-child(1)").animate({
						opacity: 1
						}, 5000);
					},500);
		
					//
		
					setTimeout(function(){
						$("#event22 .text-superscript:nth-child(2)").animate({
						opacity: 1
						}, 5000);
					},6000);
		
					//
		
					setTimeout(function(){
						$("#event22 .text-after").animate({
						opacity: 1,
						right: "+=25px"
						}, 2500);
					},10500);
		
					//
		
					setTimeout(function(){
						$("#event24 .text-superscript").animate({
						opacity: 1
						}, 5000);
					},13500);
		
					//
		
					setTimeout(function(){
						$("#event23 .text-after").animate({
						opacity: 1,
						right: "+=25px"
						}, 2500);
					},19000);
					
					uniqueDone6 = 1;//stop triggering more than once
				}
				
				
			}

		});
	}//end of else check
	
	
	
	
	

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