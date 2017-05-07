/**
 * Created by Administrator on 2017/5/4.
 */
$(function () {
    var flag=true;
    $('.z-yuyin').on('touchstart',function () {
        $('html','body').addClass('hidden');
        $('.zhe').css('display',"block");
    });

    $('.complete').on('touchstart',function () {
        $('html','body').removeClass('hidden');
        $('.zhe').css('display',"none");
    });
    $('.time >.c-f-list >li').on('touchstart',function () {
        $('.time >.c-f-list >li').removeClass('first');
        $(this).addClass('first');
        if(flag){

            $(this).clone(true).appendTo($('.yx-list'));
        }
        // console.log(this)
    });
    // $('.step>.c-f-list >li').on('touchstart',function () {
    //     $('.step >.c-f-list >li').removeClass('first');
    //     $(this).addClass('first')
    // });
    // $('.taste>.c-f-list >li').on('touchstart',function () {
    //     $('.taste >.c-f-list >li').removeClass('first');
    //     $(this).addClass('first')
    // });
    // $('.tech>.c-f-list >li').on('touchstart',function () {
    //     $('.tech >.c-f-list >li').removeClass('first');
    //     $(this).addClass('first')
    // })
    //


});