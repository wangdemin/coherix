$(function() {
	$("html, body").scrollTop(0 + "px");
	//$('html,body').stop().animate({ scrollTop: '0px' }, 100);
	$('.xia,.ss_box1,.xia2').hide()

	$(".navItem").hover(function() {
		$(this).addClass('active_tb').siblings().removeClass('active_tb')
	}, function() {
		$(this).removeClass('active_tb')
	});
	$(".xl").hover(function() {
		$('.xia').show()
	}, function() {
		$('.xia').hide()
	});
	$(".navItem").click(function(){
		$(this).addClass('active_tb').siblings().removeClass('active_tb')
	})
	$('.xx').click(function(){
		$('.ss_box1').hide()
	})
	$('.img_tab1').click(function(){
		$('.ss_box1').show()
	})
	$(".ac,.xia2").hover(function() {
		$('.xia2').show()
	}, function() {
		$('.xia2').hide()
	});
	$(".xia1_1,.xia2_1").hover(function() {
		$(this).addClass('active_tb1')
		$(this).find('a').css('color','red !important')
	}, function() {
		$(this).removeClass('active_tb1')
	});
	// $('.ss_box1').css({
	// 	"width":document.body.clientWidth,
	// 	"height":document.body.clientHeight
	// })
	$(window).scroll(function(){
		var top = $(window).scrollTop() + 300,
			scroll1 = $("#scroll1").offset().top,
			scroll2 = $("#scroll2").offset().top,
			scroll3 = $("#scroll3").offset().top,
			scroll4 = $("#scroll4").offset().top,
			scroll5 = $("#scroll5").offset().top,
			scroll6 = $("#scroll6").offset().top,
			scroll7 = $("#scroll7").offset().top;
		console.log(scroll4+'---'+top)
		if ($(window).scrollTop()>100){
			$("#header").addClass("headActive")
		}else{
			$("#header").removeClass("headActive")
		}
		if(top > scroll1){
			$("#scroll1").addClass("scrollActive")
		} 
		if (top > scroll2) {
			$("#scroll2").addClass("scrollActive")
		}
		if (top > scroll3) {
			$("#scroll3").addClass("scrollActive")
		}
		if (top > scroll4) {
			$("#scroll4").addClass("scrollActive")
		}
		if (top > scroll5) {
			$("#scroll5").addClass("scrollActive")
		}
		if (top > scroll6) {
			$("#scroll6").addClass("scrollActive")
		}
		if (top > scroll7) {
			$("#scroll7").addClass("scrollActive")
		}
	});

})
