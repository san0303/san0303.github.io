$(function () {
  // 進場
  $('[data-animate-block]').each(function () {
    $(this).find('[data-animate]').each(function (index, el) {
      var delay = 0.3 * index + 's';

      if (index > 0) {
        $(this).css('animation-delay', delay);
      }
    });
  });
  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop(); // 進場

    var halfScreenH = $(window).height() / 1.5;
    $('[data-animate-block]').each(function (index, el) {
      if (scrollTop > $(el).offset().top - halfScreenH) {
        $(el).attr('data-animate-block', 'active');
      }
    }); // tool show/hide

    if (scrollTop > 200) {
      $('.mediaIcons').fadeIn(300);
    } else {
      $('.mediaIcons').fadeOut(300);
    }

    if (scrollTop > 600) {
      $('.gotop').fadeIn(300);
    } else {
      $('.gotop').fadeOut(300);
    } // tab


    var headerTop = $('[data-header]').offset().top + $('[data-header]').outerHeight();
    var tabTop = $('[data-nav]').offset().top,
        $fixed = $('[data-fixed]');

    if (headerTop > tabTop) {
      $fixed.addClass('-fixed');
    } else {
      $fixed.removeClass('-fixed');
    }
  }).trigger('scroll'); // goTop鈕

  $('.gotop').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 400);
  }); // 收合

  $('[data-collapse-action]').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('open').closest('[data-collapse]').find('[data-collapse-content]').slideToggle();
  });
  var swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 115,
    loopAdditionalSlides: 3,
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1024: {
        spaceBetween: 20
      }
    }
  });
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  $('[data-login]').on('click', function (e) {
    if (!isMobile) {
      e.preventDefault();
      window.open('https://www.yuantabank.com.tw/bankwebIMG/event/Bank_Act2019/MobileBankingAPP/index.html#/1', '_blank');
    } else {
      return;
    }
  }); // tab

  $('[data-tab]').on('click', function (e) {
    e.preventDefault();
    var val = $(this).data('tab');
    $('[data-tab], [data-tab-content]').removeClass('-active');
    $(this).addClass('-active');
    $('[data-tab-content="' + val + '"]').addClass('-active');
    $('html, body').scrollTop($('[data-nav]').offset().top);
    $('[data-animate-block]').attr('data-animate-block', '');
    $(window).trigger('scroll');
  });

  if (location.href.indexOf('?') != -1) {
    var paramAry = location.href.split('?')[1].split('&'),
        tabStr = '';
    paramAry.forEach(function (item) {
      if (item.indexOf('tab') != -1) {
        tabStr = item;
      }
    });
    var name = tabStr.split('=')[1];
    $('[data-tab], [data-tab-content]').removeClass('-active');
    $('[data-tab="' + name + '"]').addClass('-active');
    $('[data-tab-content="' + name + '"]').addClass('-active');
    $('html, body').scrollTop($('[data-nav]').offset().top);
    $(window).trigger('scroll');
  }
});