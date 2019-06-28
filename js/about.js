// $(obj).mouseenter(function(){ //鼠标移入 }).mouseleave(function(){ //鼠标移出 });  

$(function(){
	$(".box4_1").mouseenter(function(){
		//鼠标移入 
		console.log($(this).find('img'))
		$(this).children().first().hide()
		$(this).find("div").eq(1).css({
										'background':'rgba(255,255,255,0.65)',
										'color':'#021774'
									})
		$(this).find(".wz").eq(0).html('Industry Affiliations')
		$(this).find('img').attr('src','img/aboutus/8.png')				

	}).mouseleave(function(){
		//鼠标移出 
		// console.log($(this).find('img'))
		$(this).children().first().show()
		$(this).find("div").eq(1).css({
			'background':'rgba(255,255,255,0)',
			'color':'#FFFFFF'
		})
		$(this).find(".wz").eq(0).html('Contact Us')
		$(this).find('img').attr('src','img/aboutus/9.png')				

	});
	
})





















