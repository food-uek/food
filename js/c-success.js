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
    });
    $('.time >.c-f-list >li').on('touchstart',function () {
        $('.time >.c-f-list >li').removeClass('first');
        $(this).addClass('first');
        var yixuan=$(this).clone(true).attr('class','timelist first');
        $('.timelist').replaceWith(yixuan.appendTo($('.yx-list')));

    });
    $('.step>.c-f-list >li').on('touchstart',function () {
        $('.step >.c-f-list >li').removeClass('first');
        $(this).addClass('first');
        var yixuan=$(this).clone(true).attr('class','steplist first');
        $('.steplist').replaceWith(yixuan.appendTo($('.yx-list')));
    });
    $('.taste>.c-f-list >li').on('touchstart',function () {
        $('.taste >.c-f-list >li').removeClass('first');
        $(this).addClass('first');
        var yixuan=$(this).clone(true).attr('class','tastelist first');
        $('.tastelist').replaceWith(yixuan.appendTo($('.yx-list')));
    });
    $('.tech>.c-f-list >li').on('touchstart',function () {
        $('.tech >.c-f-list >li').removeClass('first');
        $(this).addClass('first');
        var yixuan=$(this).clone(true).attr('class','techlist first');
        $('.techlist').replaceWith(yixuan.appendTo($('.yx-list')));
    });
    $('.c-btn >.clear').on('touchstart',function () {
        $('.yx-list >li').remove();
        $('.c-f-list >li').removeClass('first');
    });



});