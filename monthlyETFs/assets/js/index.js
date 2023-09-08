// gotop 回上面
// const goTop = document.querySelector('.top');
// goTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' })
// window.addEventListener('scroll', function (e) {
//     if (this.scrollY >= 300) {
//         goTop.classList.add("show");
//     } else {
//         goTop.classList.remove("show");
//     }
// })

//時間測試
$(function () {

    let ts_now = new Date();
    let domainQur = window.location.search.substring(1); // domainQur =&tstest=2023/5/11
    //判斷是否在測試機
    if(domainQur !== '' ){
      if( location.hostname === 'ectest.yuantafunds.com' || location.hostname === '127.0.0.1'){
        let params = JSON.parse('{"'+ decodeURI(domainQur).replace(/"/g, '\\"').replace(/=/g, '":"').replace(/&/g, '","') +'"}');// {npn: 1vEK1psAv1Uo , n : 1, code : 3}
        let tstest = params.tstest ;
        if(tstest !== undefined) {
          if(tstest){ ts_now = new Date(tstest); alert('測試時間打開中，請注意!! ' + tstest)};
        }
      }
    };
    let ts_test = $('[data-ts-test]').attr('data-ts-test');
    if(ts_test){ ts_now = new Date(ts_test); alert('測試時間打開中，請注意!! ' + ts_test)};

    //輪播
    var now = (ts_test)? ts_test:ts_now;
    //console.log(now)
    var nowActiveIndex = 0;
    if( now >= new Date('2023/07/19') ){ nowActiveIndex = 2;};
    if( now >= new Date('2023/08/17') ){ nowActiveIndex = 3;};
    if( now >= new Date('2023/09/17') ){ nowActiveIndex = 4;};
    if( now >= new Date('2023/10/20') ){ nowActiveIndex = 5;};
    if( now >= new Date('2023/11/17') ){ nowActiveIndex = 6;};

    const cardSwiper = new Swiper('.dividend-container.swiper', {
    //排版
    centeredSlides: true, //當前區塊居中
    centeredSlidesBounds: true, //當前區塊居中還可以貼齊左右邊
    slidesPerView: 1.1, //顯示幾個
    spaceBetween: 20, //間距
    initialSlide: nowActiveIndex,
    //基本
    watchOverflow: true, //只有1個slide時，不啟動swiper
    roundLengths: true, //寬高四捨五入不出現小數點
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    //★5.2.1★RWD(換成大於)
    breakpoints: {
        992: {
        slidesPerView: 3, //顯示幾個
        spaceBetween: 40, //間距
        }
    }
    });

    const companySwiper = new Swiper('.all-content.swiper', {
    //排版
    slidesPerView: 1, //顯示幾個
    spaceBetween: 20, //間距
    //基本
    autoHeight: true, //自動高度
    roundLengths: true, //寬高四捨五入不出現小數點
    pagination: {
        el: '.all-content .swiper-pagination',
        clickable: true, //觸擊切換
        type:  'bullets', //切換樣式 bullets(點點-預設) fraction(數字) progress(進度條) custom(自訂)
        //樣式type: bullets(點點)
        renderBullet: function (index, className) {
            switch(index){
                case 0:text='0056'; color='orange' ; break;
                case 1:text='00713'; color='blue' ; break;
                case 2:text='00850'; color='green' ; break;
            }
            return '<div class="'+ className +' tab '+ color +'">' + text + '</div>';
        },
    },
    //★5.2.1★RWD(換成大於)
    breakpoints: {
        992: {
        slidesPerView: 3, //顯示幾個
        spaceBetween: 0, //間距
        }
    }
    });

})




//可拖移廣告
let hammerAD = '#hammerAD'; //物件
let hammer_tophide = '300'; //下滑多少px顯示物件
$(function Hammerfu() {
    var reqAnimationFrame = (function () {
        return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();
    let el = document.querySelector(hammerAD);
    let es = el.style;
    let START_X = 0; //初始x軸
    let START_Y = -150; //初始y軸
    let px = START_X; //移動x軸
    let py = START_Y; //移動y軸
    let ticking = false;
    let transform;
    let elw = el.offsetWidth; //物件寬
    let elh = el.offsetHeight; //物件高
    let ww = window.innerWidth; //視窗寬
    let wh = window.innerHeight; //視窗高
    let mc = new Hammer(el);
    mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 })); //水平平移
    mc.add(new Hammer.Swipe()).recognizeWith(mc.get('pan')); //快速滑動
    mc.on("panstart panmove", onPan);
    mc.on("hammer.input", function (ev) {
        if (ev.isFinal) {
            //更新Y軸
            py = py + ev.deltaY;
            START_Y = py;
            if (START_Y > -elh * 0.5) {
                py = START_Y = -elh * 0.5;
            } else if (START_Y < -(wh - elh)) {
                py = START_Y = -(wh - elh);
            }
            //貼齊X軸左右
            if (ev.deltaX - elw * 0.5 > -ww * 0.5) {
                START_X = 0;
                el.classList.remove('js-stickleft');
                el.classList.add('js-stickright');
            } else {
                START_X = -ww + elw;
                el.classList.remove('js-stickright');
                el.classList.add('js-stickleft');
            }
            resetElement();
        }
    });
    function resetElement() {
        transform = {
            translate: {
                x: START_X,
                y: START_Y
            },
            speed: 300,
            scale: 1,
            angle: 0,
            rx: 0,
            ry: 0,
            rz: 0
        };
        requestElementUpdate();
    };
    function updateElementTransform() {
        es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(' + transform.translate.x + 'px,' + transform.translate.y + 'px,0px)';
        es.webkitTransitionDuration = es.MsTransition = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = ' ' + transform.speed + 'ms';
        ticking = false;
    };
    function requestElementUpdate() {
        if (!ticking) {
            reqAnimationFrame(updateElementTransform);
            ticking = true;
        };
    };
    function onPan(ev) {
        transform = {
            translate: {
                x: START_X + ev.deltaX,
                y: START_Y + ev.deltaY
            },
            speed: 0,
        };
        requestElementUpdate();
    };
    resetElement();
});

//jQuery scroll事件，支源scroll srart與scroll stop
(function () {
    let special = jQuery.event.special,
        uid1 = 'D' + (+new Date()),
        uid2 = 'D' + (+new Date() + 1);
    special.scrollstart = {
        setup: function () {
            let timer,
                handler = function (evt) {
                    let _self = this,
                        _args = arguments;
                    if (timer) {
                        clearTimeout(timer);
                    } else {
                        evt.type = 'scrollstart';
                        jQuery.event.dispatch.apply(_self, _args);
                    }
                    timer = setTimeout(function () {
                        timer = null;
                    }, special.scrollstop.latency);
                };
            jQuery(this).bind('scroll', handler).data(uid1, handler);
        },
        teardown: function () {
            jQuery(this).unbind('scroll', jQuery(this).data(uid1));
        }
    };
    special.scrollstop = {
        latency: 300,
        setup: function () {
            let timer,
                handler = function (evt) {
                    let _self = this,
                        _args = arguments;
                    if (timer) {
                        clearTimeout(timer);
                    }
                    timer = setTimeout(function () {
                        timer = null;
                        evt.type = 'scrollstop';
                        jQuery.event.dispatch.apply(_self, _args);
                    }, special.scrollstop.latency);
                };
            jQuery(this).bind('scroll', handler).data(uid2, handler);
        },
        teardown: function () {
            jQuery(this).unbind('scroll', jQuery(this).data(uid2));
        }
    };
})();

/*滑動過程狀態改變*/
$(function () {
    const isPC = document.body.clientWidth > 1024 ;
    const _self = $(hammerAD);
    const dow = $(window);
    //收合
    function selfhide(val) {
        if (_self.hasClass('js-stickleft')) {
            _self.css('right', _self.width() * val);
        } else {
            _self.css('right', _self.width() * -val);
        };
    };
    //顯示
    function selfshow(val) {
        if (_self.hasClass('js-stickleft')) {
            _self.css('right', val);
        } else {
            _self.css('right', val);
        };
    };
    //初始
    //selfhide(0);
    // if(!isPC){
    //     //下滑多少px顯示物件
    //       dow.bind('scroll', function(){
    //         if ( $(this).scrollTop() <= hammer_tophide){
    //           selfhide(1);
    //         };
    //       });
    //     //滑動時收合
    //     dow.bind('scrollstart', function () {
    //         if ($(this).scrollTop() >= hammer_tophide) {
    //             selfhide(0.75);
    //         };
    //     });
    //     //滑動後出現
    //     dow.bind('scrollstop', function () {
    //         if ($(this).scrollTop() >= hammer_tophide) {
    //             selfshow(0);
    //         };
    //     });
    //     //關掉廣告
    //     _self.find('.closeButton').click(function () {
    //         _self.hide();
    //     });
    // }

});


