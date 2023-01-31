var HomePage = function () {
  var _timer;

  var _initBasicScroll = function () {
    $(".scene").each(function (index, elem) {
      console.log(elem);
      const modifier = elem.getAttribute("data-modifier");

      basicScroll
        .create({
          elem: elem,
          from: 0,
          to: 519,
          direct: true,
          props: {
            "--translateY": {
              from: "0",
              to: `${10 * modifier}px`,
            },
          },
        })
        .start();
    });
  };

  var _initCalculation = function () {
    // 計算下方結果
    var _calculateTotal = function (money, percent, period) {
      var total = 0;
      const month = period * 12;
      const rate = percent / 100;
      for (let i = 1; i <= month; i++) {
        const each = money * Math.pow(1 + rate / 12, i);
        total += each;
      }
      const t = Math.round(total);
      const n = money * period * 12;

      return [
        t.toLocaleString("en-US"),
        n.toLocaleString("en-US"),
        (t - n).toLocaleString("en-US"),
      ];
    };

    var _appendTotalValueArea = function () {
      // 有變更即馬上試算
      var results = _calculateTotal(
        $("#sliderInput1").val(),
        $("#sliderInput2").val(),
        $("#sliderInput3").val()
      );
      $(".total-value .dashed_dollar").each(function (index, elem) {
        $(elem).html(results[index]);
      });
    };

    var _setSliderBackground = function (sliderId) {
      var colorStopValue = 0;
      var $slider = $("#" + sliderId);
      if (sliderId === "slider1") {
        colorStopValue = Number(Number($slider.val()) / 20000);
      } else if (sliderId === "slider2") {
        colorStopValue = Number((Number($slider.val()) - 5) / 7);
      } else if (sliderId === "slider3") {
        colorStopValue = Number(Number($slider.val()) / 40);
      }
      $slider.css(
        "background-image",
        `-webkit-gradient(linear, 0% 100%, 100% 100%, color-stop(${colorStopValue}, rgb(0, 159, 232)), color-stop(${colorStopValue}, #a6e0ff))`
      );
    };

    // 拖動slider
    $("input.range-slider__range").on("change", function (e) {
      console.log($(this).val());
      var value = $(this).val();
      $(this).prev().find("input.range-slider__value").val(value);
      _setSliderBackground(this.id);
      _appendTotalValueArea();
    });

    // 手動輸入值
    $("input.range-slider__value").on("input", function () {
      console.log($(this).val());
      var value = $(this).val();
      var $slider = $(this)
        .closest(".range-slider")
        .find("input.range-slider__range");
      $slider.val(value);
      _setSliderBackground($slider.attr("id"));
      // 有變更即馬上試算
      _appendTotalValueArea();
    });
  };

  var _activeTab = function (index) {
    $(".tab li, .mobile-tab li");

    console.log(index);
    var tabContent = getTabContents()[index];
    console.log(tabContent);
    $(".single_subscription .single_title").html(tabContent.title);
    $(".single_subscription .single_subtitle").html(tabContent.subtitle);
    $(".step_button > a, .phone_mb .step_button").html(tabContent.buttonText);
    var _activeStep = function (index) {
      var step = tabContent.steps[index];
      $(".phone img.phone_body").attr("src", `${step.image}?t=${Date.now()}`);
      $(".bubble_title").text("STEP" + (index + 1));
      $(".bubble_content").html(step.content);
      $(".number_step li").each(function (i, e) {
        if (i <= index) {
          $(e).removeClass("normal_number").addClass("active_number");
        } else {
          $(e).removeClass("active_number").addClass("normal_number");
        }
      });
      if (index === 0) {
        $(".circle-arrow.previous").removeClass("active").addClass("disable");
        $(".circle-arrow.next").addClass("active").removeClass("disable");
      } else if (index === tabContent.steps.length - 1) {
        $(".circle-arrow.previous").removeClass("disable").addClass("active");
        $(".circle-arrow.next").addClass("disable").removeClass("active");
      } else {
        $(".circle-arrow.previous").addClass("active").removeClass("disable");
        $(".circle-arrow.next").addClass("active").removeClass("disable");
      }
    };

    // 預設顯示Step1資料
    _activeStep(0);

    // diable左邊箭頭，enable右邊箭頭
    $(".circle-arrow.previous").removeClass("active").addClass("disable");
    $(".circle-arrow.next").addClass("active").removeClass("disable");

    // 印出Step圈圈
    $(".number_step").empty();
    tabContent.steps.forEach((e, index) => {
      $(".number_step").append(
        `<li class="${index === 0 ? "active_number" : "normal_number"}">0${
          index + 1
        }</li>`
      );
    });

    // 綁定Step圈圈
    $(".number_step li").on("click", function () {
      var stepIndex = $(this).index();
      // disable timer
      clearInterval(_timer);
      _activeStep(stepIndex);
    });

    // 往左和往右按鈕
    $(".circle-arrow")
      .off()
      .on("click", function () {
        if ($(this).hasClass("disable")) return;

        var currentStepIndex = $(".number_step .active_number").length - 1;
        console.log(currentStepIndex);
        var nextIndex = 0;
        if ($(this).hasClass("previous")) {
          nextIndex = currentStepIndex - 1;
        } else {
          nextIndex = currentStepIndex + 1;
        }

        if (nextIndex < 0) nextIndex = 0;
        else if (nextIndex > tabContent.steps.length - 1)
          nextIndex = tabContent.steps.length - 1;

        // disable timer
        clearInterval(_timer);

        _activeStep(nextIndex);
      });

    // 定時換Step
    // disable timer
    clearInterval(_timer);
    _timer = setInterval(function () {
      var currentStepIndex = $(".number_step .active_number").length - 1;
      var nextIndex =
        currentStepIndex + 1 > tabContent.steps.length - 1
          ? 0
          : currentStepIndex + 1;
      _activeStep(nextIndex);
    }, 3300);
  };

  var _init04Area = function () {
    // 預設開第一個頁籤
    _activeTab(0);

    // Tab Control
    $(".tab li, .mobile-tab li").click(function () {
      $(this).siblings().removeClass("active_tab").addClass("normal_tab");
      $(this).addClass("active_tab").removeClass("normal_tab");
      var index = $(this).index();
      _activeTab(index);
    });
  };

  var _triggerActiveTab = function (tabIndex) {
    // console.log('click');
    setTimeout(() => {
      $(".tab li").eq(tabIndex).trigger("click");
      $(".mobile-tab li").eq(tabIndex).trigger("click");
    }, 100);
  };

  var _scrollTo = function (targetId) {
    let offset = 180;
    let top = "";
    const element = $(targetId)[0];
    // debugger;
    switch (targetId) {
      case "#section1":
      case "#section3":
        offset = 50;
        break;
      case "#section4":
        offset = 120;
      default:
        break;
    }
    if (screen.width < 600) {
      switch (targetId) {
        case "#section2":
          offset = 150;
          break;
        case "#section3":
          offset = 30;
          break;
        case "#section4":
          offset = 75;
        default:
          break;
      }
    }
    top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    console.log(top);

    window.scrollTo({
      top: top,
      left: 0,
      behavior: "smooth",
    });
  };

  var _openSubmenu = function () {
    $(".pc_menu").addClass("openMenu");
    if ($(".header_item .border_top").length <= 0)
      $('<div class="border_top"></div>').insertBefore(".pc_menu");
  };
  var _closeSubmenu = function () {
    $(".pc_menu").removeClass("openMenu");
    $(".pc_menu").siblings(".border_top").remove();
  };

  var _bindScrollEvent = function () {
    $(".header_item li a").click(function (e) {
      e.preventDefault();
      var targetId = $(this).attr("href");
      _scrollTo(targetId);
    });

    $(".pc_menu li, #mobileMenu .submenu-item").click(function () {
      var targetId = $(this).attr("href");
      var tabIndex = $(this).data("tab");
      _scrollTo(targetId);
      $(".tab li").eq(tabIndex).trigger("click");
      $(".mobile-tab li").eq(tabIndex).trigger("click");
      $("#mobileMenu").removeClass("isOpen");
      _closeSubmenu();
    });

    // 進入頁面的錨點
    switch (location.hash) {
      case "#why":
        _scrollTo("#section1");
        break;
      case "#method":
        _scrollTo("#section2");
        break;
      case "#sales":
        _scrollTo("#section3");
        break;
      case "#teaching1":
        _scrollTo("#section4");
        _triggerActiveTab(0);
        break;
      case "#teaching2":
        _scrollTo("#section4");
        _triggerActiveTab(1);
        break;
      case "#teaching3":
        _scrollTo("#section4");
        _triggerActiveTab(2);
        break;
      case "#teaching4":
        _scrollTo("#section4");
        _triggerActiveTab(3);
        break;
      case "#teaching5":
        _scrollTo("#section4");
        _triggerActiveTab(4);
        break;
      default:
        break;
    }

    $("#mobileMenu li").click(function () {
      var targetId = $(this).attr("href");
      _scrollTo(targetId);
      $("#mobileMenu").removeClass("isOpen");
    });

    var sideScroll = function (element, direction, speed, distance, step) {
      let scrollAmount = 0;
      var slideTimer = setInterval(function () {
        if (direction === "left") {
          element.scrollLeft -= step;
        } else {
          element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
          window.clearInterval(slideTimer);
        }
      }, speed);
    };

    $(".tab_mb .tab-mb-prev").click(function () {
      console.log("asfasf");
      sideScroll($("#container")[0], "left", 25, 100, 10);
    });
    $(".tab_mb .tab-mb-next").click(function () {
      sideScroll($("#container")[0], "right", 25, 100, 10);
    });
  };

  var _bindOtherEvent = function () {
    $(".to_top").click(function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    $(".calculation > img").click(function () {
      $(this).toggleClass("rotated");
      $(".calculation_card").toggle();
      AOS.refresh();
    });

    $(".header_item .has-submenu, .pc_menu").hover(function () {
      _openSubmenu();
    });
    $(".pc_menu").hover(
      function () {
        _openSubmenu();
      },
      function () {
        _closeSubmenu();
      }
    );
    $(".header_bar").on("mouseleave", function () {
      _closeSubmenu();
    });

    $("#mobile-menu-trigger").click(function () {
      $("#mobileMenu").toggleClass("isOpen");
    });

    $("#mobileMenu .trigger-submenu").click(function () {
      $(this).find(".arrow").toggleClass("rotated");
      $(this).siblings(".items").toggle();
    });
  };

  return {
    init: function () {
      // 綁定錨點滾動
      _bindScrollEvent();

      // Init AOS Animation
      AOS.init({
        delay: 75, // values from 0 to 3000, with step 50ms
        duration: 350,
      });

      // Init Basic Scroll: Banner視差滾動效果
      _initBasicScroll();

      // 定期定額試算邏輯
      _initCalculation();

      // 洞悉基金動態區塊UI邏輯
      _init04Area();

      // 綁定其餘畫面上的小細節和事件
      _bindOtherEvent();
    },
  };
};

$(document).ready(function () {
  new HomePage().init();

  // tab setting
  $("#tabs li a").click(function () {
    var t = $(this).attr("id");
    currentTab = t;
    //this is the start of our condition
    $("#tabs li a").removeClass("inactive");
    $(this).addClass("inactive");

    $(".tabContainer").hide();

    // $(`.main${t}`).show();
    $("#" + t + "C").fadeIn("slow");
    // // for mobile
    // $(".swiper").hide();
    // $("#Swiper" + t).fadeIn("slow");
    // for web subCotainer
    // $(`.container .subtabContainer`).hide();
    // currentNav = 0;
    // $(`#${currentTab}C #subtabs li a:first`).click();
    AOS.init();
  });
  $(`#tabs li a:first`).click();
});
