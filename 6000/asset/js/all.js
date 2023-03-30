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
  }); // 錨點

  $('[data-burger]').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('-anchorOpen');
  });
  $('[data-anchor-btn]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('[data-anchor-block="' + $(this).data('anchor-btn') + '"]').offset().top
    }, 300);
    $('body').removeClass('-anchorOpen');
  }); // tab

  $('[data-tab-btn]').on('click', function (e) {
    e.preventDefault();
    var val = $(this).data('tabBtn');
    $('[data-tab-btn], [data-tab-content]').removeClass('-active');
    $(this).addClass('-active');
    $('[data-tab-content="' + val + '"]').addClass('-active');
  });

  for (var i = 1; i < 3; i++) {
    new Swiper('[data-slider="step0' + i + '"]', {
      slidesPerView: 'auto',
      spaceBetween: 80,
      centerInsufficientSlides: true,
      allowTouchMove: false,
      simulateTouch: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        enabled: true,
        clickable: true
      },
      breakpoints: {
        1023: {
          slidesPerView: 'auto',
          spaceBetween: 50,
          allowTouchMove: false,
          simulateTouch: false
        },
        767: {
          slidesPerView: 1,
          spaceBetween: 0,
          allowTouchMove: true,
          simulateTouch: true
        }
      }
    });
  }

  var giftSwiper = new Swiper('[data-slider="gift"]', {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 45,
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
      1023: {
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
        spaceBetween: 17,
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
  giftSwiper.autoplay.stop(); // 收合

  $('[data-collapse-action]').on('click', function (e) {
    e.preventDefault();
    $(this).closest('[data-collapse]').toggleClass('is-open').find('[data-collapse-content]').slideToggle();
  }); // 進場

  gsap.registerPlugin(ScrollTrigger);
  gsap.set('.banner-wording', {
    y: '0%'
  });
  gsap.to('.banner-wording', {
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: 'power1.out'
  });
  gsap.set('.banner-bag', {
    x: '200%',
    y: '200%',
    scale: 0.5
  });
  gsap.to('.banner-bag', {
    duration: 0.8,
    delay: 1,
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    ease: 'power1.out'
  });
  gsap.set('.banner-coin.-right', {
    x: '-200%',
    scale: 0.5
  });
  gsap.to('.banner-coin.-right', {
    duration: 0.8,
    delay: 1,
    x: 0,
    scale: 1,
    opacity: 1,
    ease: 'power1.out'
  });
  gsap.set('.banner-coin.-left', {
    x: '200%',
    y: '-200%',
    scale: 0.5
  });
  gsap.to('.banner-coin.-left', {
    duration: 0.8,
    delay: 1,
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    ease: 'power1.out'
  });
  gsap.set('.banner-coin.-mb', {
    x: '200%',
    scale: 0.5
  });
  gsap.to('.banner-coin.-mb', {
    duration: 0.8,
    delay: 1,
    x: 0,
    scale: 1,
    opacity: 1,
    ease: 'power1.out'
  });
  gsap.set('.banner-items', {
    scale: 0.5
  });
  gsap.to('.banner-items', {
    duration: 0.8,
    delay: 0.5,
    scale: 1,
    opacity: 1,
    ease: 'power1.out'
  });
  gsap.set('.way-card.-left', {
    x: '-50%'
  });
  gsap.to('.way-card.-left', {
    duration: 0.8,
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.way',
      start: 'top 80%'
    }
  });
  gsap.set('.way-card.-right', {
    x: '50%'
  });
  gsap.to('.way-card.-right', {
    duration: 0.8,
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.way',
      start: 'top 80%'
    }
  });
  gsap.set('.step-item', {
    y: '50%'
  });
  gsap.to('.step-item', {
    duration: 0.8,
    y: 0,
    opacity: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.tab',
      start: 'top 80%'
    }
  });
  gsap.set('.advance', {
    y: '50%'
  });
  gsap.to('.advance', {
    duration: 0.8,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.block.-bank .block-wrap',
      start: 'top 80%'
    }
  });
  var tl = gsap.timeline();
  gsap.set('.gift-item.swiper-slide-prev', {
    y: '50%'
  });
  gsap.set('.gift-item:not(.swiper-slide-duplicate)', {
    y: '50%'
  });
  tl.to('.gift-item.swiper-slide-prev', {
    duration: 0.8,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.block.-discount .block-wrap',
      start: 'top 80%'
    }
  }).to('.gift-item:not(.swiper-slide-duplicate)', {
    duration: 0.8,
    y: 0,
    opacity: 1,
    stagger: 0.3
  }, '<0.3').call(autoPlayStart, null, '<');
  ScrollTrigger.create({
    animation: tl,
    trigger: '.block.-discount .block-wrap',
    start: 'top 80%'
  });

  function autoPlayStart() {
    giftSwiper.autoplay.start();
  }
});