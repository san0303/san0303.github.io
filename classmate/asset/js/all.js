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
  }); // 收合

  $('[data-collapse-action]').on('click', function (e) {
    e.preventDefault();
    $(this).closest('[data-collapse]').toggleClass('is-open').find('[data-collapse-content]').slideToggle();
  }); // 進場

  AOS.init({
    duration: 800,
    once: true
  });
});