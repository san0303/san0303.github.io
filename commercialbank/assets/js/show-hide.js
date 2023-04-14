"use strict";
$(function() {
    function a() {
        $(".remarksWrapper .remarksTitle").removeClass("active"),
        $(".remarksWrapper .remarksCont").slideUp(300)
    }
    $(".remarksTitle").on("click", function(o) {
        var t = $(this).attr("ref");
        $(o.target).is(".active") ? a() : (a(),
        $(this).addClass("active"),
        $(".remarksWrapper " + t).slideDown(300)),
        o.preventDefault()
    })
});
