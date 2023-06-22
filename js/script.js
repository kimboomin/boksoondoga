$(document).ready(function(){
    
    // sec-7 마우스 이벤트로 mouseenter 적용, 삼각형 도형버튼도 같이 돌아가기
    $('.menu-wrap li').mouseenter(function(){
        $(this).children('.submenu').stop().slideDown();
        $(this).find('.svg-downarrow').stop().css({rotate:'180deg'});
       
    });

    $('.menu-wrap li').mouseleave(function(){
        $(this).children('.submenu').stop().slideUp();
        $(this).find('.svg-downarrow').stop().css({rotate:'0deg'});
    });

    // 미디어쿼리 참고
    let ww = $(window).width();
    // 윈도우의 너비값을 변수에 저장

    layout();
    // 전역에 변수 호출

    function layout(){
        if(ww > 1200){
            // 비디오 커지게 (1200이상일때는 기능 제거)
            $(window).scroll(function(){
                
                let h = $(window).scrollTop();
                console.log(h);

                // 300~1000
                // const y = ah + b
                // 0.8 = 300 * a + b
                // 1 = 1000 * a + b
                // a = 1/3500,b = 5/7
                const y = 1/3500 * h + 5/7;

                $('#mainMP4').css({
                    transform: `scale(${y})`
                });
            

                // sec-2 왼쪽 고정 (1200이상일때는 기능 제거)
                const sec2 = $('.sec-2').offset().top;
                const sec3 = $('.sec-3').offset().top-550;

                if(h >= sec2 && h < sec3){
                    $('.sec-2 p.fixed-txt').css({position:'fixed',left:'40px'});
                }else{
                    $('.sec-2 p.fixed-txt').css({position:'absolute',left:'40px'});
                }

            });


            // 햄버거 버튼 누르면 나오는 화면
            $('#menu-btn').click(function(){
                $('.menu-bar-box').toggleClass('active');
            });



        }else{
        // 1200부터 햄버거 버튼 누르면 나오는 화면
        $('#menu-btn').click(function(){
            $('.m-menu-bar-box').toggleClass('active');
        });


        }
    }

    


});