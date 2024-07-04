$(function(){
    $(".slide .packUp").click(function(){
        if($('.slide .ewm').css('left')=='0px'){
            $('.slide .ewm').animate({'left':-60},500);
            $(this).addClass('u-active');
        }else{
            $('.slide .ewm').animate({'left':0},200);
            $(this).removeClass('u-active');
        }
    })
    $('.slide .ewm li a').hover(function(){
        $(this).addClass('u-active').children('img').show(300);
    },function(){
        $(this).removeClass('u-active').children('img').hide(300);
    });
});
// 左侧悬浮效果

// 悬浮标题
$(window).scroll(function() {
    if ($(window).scrollTop() > 240) {
        $(".m-dettitle").fadeIn(400);
    } else {
        $(".m-dettitle").fadeOut(400);
    }
});
// 悬浮标题
function login() {
    // opt = document.getElementById("opt2login").value;
    // if (opt == "mail") {
    //     document.getElementById('loginform').submit();
    // }
    // else if (opt == "oa_normal") {
    //     document.getElementById("loginform").action = "http://oa.ahedu.gov.cn/oa/client/loginByWeb";
    //     document.getElementById("F_user").name = "uid";
    //     document.getElementById("F_password").name = "password";
        document.getElementById('loginform').submit();
    // }
}
