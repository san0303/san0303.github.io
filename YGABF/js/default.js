$(document).ready(function() {
    // TOP button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.top').addClass('show');
        } else {
            $('.top').removeClass('show');
        }
    });
    $('.top').click(function () {
        $('html,body').animate({
            scrollTop:$('html,body').offset().top
        },900);
    })
});