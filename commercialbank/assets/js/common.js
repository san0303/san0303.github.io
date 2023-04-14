'use strict';

$(function () {
  // Header Scroll
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
      $('header').addClass('scrolling');
    } else {
      $('header').removeClass('scrolling');
    }
  }); // Social media

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
      $('.mediaIcons').fadeIn(300);
    } else {
      $('.mediaIcons').fadeOut(300);
    }
  }); // Go Top Icon

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 600) {
      $('.goTop').fadeIn(300);
    } else {
      $('.goTop').fadeOut(300);
    }
  });
  $('.goTop').on('click', function () {
    $('body, html').animate({
      scrollTop: 0
    }, 400);
  }); // Tab Click

  function tabRemoveClass() {
    $('.tabs').removeClass('active');
    $('.tabCont').removeClass('active');
  }

  $('.tabs').on('click', function () {
    var tabAttr = $(this).attr('data-rel');
    tabRemoveClass();
    $(this).addClass('active');
    $('#' + tabAttr).addClass('active');
  }); // FAQ Section

  function closeAnswer() {
    $('.faqCont .faqQuestion').removeClass('active');
    $('.faqCont .faqAnswer').slideUp(300);
  }

  $('.faqQuestion').on('click', function (e) {
    var faqAttr = $(this).attr('href');

    if ($(e.target).is('.active')) {
      closeAnswer();
    } else {
      closeAnswer();
      $(this).addClass('active');
      $('.faqCont ' + faqAttr).slideDown(300);
    }

    e.preventDefault();
  });
});