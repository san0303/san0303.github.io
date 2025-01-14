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
  // 選單
  $('[data-burger]').on('click.burger', function () {
    $('body').toggleClass('-menuOpen');
  }); // 錨點

  $('[data-anchor-btn]').on('click.anchor', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#".concat($(this).data('anchor-btn'))).offset().top
    }, 300);
    $('body').removeClass('-menuOpen');
  });
  new Swiper('[data-slider="icashpay"]', {
    watchOverflow: true,
    slidesPerView: 2,
    spaceBetween: 15,
    simulateTouch: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      enabled: true,
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 0,
        simulateTouch: false
      }
    }
  });
  new Swiper('[data-slider="new"]', {
    slidesPerView: 1,
    simulateTouch: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      enabled: true,
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 0,
        simulateTouch: false
      }
    }
  }); // 收合

  $('[data-collapse-action]').on('click.collapse', function (e) {
    e.preventDefault();
    $(this).closest('[data-collapse]').toggleClass('is-open').find('[data-collapse-content]').slideToggle();
  });
});