$(document).ready(function () {
    $('.slider-worked').slick({
        dots: true,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }]
    });
    $('.slider-app').slick({
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }],
    });
});

$('.slider-clients-say').slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    autoplay: true,

});

$('.slider-technologies').slick({
    dots: true,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }]
});

var time = 1, cc = 1;
$(Window).scroll(function () {
    $('.counter').each(function () {
        var
            cPos = $(this).offset().top,
            topWindow = $(window).scrollTop();
        if (cPos < topWindow + 300) {
            if (cc < 2) {
                $('.counter').addClass('vizible');
                var
                    i = 1,
                    num = $(this).data('num'),
                    step = 1000 * time / num,
                    that = $(this),
                    int = setInterval(function () {
                        if (i <= num) {
                            that.html(i);
                        } else {
                            cc = cc + 2;
                            clearInterval(int);
                        }
                        i++;
                    }, step);
            }
        }
    });
});

AOS.init({
    duration: 2000,
});


