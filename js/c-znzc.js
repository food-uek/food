
/**
 * Created by Administrator on 2017/5/2.
 */
$(function(){
    //给每个菜添加属性‘cai’
    $('main >div >ul >li').forEach(function (value, index) {
        $(value).attr('cai',index)
    })
    // 获取cai值
    var con=$('main >div >ul >li').attr('cai');
    console.log(con)
    //获取顶部li的type值
    var xuan=$('.c-xuan>li').attr('type');
    var flag=true;
    // li的点击事件
    $('main >div >ul >li').on('touchstart',function(){
        // 点击后给这个li下的 .dui 类名 active
        $(this).children('*:nth-child(2)').toggleClass('active');
        //获取li的菜名
        var name=$(this).children('*:nth-child(3)').children('span').html();
        // 如果开关打开就添加一个li
        if(flag){
            $('<li>').html(`<span>${name}</span>
            <img src="c-img/cha.png">`).appendTo('.c-xuan');
            flag=false;
        }else{
            // 否则就移除li
            $('.c-xuan>li').last().remove();
            flag=true;
        }

        if($(this).children('*:nth-child(2)').hasClass('active')){
            $('.c-xuan>li').remove();
        }

    })





});
