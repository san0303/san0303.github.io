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

window.onload = function () {
  // $('body').removeClass('-loading');
  // 收合
  $('[data-collapse-action]').on('click', function (e) {
    e.preventDefault();
    $(this).closest('[data-collapse]').toggleClass('is-open').find('[data-collapse-content]').slideToggle();
  });
  var subjectSwiper = new Swiper('[data-swiper="subject"]', {
    slidesPerView: 3,
    centeredSlides: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    hashNavigation: true,
    pagination: {
      el: '.swiper-pagination'
    },
    breakpoints: {
      // when window width is >= 1023px
      1023: {
        slidesPerView: 2,
        centeredSlides: false
      },
      767: {
        slidesPerView: 1.2,
        centeredSlides: true
      }
    }
  });
  var stepSwiper = new Swiper('[data-swiper="step"]', {
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      // when window width is >= 1023px
      1023: {
        slidesPerView: 1
      }
    }
  });

  if (location.hash.split('#')[1] > 2 && location.hash.split('#')[1] < 9) {
    if (Modernizr.mq('(max-width: 1023px)')) {
      $(window).scrollTop($('#2').offset().top);
    } else {
      $(window).scrollTop($('[data-hash="' + location.hash.split('#')[1] + '"]').offset().top - 140);
    }
  } // 進場


  AOS.init({
    duration: 800,
    once: true
  });
};