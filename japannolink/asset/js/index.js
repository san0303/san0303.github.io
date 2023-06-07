
var is_forPC = document.body.clientWidth > 1024; //forPC

$(document).ready(function() {
    //選單
    if(!is_forPC){

        $('.hbg').click(function () {
            $(this).toggleClass('open');
            $('header .list').fadeToggle();
        })
        $('header li').click(function () {
            $('.hbg').removeClass('open');
            if ($(window).width() <= 600) {
                $('header .list').fadeOut();
            }
        })
        $('header .list').click(function () {
            $('.hbg').removeClass('open');
            $('header .list').fadeOut();
        })
    }

});

$(document).ready(function() {
    const goTop = document.querySelector('.top');
    goTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    window.addEventListener('scroll', function(e){
        if( this.scrollY >= 300){
            goTop.classList.add("show");
        }else{
            goTop.classList.remove("show");
        }
    })
});