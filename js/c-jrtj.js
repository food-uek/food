/**
 * Created by Administrator on 2017/5/5.
 */
$(function () {
    var navs=$('.c-image>div');
    var items=$('.c-can-con');
    var circles=$('.c-line>li')
    navs.each(function (index) {
        $(this).on('touchstart',function () {
            navs.removeClass('first');
            $(this).addClass('first');
            items.each(function (i) {
                items.eq(i).removeClass('active');
                items.eq(index).addClass('active')
            })
            circles.each(function (i) {
                circles.eq(i).removeClass('c-active');
                circles.eq(index).addClass('c-active')
            })
        })
    })

});