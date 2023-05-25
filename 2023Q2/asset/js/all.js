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
      $('.gotop, .mediaIcons').fadeIn(300);
    } else {
      $('.gotop, .mediaIcons').fadeOut(300);
    }
  }).trigger('scroll'); // goTop鈕

  $('.gotop').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });
  var discountSwiper = new Swiper('[data-slider="discount"]', {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 35,
    centeredSlides: false,
    allowTouchMove: false,
    simulateTouch: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      enabled: true,
      clickable: true
    },
    breakpoints: {
      1279: {
        slidesPerView: 'auto',
        loop: false,
        spaceBetween: 20,
        centeredSlides: false,
        allowTouchMove: false,
        simulateTouch: false
      },
      767: {
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 20,
        centeredSlides: true,
        allowTouchMove: true,
        simulateTouch: true
      }
    },
    on: {
      resize: function resize() {
        if (Modernizr.mq('(max-width: 767px)')) {
          this.loopCreate();
          this.updateSlides();
          this.slideToLoop(0);
        } else {
          this.loopDestroy();
          this.updateSlides();
          this.slideTo(0);
        }
      }
    }
  });
  discountSwiper.autoplay.stop(); // 收合

  $('[data-collapse-action]').on('click', function (e) {
    e.preventDefault();
    $(this).closest('[data-collapse]').toggleClass('is-open').find('[data-collapse-content]').slideToggle();
  }); // 進場

  gsap.registerPlugin(ScrollTrigger);
  gsap.set('.banner-phone', {
    y: 70
  });
  gsap.to('.banner-phone', {
    duration: 1.2,
    y: 0,
    opacity: 1,
    ease: 'back.out(1.8)'
  });
  gsap.set('.banner-man img, .banner-woman img', {
    y: 60
  });
  gsap.to('.banner-man img, .banner-woman img', {
    duration: 1.2,
    delay: 0.8,
    y: 0,
    opacity: 1,
    ease: 'back.out(1.8)'
  });
  gsap.set('.giftCard.-left', {
    x: -100
  });
  gsap.to('.giftCard.-left', {
    duration: 0.6,
    x: 0,
    opacity: 1,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: '.gift-item.-left',
      start: 'top 80%'
    }
  });
  gsap.set('.giftCard.-right', {
    x: 100
  });
  gsap.to('.giftCard.-right', {
    duration: 0.6,
    x: 0,
    opacity: 1,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: '.gift-item.-right',
      start: 'top 80%'
    }
  });
  gsap.set('.giftCard.-hor', {
    y: 100
  });
  gsap.to('.giftCard.-hor', {
    duration: 0.6,
    y: 0,
    opacity: 1,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: '.gift-item.-bottom',
      start: 'top 80%'
    }
  });

  function done() {
    discountSwiper.autoplay.start();
    setTimeout(function () {
      $('.discount').css('opacity', '1');
      $('.discount-item').css('opacity', '1');
    }, 3000);
  }

  var tl = gsap.timeline();
  ScrollTrigger.create({
    animation: tl,
    trigger: '.block.-pk .block-content',
    start: 'top 80%'
  });

  if (Modernizr.mq('(max-width: 767px)')) {
    gsap.set('.discount', {
      y: 120
    });
    tl.to('.discount', {
      duration: 0.6,
      y: 0,
      opacity: 1
    }).call(done, null, '<');
  } else {
    gsap.set('.discount-item', {
      y: 120
    });
    tl.to('.discount-item', {
      duration: 0.6,
      y: 0,
      opacity: 1,
      stagger: 0.3
    }, '<0.3').call(done, null, '<');
  }

  gsap.set('.new-item.-left', {
    x: -100
  });
  gsap.to('.new-item.-left', {
    duration: 0.6,
    x: 0,
    opacity: 1,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: '.new-item.-left',
      start: 'top 80%'
    }
  });
  gsap.set('.new-item.-right', {
    x: 100
  });
  gsap.to('.new-item.-right', {
    duration: 0.6,
    x: 0,
    opacity: 1,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: '.new-item.-right',
      start: 'top 80%'
    }
  });
});