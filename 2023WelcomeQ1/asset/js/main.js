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
    allowTouchMove: false,
    simulateTouch: false,
    pagination: {
      el: '.swiper-pagination',
      enabled: true,
      clickable: true
    },
    breakpoints: {
      767: {
        loop: true,
        loopAdditionalSlides: 4,
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
  var baggageSwiper = new Swiper('[data-slider="baggage"]', {
    slidesPerView: 4,
    loop: false,
    watchOverflow: true,
    centerInsufficientSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
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
        loop: true,
        loopAdditionalSlides: 5,
        centeredSlides: true
      }
    },
    on: {
      resize: function resize() {
        if (Modernizr.mq('(max-width: 1023px)')) {
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
  }); // 收合

  $('[data-collapse-action]').on('click', function (e) {
    e.preventDefault();
    $(this).closest('[data-collapse]').toggleClass('is-open').find('[data-collapse-content]').slideToggle();
  });
  gsap.to('.banner-airplane', {
    duration: 1,
    repeat: -1,
    yoyo: true,
    y: 7,
    ease: 'power1.inOut'
  });
  gsap.set('.banner-airplane', {
    x: '-100vw'
  });
  gsap.to('.banner-airplane', {
    duration: 2,
    x: 0,
    ease: 'power1.out'
  });
  gsap.to('.banner-cloud.-left', {
    duration: 50,
    repeat: -1,
    x: '-130vw',
    ease: 'none'
  });
  gsap.to('.banner-cloud.-right', {
    duration: 60,
    repeat: -1,
    delay: 15,
    x: '-130vw',
    ease: 'none'
  });
  gsap.set('.discount-bottom', {
    x: 100
  });
  gsap.to('.discount-bottom', {
    duration: 0.8,
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.discount-bottom',
      start: 'top 80%'
    }
  });
  gsap.set('.envelope-stamp', {
    scale: 1.8
  });
  gsap.to('.envelope-stamp', {
    duration: 0.5,
    scale: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: '.envelope',
      start: 'top 75%'
    }
  });
});