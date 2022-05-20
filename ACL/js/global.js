$(document).ready(function () {
  
  /*sticky*/
  window.onscroll = function () {
    myFunction();
  };

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  /*tabx hover效果*/
  $(".tabx li").hover(function () {
    $(this).toggleClass("sele");
  });
  $(".tabx .sele").hover(function () {
    $(this).addClass("sele");
  });
  /*首頁bn按鈕*/
  $(".bannerbx .buton ").hover(function () {
    $(this).addClass("animate__shakeX");
  });

  /*常見問題*/
  $(".qabx .qbx ").click(function () {
    if($(this).parent("li").hasClass('sele')){
      $(this).parent("li").removeClass("sele"); 
    } else {
      $(".qablock li").removeClass("sele");
      $(this).parent("li").addClass("sele");
    } 

  });

 
    


  /*首頁Linepay taiwanpay換圖*/
  /*$(".buton_02").hover(
    function () {
      $(".buton_02 img").attr("src", "images/button_02_hover.png");
      $(".buton_02").css("width", "150px");
    },
    function () {
      $(".buton_02 img").attr("src", "images/button_02.png");
      $(".buton_02").css("width", "140px");
    }
  );
  $(".buton_01").hover(
    function () {
      $(".buton_01 img").attr("src", "images/button_01_hover.png");
      $(".buton_01").css("width", "150px");
    },
    function () {
      $(".buton_01 img").attr("src", "images/button_01.png");
      $(".buton_01").css("width", "140px");
    }
  );*/
  
  
  /*首頁Linepay taiwanpay換圖*/
  $(".imgbxbuton").hover(function () {
    $(this).contents(".hover_bg_hide").toggleClass("hover_open");

  });
  


   /*social換圖*/
    if ($(window).width() < 767) {
     /*側欄浮動hover換圖*/
  $(".social01").hover(
    function () {
      $(".social01 img").attr("src", "images/social_01_hover.png");
    },
    function () {
      $(".social01 img").attr("src", "images/m_social_01.png");
    }
  );
  $(".social02").hover(
    function () {
      $(".social02 img").attr("src", "images/social_02_hover.png");
    },
    function () {
      $(".social02 img").attr("src", "images/m_social_02.png");
    }
  );
  $(".social03").hover(
    function () {
      $(".social03 img").attr("src", "images/social_03_hover.png");
    },
    function () {
      $(".social03 img").attr("src", "images/m_social_03.png");
    }
  );
  $(".social04").hover(
    function () {
      $(".social04 img").attr("src", "images/social_04_hover.png");
    },
    function () {
      $(".social04 img").attr("src", "images/m_social_04.png");
    }
  );
  $(".social05").hover(
    function () {
      $(".social05 img").attr("src", "images/social_05_hover.png");
    },
    function () {
      $(".social05 img").attr("src", "images/m_social_05.png");
    }
  );

    } else {

  /*側欄浮動hover換圖*/
  $(".social01").hover(
    function () {
      $(".social01 img").attr("src", "images/social_01_hover.png");
    },
    function () {
      $(".social01 img").attr("src", "images/social_01.png");
    }
  );
  $(".social02").hover(
    function () {
      $(".social02 img").attr("src", "images/social_02_hover.png");
    },
    function () {
      $(".social02 img").attr("src", "images/social_02.png");
    }
  );
  $(".social03").hover(
    function () {
      $(".social03 img").attr("src", "images/social_03_hover.png");
    },
    function () {
      $(".social03 img").attr("src", "images/social_03.png");
    }
  );
  $(".social04").hover(
    function () {
      $(".social04 img").attr("src", "images/social_04_hover.png");
    },
    function () {
      $(".social04 img").attr("src", "images/social_04.png");
    }
  );
  $(".social05").hover(
    function () {
      $(".social05 img").attr("src", "images/social_05_hover.png");
    },
    function () {
      $(".social05 img").attr("src", "images/social_05.png");
    }
  );
    }



  /*tab固定列*/

  $(function () {
    //			函式offset()的作用是返回呼叫者當前的位置
    //			獲取你所要開始固定的位置
    var top1 = $(".tabx ").offset().top;
    $(window).scroll(function () {
      //				動態獲取當前頁面的位置
      var win_top = $(this).scrollTop();
      //				動態獲取需要固定的div的位置
      var top = $(".tabx ").offset().top;
      //				把當前頁面位置和要固定div的位置想對比
      //				如果頁面位置大於等於需要固定的div位置說明此時需要固定了，只需要給它新增一個css樣式即可
      if (win_top >= top) {
        $(".tabx ").addClass("tabxfixed");
      }
      //把當前頁面位置和要固定div的位置想對比
      //				如果頁面位置小於需要固定的div位置說明此時不需要固定，只需要給它移除之前新增的css樣式即可
      if (win_top < top1) {
        $(".tabx ").removeClass("tabxfixed");
      }
    });
  });


  /*footer置底*/
  var $win = $(window);
  $win
    .bind("resize", function () {
      try {
        $(".contain").css(
          "min-height",
          $win.height() - $("footer").outerHeight() - $(".contain").offset().top
        );
      } catch (err) {}
    })
    .resize();
});


/*inad*/
$(window).scroll(function(){

  var a = $(document).height()
  var main =  a - $(window).height() - 150

    if ( $(window).scrollTop()  > main  )  {
      $(".inadmfiexed").addClass("inadm");
    }else{
      $(".inadmfiexed").removeClass("inadm");
    }


});


