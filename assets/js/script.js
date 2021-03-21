$(document).ready(function () {

    $('.slider__container').bxSlider({
        pagerCustom: '.slider__pager',
        controls: false,
        touchEnabled: false
    });

    $('.footer__arrow').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
    });

    $('.header__callback-button, .header__feedback-button, .contacts__button, .partner__button').on('click', function () {
        $('.callback, .callback-bg').fadeIn();
        return false;
    });

    $('.callback-bg, .callback-close').on('click', function () {
        $('.callback, .callback-bg').fadeOut();
    });

    $('.header__menu-level-1').on('mouseenter', function () {
        $(this).find('.header__menu-list').stop().slideDown(200);
    });

    $('.header__menu-level-1').on('mouseleave', function () {
        $(this).find('.header__menu-list').stop().slideUp(200);
    });

});