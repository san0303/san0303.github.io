var IndexSwiper;
$(document).ready(function () {
  
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
{/*首頁swiper*/
   IndexSwiper = new Swiper(".index_swiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    freeMode: true,
    autoplay: {
      disableOnInteraction: false,
    },
    loop:true,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },


    
  });}
else {
  /*首頁swiper*/
   IndexSwiper = new Swiper(".index_swiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    freeMode: true,
    autoplay: {
      disableOnInteraction: false,
    },
    loop:true,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      400: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 45,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 45,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 45,
      },
    },

    
  });
}

  /*內頁swiper _colum01*/
  var mswiper1_1 = new Swiper(".inner_colum01", {
    loop:true,
    autoplay: {
      disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

  });

  /*內頁swiper _colum02*/
  var mswiper2_1 = new Swiper(".inner_colum02", {
    loop:true,
    autoplay: {
      disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },


  });
  var mswiper2_2 = new Swiper(".inner_colum02-1", {
    loop:true,
    autoplay: {
      disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },


  });
  /*內頁swiper _colum01*/
  var swiper = new Swiper(".inner_colum03", {
    loop:true,
    autoplay: {
      disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      

  });




  //以下為大網//
  //步驟圖第一層輪播//
  var galleryThumbs1_1 = new Swiper(".gallery-thumbs", {
    spaceBetween: 0,
    slidesPerView: 4,
    direction: "vertical",
    watchSlidesVisibility: true, //防止不可点击
    autoplay: {
      disableOnInteraction: false,
    },
    //autoHeight: true,
  });
  var galleryTop1_1 = new Swiper(".gallery-top", {
    direction: "horizontal",
    slidesPerView: 1,
    loop:true,
    autoplay: {
      disableOnInteraction: false,
    },
    spaceBetween: 20,
    thumbs: {
      swiper: galleryThumbs1_1,
    },
  });

  //步驟圖第一層輪播切換//
  var galleryThumbs1_2 = new Swiper(".gallery-thumbs1-1", {
    spaceBetween: 0,
    slidesPerView: 1,
    direction: "vertical",
    watchSlidesVisibility: true, //防止不可点击
    autoplay: {
      disableOnInteraction: false,
    },
    //autoHeight: true,
  });
  var galleryTop1_2 = new Swiper(".gallery-top1-1", {
    direction: "horizontal",
    slidesPerView: 1,
    loop:true,
    autoplay: {
      disableOnInteraction: false,
    },
    spaceBetween: 20,
    thumbs: {
      swiper: galleryThumbs1_2,
    },
  });


  //步驟圖第二層輪播//
  var galleryThumbs2_1 = new Swiper(".gallery-thumbs2", {
    spaceBetween: 20,
    slidesPerView: 4,
    direction: "vertical",
    watchSlidesVisibility: true, //防止不可点击
    autoplay: {
      disableOnInteraction: false,
    },
    autoHeight: true,
  });
  var galleryTop2_1 = new Swiper(".gallery-top2", {
    direction: "horizontal",
    slidesPerView: 1,
    loop:true,
    spaceBetween: 20,
    autoplay: {
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: galleryThumbs2_1,
    },
  });

//步驟圖第二層輪播切換//
  var galleryThumbs2_2 = new Swiper(".gallery-thumbs2-1", {
    spaceBetween: 0,
    slidesPerView: 4,
    direction: "vertical",
    watchSlidesVisibility: true, //防止不可点击
    autoplay: {
      disableOnInteraction: false,
    },
    //autoHeight: true,
  });
  var galleryTop2_2 = new Swiper(".gallery-top2-1", {
    direction: "horizontal",
    slidesPerView: 1,
    loop:true,
    autoplay: {
      disableOnInteraction: false,
    },
    spaceBetween: 20,
    thumbs: {
      swiper: galleryThumbs2_2,
    },
  });
  //步驟圖第三層輪播//
  var galleryThumbs = new Swiper(".gallery-thumbs3", {
    spaceBetween: 20,
    slidesPerView: 4,

    direction: "vertical",
    watchSlidesVisibility: true, //防止不可点击
    autoplay: {
      disableOnInteraction: false,
    },
    //autoHeight: true,
  });
  var galleryTop = new Swiper(".gallery-top3", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    autoplay: {
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });
   /*模式一切換*/
  $(".bs101 .lockright .lock_ic").click(function () {
    $(".bs101 .lockright").css("height","0");
    $(".bs101 .lockleft").css("height","auto");
    galleryTop1_2.slideTo(1, 0, false);
  });
   /*模式一切換*/
  $(".bs101 .lockleft .lock_ic").click(function () {
    $(".bs101 .lockright").css("height","auto");
    $(".bs101 .lockleft").css("height","0");
    galleryTop1_1.slideTo(1, 0, false);
  });

   /*模式二切換*/
  $(".bs102 .lockright .lock_ic").click(function () {
    $(".bs102 .lockright").css("height","0");
    $(".bs102 .lockleft").css("height","auto");
    galleryTop2_1.slideTo(1, 0, false);
  });
   /*模式二切換*/
  $(".bs102 .lockleft .lock_ic").click(function () {
    $(".bs102 .lockright").css("height","auto");
    $(".bs102 .lockleft").css("height","0");
    galleryTop2_2.slideTo(1, 0, false);
     
  });

    /*小網模式一切換*/
    $(".clomode01 .mode_pas").click(function () {
      $(".inner_colum01-1").css("height","auto");
      $(".inner_colum01").css("height","0");
      $(".clomode01 .mode_pas").addClass("sele")
      $(".clomode01 .mode_main").removeClass("sele")
     mswiper1_2.slideTo(1, 0, false);
     });
     $(".clomode01 .mode_main").click(function () {
      $(".inner_colum01").css("height","auto");
      $(".inner_colum01-1").css("height","0");
      $(".clomode01 .mode_main").addClass("sele")
      $(".clomode01 .mode_pas").removeClass("sele")
     mswiper1_1.slideTo(1, 0, false);
     });
    
     /*小網模式一切換*/
    $(".clomode02 .mode_pas").click(function () {
      $(".inner_colum02-1").css("height","auto");
      $(".inner_colum02").css("height","0");
      $(".clomode02 .mode_pas").addClass("sele")
      $(".clomode02 .mode_main").removeClass("sele")
     mswiper2_2.slideTo(1, 0, false);
     });
     $(".clomode02 .mode_main").click(function () {
      $(".inner_colum02").css("height","auto");
      $(".inner_colum02-1").css("height","0");
      $(".clomode02 .mode_main").addClass("sele")
      $(".clomode02 .mode_pas").removeClass("sele")
      mswiper2_1.slideTo(1, 0, false);
     });





})