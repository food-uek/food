$(document).ready(function(){
	var myscroll=new IScroll("#h-iscroll",{
		mouseWheel:true,
		scrollbars:true,
		
	});
	var mySwiper = new Swiper ('.h-bannerbox',{
		pagination:'.h-nav',
		
	})
	var mySwiper = new Swiper ('.h-cookBox',{
		pagination:false,
		slidePerView:2,
		spaceBetween:10,
	})
})