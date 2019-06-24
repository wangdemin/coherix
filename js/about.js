// $(obj).mouseenter(function(){ //鼠标移入 }).mouseleave(function(){ //鼠标移出 });  

$(function(){
	$(".box4_1").mouseenter(function(){
		//鼠标移入 
		$(this).children().first().hide()
		$(this).find("div").eq(1).css('background','rgba(255,255,255,0.65)')
	}).mouseleave(function(){
		//鼠标移出 
		$(this).children().first().show()
		$(this).find("div").eq(1).css('background','rgba(255,255,255,0)')
	});
	
})





















