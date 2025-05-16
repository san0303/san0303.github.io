// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;

  var noop = function noop() {};

  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = window.console = window.console || {};

  while (length--) {
    method = methods[length]; // Only stub undefined methods.

    if (!console[method]) {
      console[method] = noop;
    }
  }
})(); // Place any jQuery/helper plugins in here.


(function (targetWidth) {
  var deviceWidth = screen.width;
  var ratio = deviceWidth / targetWidth;
  var viewport = document.querySelector('meta[name="viewport"]');

  if (ratio < 1) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=' + ratio + ', minimum-scale=' + ratio + ', maximum-scale=' + ratio + ', user-scalable=yes');
  }
})(375);

$(function () {
  var navSwiper = new Swiper('[data-slider="nav"]', {
    slidesPerView: 'auto',
    loop: false,
    freeMode: {
      enabled: true
    }
  }); // 錨點

  $('[data-anchor-btn]').on('click.anchor', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('[data-anchor-block="' + $(this).data('anchor-btn') + '"]').offset().top
    }, 300);
  });
  $(window).on('scroll', function () {
    // 滾到區塊亮相對應按鈕
    $('[data-anchor-wrap]').each(function (index) {
      var triggerTop = $(this).offset().top - $(window).height() / 4,
          triggerBottom = triggerTop + $(this).outerHeight(),
          comBottom = $('[data-nav]').offset().top + $('[data-header]').outerHeight();

      if (comBottom > triggerTop && comBottom < triggerBottom) {
        var val = $(this).data('anchor-wrap');
        $('[data-anchor-btn]').removeClass('-active');
        $('[data-anchor-btn="' + val + '"]').addClass('-active');
        navSwiper.slideTo(val - 1);
      }
    });
  }).trigger('scroll');
  new Swiper('[data-slider="card"]', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 32,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next.common-next',
      prevEl: '.swiper-button-prev.common-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      enabled: true,
      clickable: true
    },
    breakpoints: {
      1539: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20
      },
      1023: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },
      767: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20
      }
    }
  });
  new Swiper('[data-slider="measure"]', {
    slidesPerView: 3,
    spaceBetween: 31.5,
    allowTouchMove: false,
    simulateTouch: false,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next.measure-next',
      prevEl: '.swiper-button-prev.measure-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      enabled: true,
      clickable: true
    },
    breakpoints: {
      1023: {
        slidesPerView: 3,
        spaceBetween: 16,
        allowTouchMove: false,
        simulateTouch: false
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 16,
        allowTouchMove: true,
        simulateTouch: true
      }
    }
  }); // tab

  $('[data-tab-btn]').on('click.tab', function (e) {
    e.preventDefault();
    var val = $(this).data('tabBtn');
    $('[data-tab-btn], [data-tab-block]').removeClass('-active');
    $(this).addClass('-active');
    $('[data-tab-block="' + val + '"]').addClass('-active');
    $('.tab-nav').toggleClass('-r', val === '02');
  });
});