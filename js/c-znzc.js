
/**
 * Created by Administrator on 2017/5/2.
 */
$(function(){
    //给每个菜添加属性‘cai’
    // $('main >div >ul >li').forEach(function (value, index) {
    //     $(value).attr('cai',index)
    // });
    var flag=true;
    // li的点击事件
    var arr=[];
    $('main >div >ul >li').on('touchstart',function(){
        //获取li的菜名
        var name=$(this).children('*:nth-child(3)').children('span').html();
        // 点击后给这个li下的 .dui 类名 active
        $(this).children('*:nth-child(2)').addClass('active');
        // 如果开关打开就添加一个li
        let that=$(this);
        // console.log(that)
        if(flag){

            arr.forEach(function (value,index) {
                // if (!value==that.children('*:nth-child(3)').children('span').html()){
                    arr.push(name);
                    console.log(1)
                // }
                console.log(arr);
            })
            $(`<li type=${name}>`).html(`<span>${name}</span>
            <img src="../img/c-img/cha.png">`).appendTo('.c-xuan');
            flag=false;
        }

        else{
            flag=true;
        }

    })





});
