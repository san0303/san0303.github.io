const app = Vue.createApp({
  data() {
    return {
      apiUrl: 'https://api.yuantafunds.com/ectranslation/api/bridge',
      // apiUrl: 'https://apitest.yuantafunds.com/ECTranslation/api/bridge',
      screenWidth: window.innerWidth,
      yScrollVaule: '',
      location: [],
      modal: {
        chartIndustryShow: false, // 投資產業配置
      },
      barColors: [
        '#0088e4',
        '#ff6a00',
        '#005bac',
        '#ffd300',
        '#1799e2',
        '#ff8533',
        '#0b66b7',
        '#ffe266',
        '#2faae0',
        '#ff9750',
        '#1a73c4',
        '#ffe98a',
        '#47b6dd',
        '#ffa76c',
        '#2f80d1',
        '#fff1b6',
        '#5ec0db',
        '#ffb888',
        '#3c95e5',
        '#fff9de',
        '#3c95e5',
        '#ffb888',
        '#5ec0db',
        '#fff1b6',
        '#2f80d1',
        '#ffa76c',
        '#47b6dd',
        '#ffe98a',
        '#1a73c4',
        '#ff9750',
        '#2faae0',
        '#ffe266',
        '#0b66b7',
        '#ff8533',
        '#1799e2',
        '#ffd300',
        '#005bac',
        '#aaaaaa',
        '#666666',
        '#222222',
      ],
      fundCodeArr: ['1192'], //基金代號
      etfCodeArr: ['0050'], //證券代號
      kvDotLottie:{},
      threeCardTop: [
        './assets/img/img-section1-1.png',
        './assets/img/img-section1-2.png',
        './assets/img/img-section1-3.png'
      ],
      threeCard: [
        [
          { name: '台積電', desc: '全球晶圓代工 No.1' },
          { name: '鴻海', desc: '全球電子代工服務 No.1' },
          { name: '聯發科', desc: '全球 5G 手機晶片 No.1' }
        ],
        [
          { name: '富邦金', desc: '國內壽險 No.1' },
          { name: '國泰金', desc: '國內金控規模 No.1' },
          { name: '中信金', desc: '國內消費金融 No.1' }
        ],
        [
          { name: '中鋼', desc: '國內鋼廠 No.1' },
          { name: '長榮', desc: '國內航運商 No.1' },
          { name: '統一', desc: '國內食品 No.1' }
        ]
      ],
      circleCard: [
        {
          id: 'circle_1',
          icon: './assets/img/icon-section2-1.png',
          txt: '國內第一檔ETF，穩定參與台股上市企業成長，忠實的傳遞台股成長果實給投資人'
        },
        {
          id: 'circle_2',
          icon: './assets/img/icon-section2-2.png',
          txt: '至2024年底，上市市值前十大企業合計市值佔整體上市台股53%，成長動能高度集中於指標大型股，0050將充分反映台股行情'
        },
        {
          id: 'circle_3',
          icon: './assets/img/icon-section2-3.png',
          txt: '從個股走向ETF：2003年成立以來，橫跨網際網路、智慧型手機、AI應用世代，成分股與時俱進調整，自動跟隨主流趨勢'
        },
        {
          id: 'circle_4',
          icon: './assets/img/icon-section2-4.png',
          txt: '定期定額存股第一哩路，至2024年12月，證交所定期定額前10大熱門個股均為0050成分股'
        },
        {
          id: 'circle_5',
          icon: './assets/img/icon-section2-5.png',
          txt: '股價自成立的36.98元，上漲至2024年底的195.75元，期間累積51.9元現金股息。從資本利得到股利發放，幫助投資人參與台股成長'
        },
      ],
      timelineSwiper: {},
      timelineCard: [
        {
          date: '2003 / 6 / 25',
          title: '元大台灣50成立',
          txt: '發行價格36.98元<br/>台股大盤4,933點'
        },
        {
          date: '2013 / 1 / 3',
          title: '台積電首站三位數',
          txt: '元大台灣50<br/>收盤價54.85元'
        },
        {
          date: '2014 / 4 / 28',
          title: '大立光改寫台股<br/>最高價紀錄',
          txt: '元大台灣50<br/>收盤價61.25元'
        },
        {
          date: '2017 / 5 / 23',
          title: '台股重返萬點',
          txt: '元大台灣50<br/>收盤價76.35元'
        },
        {
          date: '2019 / 6 / 10',
          title: '0050 ETF<br/>連結基金*成立',
          txt: '提供投資人不配息<br/>級別選擇'
        },
        {
          date: '2020 / 7 / 27',
          title: '台股盤中突破<br/>12,682點',
          txt: '元大台灣50<br/>收盤價103.3元'
        },
        {
          date: '2021 / 3 / 9',
          title: '零成本存股目標**',
          txt: '累積發放現金股息<br/>38.05元，超越發行價格'
        },
        {
          date: '2023 / 6 / 25',
          title: '元大台灣50<br class="desktop"/>成立滿20周年',
          txt: '穩定參與台股上市企業市值成長，帶領投資人認同長期投資優勢價值'
        },
        {
          date: '2024 / 6 / 6',
          title: '元大台灣50<br/>規模突破4,000億',
          txt: '成立21年持續為最大境內基金'
        },
        {
          date: '2024 / 7 / 4',
          title: '台積電首站上千元',
          txt: '元大台灣50<br/>收盤價192.5元'
        },
        {
          date: '2025 ~',
          title: '台股續創歷史新高<br/>0050市價有望持續挑戰新高',
          txt: ''
        },

      ],
      fundList: [
        {
          fundid: '0050',
          data: {
            fund: {},
            etf: {},
            chart: {},
          }
        }
      ],
      screenWidth: window.innerWidth,
    }
  },
  computed: {
    isPC() {
      return this.screenWidth > 767;
    },
    setFundAPI() {
      return this.fundCodeArr.map(f => ({
        url: this.apiUrl,
        methods: 'GET',
        params: {
          APIType: 'EC2API',
          AppName: 'FundWeb',
          PageName: 'monthlyETFs',
          Device: '4',
          DeviceId: '0e3ca41f-1d91-4519-b39e-cd649ca38865',
          FuncId: 'FundDetail',
          fundId: f
        }
      }))
    },
    setEtfAPI() {
      return this.etfCodeArr.map(f => ({
        url: this.apiUrl,
        methods: 'GET',
        params: {
          APIType: 'ETFBackstage',
          AppName: 'ETF',
          PageName: 'monthlyETFs',
          Device: '4',
          DeviceId: '0e3ca41f-1d91-4519-b39e-cd649ca38865',
          FuncId: 'ETFInformation/GetETFInformationByID',
          Platform: 'ETF',
          stkcd: f
        }
      }))
    },
    setDivAPI() {
      return this.fundCodeArr.map(f => ({
        url: this.apiUrl,
        methods: 'GET',
        params: {
          APIType: 'EC2API',
          AppName: 'FundWeb',
          PageName: 'monthlyETFs',
          Device: '4',
          DeviceId: '0e3ca41f-1d91-4519-b39e-cd649ca38865',
          FuncId: 'FundDividend',
          FundId: f
        }
      }))
    },
    showBnDuringDate() {
      return moment().isBetween('20241129 000000', '20250303 225959', undefined, '[]')
    }
  },
  created() {
    this.getAllData()
    this.getLocation()
  },
  mounted() {
    // AOS.init({
    //   duration: 1000,
    //   once: true,
    //   easing:'ease-in-out',
    //   anchorPlacement: 'top-bottom'
    // })
    this.loadImagesAndAnimate()
    this.setCardSwiper()
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth
    },
    handleScroll() {
      this.yScrollVaule = window.scrollY
    },
    setCardSwiper() {
      //輪播
      this.timelineSwiper = new Swiper('.timeline-wrap .swiper', {
        //排版
        centeredSlides: true, //當前區塊居中
        centeredSlidesBounds: true, //當前區塊居中還可以貼齊左右邊
        roundLengths: true, //寬高四捨五入不出現小數點
        freeMode: true,
        freeModeSticky: true, //取消只滑動1格時也可貼齊
        grabCursor: true,
        mousewheel: this.isPC,
        autoplay: this.isPC,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          0: { //手機
            slidesPerRow: 'auto', //一次顯示幾行
            spaceBetween: 0, //間距
            slidesOffsetAfter: 0,
            slidesPerGroup: 1,
          },
          640: { //手機
            slidesPerRow: 'auto', //一次顯示幾行
            spaceBetween: 0, //間距
            slidesOffsetAfter: 0,
          },
          768: { //電腦
            slidesPerView: 5, //顯示幾個
            spaceBetween: 10, //間距
            slidesOffsetAfter: 420,
            slidesPerGroup: 2,
          },
          1024: { //電腦
            slidesPerView: 7, //顯示幾個
            spaceBetween: 10, //間距
            slidesOffsetAfter: 560,
            slidesPerGroup: 2,
          },
          1200: { //電腦
            slidesPerView: 7, //顯示幾個
            spaceBetween: 10, //間距
            slidesOffsetAfter: 370,
            slidesPerGroup: 2,
          }
        }
      })
    },
    goTop() {
      document.documentElement.scrollTop = 0
    },
    scrollTo(val) {
      let headerH = (window.screen.width >= 576) ? 60 : 50
      const top = this.$refs[val].offsetTop - headerH
      window.scroll({
        top: top,
        left: 0,
        behavior: 'smooth'
      })
    },
    handleModalChartIndustry() {
      this.$nextTick(() => {
        this.drawChart({
          name: 'modal_chart_industry',
          xValue: this.fundList[0].data.fund.InvestIndustry.xValue,
          yValue: this.fundList[0].data.fund.InvestIndustry.yValue,
          updateDate: this.fundList[0].data.fund.InvestIndustry.updateDate
        })
      })
    },
    // 打開跳窗
    showModal(val) {
      this.modal[val] = true
      document.body.style.overflow = 'hidden'
      if (val == 'chartIndustryShow') {
        this.$nextTick(() => {
          this.drawChart({
            name: 'modal_chart_industry',
            xValue: this.fundList[0].data.chartIndustry.xValue,
            yValue: this.fundList[0].data.chartIndustry.yValue,
            updateDate: this.fundList[0].data.chartIndustry.updateDate
          })
        })
      }
    },
    // 關閉跳窗
    hideModal(val) {
      this.modal[val] = false
      document.body.style.overflow = 'auto'
    },
    // 投資產業配置圖
    fundDataChart(result) {
      const res = result.data.Data
      return {
        name: `chartIndustry_${res.Detail[0].STK_CD || '0050'}`,
        xValue: res.InvestIndustry.map(x => x.Item),
        yValue: res.InvestIndustry.map(x => x.Ratio),
        updateDate: moment(res?.InvestIndustry[0].DATE, 'YYYY / MM / DD') || ''
      }
    },
    // 投資區域配置圖
    fundDataChartArea(result) {
      const res = result.data.Data
      return {
        name: `chartArea_${res.Detail[0].STK_CD || '0050'}`,
        xValue: res.InvestArea.map(x => x.Item),
        yValue: res.InvestArea.map(x => x.Ratio),
        updateDate: moment(res?.InvestArea[0].DATE, 'YYYY / MM / DD') || ''
      }
    },
    // 畫圖
    drawChart(d) {
      new Chart(d.name, {
        type: 'doughnut',
        data: {
          labels: d.xValue,
          datasets: [{
            backgroundColor: this.barColors,
            data: d.yValue,
            borderWidth: 0
          }]
        },
        options: {
          events: [],
          legend: {
            display: false
          }
        }
      })
    },
    // 回傳基金資料
    fundDataJson(result) {
      const res = result.data.Data
      return {
        DOC_GS_URL: res.Detail[0].DOC_GS_URL,
        DOC_JS_URL: res.Detail[0].DOC_JS_URL,
        InfoList: {
          '基金類型': res.Detail[0].INV_TYPE,
          '經理費': res.Detail[0].ADMIN_RATE_DESC,
          '保管銀行': res.Detail[0].BANK_HQ_NAME,
          '風險報酬等級': res.Detail[0].RISK_CLASS_P,
          '經理人': res.Detail[0].EMP_NAME,
          '保管費': res.Detail[0].STORAGE_RATE,
          '計價幣別': res.Detail[0].CRNCY_NM,
          '配息方式': 'A類型：不配息<br/>B類型：配息',
        },
        InvestIndustry: res.InvestIndustry,
        InvestIndustryDate: moment(res.InvestIndustry[0].DATE, 'YYYYMMDD').format('YYYY / MM / DD'),
        InvestArea: res.InvestArea,
        InvestAreaDate: moment(res.InvestArea[0].DATE, 'YYYYMMDD').format('YYYY / MM / DD'),
        top10: res.HoldingSharesTop10,
        top10Date: res.HoldingSharesTop10.length > 0 ? moment(res.HoldingSharesTop10[0].DATA_DATE, 'YYYYMMDD').format('YYYY / MM / DD') : '0000 / 00 / 00'
      }
    },
    // 回傳etf資料追蹤指數
    etfDataIndexName(result) {
      return result.data.Data.INDEX_FUND_NAME
    },
    // 回傳etf資料證券簡稱
    etfDataName(result) {
      return result.data.Data.STK_NAME
    },
    // 回傳配息紀錄資料
    divDataJson(result) {
      return result.data.Data.Data
    },
    // Function return
    async getAxiosData(f) {
      return await axios(f)
    },
    // ETF資料
    async getAllData() {
      try {
        let [fund1] = await axios.all(this.setFundAPI.map(x => this.getAxiosData(x)))
        // let [etf1] = await axios.all(this.setEtfAPI.map(x => this.getAxiosData(x)))
        // 基金資料
        this.fundList[0].data = {
          fund: this.fundDataJson(fund1),
          chartIndustry: this.fundDataChart(fund1),
          chartArea: this.fundDataChartArea(fund1),
        }
        // this.fundList[0].data.fund.InfoList['證券簡稱'] = this.etfDataName(etf1)
        // this.fundList[0].data.fund.InfoList['追蹤指數'] = this.etfDataIndexName(etf1)

        // 繪製初始圖
        this.drawChart(this.fundList[0].data.chartIndustry)
        this.drawChart(this.fundList[0].data.chartArea)
      }
      catch (err) {
        console.error(err)
      }

    },
    getLocation() { // 地址
      axios({
        url: this.apiUrl,
        methods: 'GET',
        params: {
          APIType: 'EC2API',
          AppName: 'FundWeb',
          PageName: '0050-0056-rsp',
          Device: '4',
          DeviceId: '0e3ca41f-1d91-4519-b39e-cd649ca38865',
          FuncId: 'CustomerService'
        }
      })
        .then(result => {
          this.location = result.data.Data.CS
        })
        .catch(error => {
        })
    },
    addr(arr) {
      return `${arr.ComName}：${arr.Address} ${arr.Tel}　${arr.ApprovedNo}`
    },
    // Custom
    loadImagesAndAnimate() {
      const imageSources = [
        'assets/img/bg-kv-2.jpg',
      ];

      const imagePromises = imageSources.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });

      Promise.all(imagePromises)
        .then(() => {
          this.particlesAnimation();
          this.kvAnimation();
        })
        .catch((err) => {
          this.particlesAnimation();
          this.kvAnimation();
        });
    },
    kvAnimation() {
      const tween = gsap
        .timeline()
        .from('.kv-etf-0050-title', {
          delay: 1,
          opacity: 0,
          scale: 0.5,
          duration: 1.5,
        }, '-=1')
        .from('.kv-etf-0050-subtitle', {
          delay: 1,
          opacity: 0,
          duration: 1,
        }, '-=1')

    },
    particlesAnimation() {
      const kvWrapper = this.$refs['kvWrapper'];
      kvWrapper.style.opacity = 1;
      kvWrapper.style.visibility = 'visible';
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 72,
            density: { enable: true, value_area: 1262 }
          },
          color: { value: "#ffffff" },
          shape: {
            type: "circle",
            stroke: { width: 3, color: "#86ffff" },
            polygon: { nb_sides: 4 },
            image: { src: "img/github.svg", width: 100, height: 100 }
          },
          opacity: {
            value: 0.15,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.15,
              sync: false
            }
          },
          size: {
            value: 2.4,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
          },
          line_linked: {
            enable: true,
            distance: 192,
            color: "#86ffff",
            opacity: 0.22,
            width: 2.56
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 2565,
              rotateY: 1042
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: false, mode: "grab" },
            onclick: { enable: false, mode: "push" },
            resize: true
          },
          modes: {
            grab: {
              distance: 36,
              line_linked: { opacity: 0.8}
            },
            bubble: {
              distance: 133,
              size: 12,
              duration: 0,
              opacity: 1,
              speed: 3
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
          }
        },
        retina_detect: true
      })
    }
  },
  watch: {
    screenWidth(newWidth) {
      // console.log('螢幕尺寸',newWidth, this.isPC)
    }
  }
});

//跳窗模板
app.component("modal", {
  props: {
    title: String,
    mod: String,
    position: {
      type: String,
      default: 'Y_center'
    }
  },
  setup(props) {
    return { props };
  },
  template:
    `
  <div class="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" :class='position'>
        <div class="modal-container">

          <div class="modal-header" :class="mod">
            <h3>{{ props.title }}</h3>
            <button class="close" @click="$emit('close')"><i class="close"></i></button>
            <button class="back" @click="$emit('back')"><i class="back"></i></button>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')"></button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
});


app.mount('#app');