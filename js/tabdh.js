$(function() {
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
		$(this).addClass('active_tb1').siblings().removeClass('active_tb1')
	}, function() {
		$(this).removeClass('active_tb1')
	});


})
