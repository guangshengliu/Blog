//当前页面在第几页
var page = 0;

$('.bg').on('click',()=>{
    if( page == 0 ){
        $('.table').animate({
            top:-100+'vh'
        },500)
        page = 1;
    }
})

$('.up').on('click',()=>{
    if( page == 1 ){
        $('.table').animate({
            top:0+'vh'
        },500)
        page = 0;
    }
})

$('.window').on("mousewheel DOMMouseScroll", function (e) {
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
    if (delta > 0) {
        // 向上滚
        if (page == 1) {
            $('.table').animate({
                top:0+'vh'
            },500)
            page = 0;
        }
    } else if (delta < 0) {
        // 向下滚
        if (page == 0) {
            $('.table').animate({
                top:-100+'vh'
            },500)
            page = 1;
        }
    }
});

time();
setInterval(time,1000);
//time
function time() {
    var date=new Date();
    var hour=date.getHours();
    var min=date.getMinutes();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();

    if(hour>=0&&hour<=9){
        hour='0'+hour;
    }
    if(min>=0&&min<=9){
        min='0'+min;
    }

    $('.bg h1').html(hour+':'+min);
    $('.bg p').html(year+'年'+month+'月'+day+'日');
}
