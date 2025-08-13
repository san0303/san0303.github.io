// Place any jQuery/helper plugins in here.
(function (targetWidth) {
  var deviceWidth = screen.width;
  var ratio = deviceWidth / targetWidth;
  var viewport = document.querySelector('meta[name="viewport"]');

  if (ratio < 1) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=' + ratio + ', minimum-scale=' + ratio + ', maximum-scale=' + ratio + ', user-scalable=yes');
  }
})(375);

$(function () {
  // 錨點
  $('[data-anchor-btn]').on('click.anchor', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#".concat($(this).data('anchor-btn'))).offset().top
    }, 300);
    $('body').removeClass('-menuOpen');
  }); 
  // 選單
  $('[data-burger]').on('click.burger', function () {
    $('body').toggleClass('-menuOpen');
  });

  var resizeTimer;
  $(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      var collapseContentH = $('[data-collapse-content]>div').outerHeight() + 35;
      $('[data-collapse-content]').css('--openH', "".concat(collapseContentH, "px"));
    }, 300);
  }).trigger('resize');
  $('[data-collapse-action]').on('click', function (e) {
    e.preventDefault();
    $(this).closest('[data-collapse]').toggleClass('is-open');
    $('[data-collapse-action]').text($(this).closest('[data-collapse]').hasClass('is-open') ? '收合更多' : '展開看更多');
  });
});