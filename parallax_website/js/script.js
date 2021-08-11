// 辅助函数
function $(id){
    return document.getElementById(id);
}
//获取到一些关键元素
let stars=$('stars');
let moon=$('moon');
let mountain_behind=$('mountain_behind');
let text=$('text');
let btn=$('btn');
let mountain_front=$('mountain_front');

//给窗口添加鼠标滚动事件
window.addEventListener('scroll',function(){
    let value=window.scrollY
    stars.style.left=value*0.25+'px';
    moon.style.top=value*1.2+'px';
    mountain_behind.style.top=value*0.5+'px';
    text.style.marginRight=value*4+'px';
    text.style.marginTop=value*0.5+'px';
    btn.style.marginRight=value*1.5+'px';
    btn.style.marginTop=value*0.5+'px';
})

window.onload = function () {
    var rocket = document.getElementById("rocket");
    var timer = null;
    // 获取当前滚动高度
    var pagelookheight = document.documentElement.clientHeight;

    window.onscroll = function () {
        var backtop = document.documentElement.scrollTop;
        if (backtop >= pagelookheight) {
            rocket.style.display = "block";
        } else {
            rocket.style.display = "none";
        }
    }

    rocket.onclick = function () {
        timer = setInterval(function () {
            var backtop = document.documentElement.scrollTop;
            var speedtop = backtop / 6;
            document.documentElement.scrollTop = backtop - speedtop;
            if (backtop == 0) {
                clearInterval(timer);
            }
        }, 30);
    }
}