/**
 * Created by Administrator on 2017/5/4.
 */
$(function () {
    $('.z-yuyin').on('touchstart',function () {
        $('html','body').addClass('hidden');
        $('.zhe').css('display',"block");
    });

    $('.complete').on('touchstart',function () {
        $('html','body').removeClass('hidden');
        $('.zhe').css('display',"none");
    })

});