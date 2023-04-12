"use strict";

$(function () {
  // goTop鈕
  $('.gotop').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  }); // tab

  $('[data-tab-action]').on('click', function (e) {
    e.preventDefault();
    var $this = $(this),
        val = $this.data('tab-action');
    $this.closest('[data-tab]').find('[data-tab-action], [data-tab-content]').removeClass('active');
    $this.addClass('active').closest('[data-tab]').find('[data-tab-content="' + val + '"]').addClass('active');
  }); // 收合

  $('[data-collapse-action]').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('open').closest('[data-collapse]').find('[data-collapse-content]').slideToggle();
  }); // btn

  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  $('[data-btn]').on('click', function (e) {
    e.preventDefault();

    if (isMobile) {
      window.open('https://mobilebank.yuantabank.com.tw/YuantaBank-MobileBank-Gateway/getServ/openNewMobilebankApp', '_blank');
    } else {
      var val = $(this).data('btn');
      $('html, body').animate({
        scrollTop: $('.' + val).offset().top - 80
      }, 500);
    }

    ;
  });
  $('[data-btn-event]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('.event').offset().top - 130
    }, 500);
  });

  // 注意事項收合
  $(".notice_tit").click(function (e) {
      e.preventDefault();
      $(".notice_all").slideToggle(500);
      $(".arrow").toggleClass("active");
  });
});