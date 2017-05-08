$(document).ready(function(){
	var myscroll=new IScroll("#h-iscroll",{
		mouseWheel:true,
		scrollbars:false,
		click:true,
	});
	var mySwiper = new Swiper ('.h-bannerbox',{
		pagination:'.h-nav',
		
	})
	var mySwiper_2 = new Swiper ('.h-cookBox',{
		pagination:false,
		slidePerView:2,
		pagination:'.h-nav2',
	})
	
		$('.z-return').on('touchstart',function(){
		$('.h-box-you').css({'left':'5.3rem','transform':'rotateY(-30deg)'});
		$('.zl-zuo').css('left','0');
	})
	
	var hammertime = new Hammer(document.querySelector(".zl-zuo"));
	hammertime.on("swipeleft", function () {
		$('.h-box-you').css({'left':'0','transform':'rotateY(0deg)'})
 		$('.zl-zuo').css('left','-5.8rem')
	
	});
	
})