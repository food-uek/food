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
	
})