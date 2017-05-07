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
	})
	$('.q-footer-two').on('touchstart',function(){
		$('.q-footer').addClass('q-active');
		$('.q-zhao').addClass('q-active');
	})
	$('.q-chacha').on('touchstart',function(){
		$('.q-footer').removeClass('q-active');
		$('.q-zhao').removeClass('q-active');
	})
	
})