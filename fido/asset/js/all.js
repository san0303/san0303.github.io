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
  // tool show/hide
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
      $('.gotop').fadeIn(300);
    } else {
      $('.gotop').fadeOut(300);
    }
  }).trigger('scroll'); // goTop鈕

  $('.gotop').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  }); // 選單

  $('.header-burger button').on('click', function () {
    $('body').toggleClass('-menuOpen');
  }); // tab

  $('[data-tab-btn]').on('click', function () {
    var val = $(this).data('tabBtn');
    $(this).closest('[data-tab]').find('[data-tab-btn], [data-tab-all], [data-tab-panel]').removeClass('-active');
    $(this).addClass('-active');
    $(this).closest('[data-tab]').find('[data-tab-panel="' + val + '"]').addClass('-active');
  });
  $('[data-tab-all]').on('click', function () {
    $(this).closest('[data-tab]').find('[data-tab-btn]').removeClass('-active');
    $(this).addClass('-active');
    $(this).closest('[data-tab]').find('[data-tab-panel]').addClass('-active');
  }); // 錨點

  $('[data-anchor-btn]').on('click', function () {
    $('html, body').animate({
      scrollTop: $('[data-anchor-block="' + $(this).data('anchor-btn') + '"]').offset().top
    }, 300);
    $('body').removeClass('-menuOpen');
  });
  $('[data-slider]').each(function () {
    new Swiper($(this).find('.swiper'), {
      slidesPerView: 1,
      spaceBetween: 60,
      autoHeight: true,
      navigation: {
        nextEl: $(this).find('.swiper-button-next'),
        prevEl: $(this).find('.swiper-button-prev')
      },
      on: {
        init: function init() {
          if ($(this.slides[this.activeIndex]).find('.step-pic').hasClass('-pc')) {
            this.$el.closest('[data-slider]').addClass('-pc');
          } else {
            this.$el.closest('[data-slider]').removeClass('-pc');
          }
        },
        slideChange: function slideChange() {
          if ($(this.slides[this.activeIndex]).find('.step-pic').hasClass('-pc')) {
            this.$el.closest('[data-slider]').addClass('-pc');
          } else {
            this.$el.closest('[data-slider]').removeClass('-pc');
          }
        }
      }
    });
  }); // 收合

  $('[data-collapse-action]').on('click', function (e) {
    e.preventDefault();
    $(this).closest('[data-collapse]').toggleClass('-open').find('[data-collapse-content]').slideToggle();
  }); // 進場

  AOS.init({
    duration: 800,
    once: true
  });
});