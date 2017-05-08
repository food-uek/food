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

    $('.c-s-con>div').forEach(function (val,index) {
        var cl=$(val).attr('class');
        $(`.${cl} .c-f-list >li`).on('touchstart',function () {
            $('.time >.c-f-list >li').removeClass('first');
            $(this).addClass('first');
            var yixuan=$(this).clone(true).attr('class',`${cl}list first`).append(`<img src="../img/c-img/cha.png" alt="">`);
            $(`.${cl}list`).replaceWith(yixuan.appendTo($('.yx-list')));

            //点击删除
            $('.yx-list > .first').on('touchstart','img',function () {
                var con=$(this).parent().children('span.c-x-text').html();
                $(this).parent().remove();
                $('.c-f-list >li').forEach(function (val,index) {
                    if($(val).html()==con){
                        $('.c-f-list >li').eq(index).removeClass('first');
                    }
                })
            })

        });
    });

    //清空
    $('.c-btn >.clear').on('touchstart',function () {
        $('.yx-list >li').remove();
        $('.c-f-list >li').removeClass('first');
    });


});