$(function () {
    /* 메뉴 ->배경같이 */
    $('.nav_bg, ul.gnb>li').hover(function () {
        $('ul.sub,.nav_bg').stop().slideDown();
    }, function () {
        $('ul.sub,.nav_bg').stop().slideUp();
    })

    /* 슬라이드 ->위~아래 */
    let slideI = 0;

    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI =0 ;
        }
        $('.main_visual ul.slide').animate({
            top: slideI*(-100)+'%'
        },500)
    },3000)


    /* 모달 */
    $('section.notice ul li').eq(0).click(function(){
        $('.modal').fadeIn();
    });
    $('.x_btn').click(function(){
        $('.modal').fadeOut();
    });

})