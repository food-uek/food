$(function(){
	$('.q-ti > li').on('touchstart',function(){
		$('.q-ti > li').removeClass('q-active');
		$(this).addClass('q-active');
		$('form.q-phone > div').addClass('q-active');
		console.log($(this).index())
		$('form.q-phone > div').eq($(this).index()).removeClass('q-active');
	})
})
