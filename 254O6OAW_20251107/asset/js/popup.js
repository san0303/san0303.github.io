$(function () {
  // 點擊按鈕或文字關閉
    $('.popup_btn, .popup_txt').click(function() {
        $('.offerAD').hide();
    });

    // 點擊 offerAD 外部關閉彈窗
    $(document).mouseup(function(e) {
        var $popup = $('.offerAD'); // 蓋板本體
        var $content = $popup.find('.offerAD-cont'); // 假設你的彈窗內容有一個內層容器 class

        // 若點擊目標不在內容區域內，且不等於內容本身，就關閉彈窗
        if (!$content.is(e.target) && $content.has(e.target).length === 0) {
            $popup.hide();
        }
    });

   //注意事項
    $(".notice-tit").each(function (e) {

        var _number = e;
        $(this).click(function () {
            $(this).toggleClass("-open");
            $(".notice-txt").eq(_number).slideToggle(500);
        });
    });
});
