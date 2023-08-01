$(function () {
    // 메인비쥬얼 다음페이지 웨이트 타임
    $('.visual_wrap').on('init afterChange', function (e, s, c) {
        const current = $('.visual_wrap .slick-current');
        current.addClass('on').siblings().removeClass('on');

        $('.main_visual .visual_page span').text(c ? (c + 1) : 1);
        $('.main_visual .visual_page strong').text(s.slideCount);

        $('.main_visual .visual_page li').eq(0).addClass('on')
        $('.main_visual .visual_page li').eq(c).addClass('on')
            .siblings().removeClass('on');

        $('.main_visual .visual_page li').on('click', function (e) {
            e.preventDefault();
            const idx = $(this).index(); //0, 1, 2
            $('.visual_wrap').slick('slickGoTo', idx)
        })
    });


    // 메인비쥬얼 : 이미지 다음페이지
    $('.visual_wrap').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
    });

    // 메인비쥬얼 : 화살표
    $('.main_visual .main_arrows .left').on('click', function () {
        $('.visual_wrap').slick('slickPrev')
    })
    $('.main_visual .main_arrows .right').on('click', function () {
        $('.visual_wrap').slick('slickNext')
    })








    // 메인이벤트 : 이미지 다음페이지
    $('.event_bg').slick({
        arrows: false,
        // autoplay: false,
        // autoplaySpeed: 3000,
        speed: 500,
        fade: true,
    });

    // 메인이벤트 : 화살표

    $('.main_event .event_box .ev').on('mouseenter', function () {
        let idx = $(this).index();
        $('.event_bg').slick('slickGoTo', idx)
    })

});