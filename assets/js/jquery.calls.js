"use strict";

$(document).ready(function() {

    $(".av-slider-home").slick({
        dots: true,
        arrows: true,
        prevArrow: $('.av-slider-prev'),
        nextArrow: $('.av-slider-next'),
        infinite: true,
        speed: 700, // transition speed
        autoplaySpeed: 3000, // slide duration
        autoplay: false,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        //adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 1
                }
            }
        ]    
    });


    $(".av-slider-content").slick({
        dots: true,
        arrows: false,
        prevArrow: $('.av-slider-prev'),
        nextArrow: $('.av-slider-next'),
        infinite: true,
        speed: 700, // transition speed
        autoplaySpeed: 3000, // slide duration
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear'
    });
  


});


const $status = $('.av-slick-counter');

$(".av-slider-home").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    let i = (currentSlide ? currentSlide : 0) + 1;
    //$status.text(i + '/' + slick.slideCount);
    if (i < 9) {
        $status.text('0' + i);
    } else {
        $status.text(i);
    }
});
