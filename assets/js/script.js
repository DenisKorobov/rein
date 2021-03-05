$(document).ready(function () {
    $('.slider__container').bxSlider({
        pagerCustom: '.slider__pager',
        controls: false
    });
    $('.footer__arrow').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
    });
});