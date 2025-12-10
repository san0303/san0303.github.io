$(function () {

    //警語說明
    $(".notice_tit").each(function (e) {

        var _number = e;
        $(this).click(function () {
            $(this).toggleClass("-open");
            $(".notice_txt").eq(_number).slideToggle(500);
        });
    });

});