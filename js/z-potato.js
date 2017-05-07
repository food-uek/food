/**
 * Created by hp1 on 2017/5/6.
 */
$(function(){
    function getstyle(card,content){
        $(card).on("touchstart",function(){
            $(card).removeClass('first');
            $(card).eq($(card).index(this)).addClass('first');
            $(content).hide();
            $(content).eq($(card).index(this)).show();//�����thisָ�����������Ԫ�ص��±�
        })
    }
    getstyle(".z-dapeifen",".z-cardt")
})
