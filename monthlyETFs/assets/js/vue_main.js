const app = Vue.createApp({
  data() {
    return {
      yScrollVaule: '',
      modalShow: false,
      divListShow: false,
      fundListShow: false,
      fundMoreListShow: false,
      activeDiv: {},
      activeFund: {
        title: '',
        titleDiv: '',
        color: '',
        id: '',
        infomation: {},
        investInfo: {},
        chart: {},
        top10Info: {},
        divList: [],
        msgWarning: {}
      },
      isOpen_0056: false,
      isOpen_00713: false,
      isOpen_00850: false,
      fundCodeArr: ['1084', '1164', '1198'],
      etfCodeArr: ['0056', '00713', '00850'],
      company: {
        fund1Sec: [
          '元大證券',
          '國泰證券',
          '永豐金證',
          '富邦證券',
          '凱基證券',
          '玉山證券',
          '華南永昌證券',
          '兆豐證券',
          '第一金證',
          '合庫證券',
          '臺銀證券',
          '元富證券',
          '台中銀證券',
          '國票證券',
          '統一證券',
          '台新證券',
          '康和證券',
          '群益金鼎證券',
          '土銀證券',
          '新光證券',
          '亞東證券',
          '中國信託證券',
          '大慶證券'
        ],
        fund1Bank: [
          '中國信託銀行',
          '台新銀行',
          '元大銀行',
          '台灣銀行',
          '國泰世華'
        ],
        fund2Sec: [
          '元大證券',
          '國泰證券',
          '永豐金證',
          '富邦證券',
          '凱基證券',
          '玉山證券',
          '華南永昌證券',
          '兆豐證券',
          '第一金證',
          '合庫證券',
          '臺銀證券',
          '元富證券',
          '台中銀證券',
          '國票證券',
          '統一證券',
          '台新證券',
          '康和證券',
          '群益金鼎證券',
          '亞東證券',
          '中國信託證券'
        ],
        fund2Bank: ['台灣銀行'],
        fund3Sec: [
          '元大證券',
          '國泰證券',
          '富邦證券',
          '凱基證券',
          '玉山證券',
          '華南永昌證券',
          '兆豐證券',
          '第一金證',
          '合庫證券',
          '臺銀證券',
          '元富證券',
          '台中銀證券',
          '國票證券',
          '統一證券',
          '台新證券',
          '康和證券',
          '群益金鼎證券',
          '新光證券',
          '亞東證券',
          '中國信託證券',
          '大慶證券'
        ],
        fund3Bank: ['元大銀行'],
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
      ],
      fund: [
        {
          fundid: '0056',
          data: {
            fund: '',
            etf: '',
            chart: '',
            divList: [],
          },
          msg: {
            date: '112年5月26日',
            issueNo: '1120336049',
            divYear: '112',
          }
        },
        {
          fundid: '00713',
          data: {
            fund: '',
            etf: '',
            chart: '',
            divList: []
          },
          msg: {
            date: '111年7月29日',
            issueNo: '1110346427',
            divYear: '111',
          }
        },
        {
          fundid: '00850',
          data: {
            fund: '',
            etf: '',
            chart: '',
            divList: [],

          },
          msg: {
            date: '112年5月26日',
            issueNo: '1120336049',
            divYear: '112',
          }
        },
      ]
    }
  },
  computed: {
    setFundAPI() {
      return this.fundCodeArr.map(f => ({
        url: 'https://api.yuantafunds.com/ectranslation/api/bridge',
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
        url: 'https://api.yuantafunds.com/ectranslation/api/bridge',
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
        url: 'https://api.yuantafunds.com/ectranslation/api/bridge',
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
    data56() {
      const t = this.fund.find(f => f.fundid == '0056') || {}
        return {
          ...t.data || {},
          msg: t.msg
        }
    },
    data713() {
      const t = this.fund.find(f => f.fundid == '00713') || {}
        return {
          ...t.data || {},
          msg: t.msg
        }
    },
    data850() {
      const t = this.fund.find(f => f.fundid == '00850') || {}
        return {
          ...t.data || {},
          msg: t.msg
        }
    },
    activeDivList() {
      return this.activeDiv
    },
    activeFundList() {
      return this.activeFund
    }
  },
  created() {
    this.getAllData();
  },
  mounted() {
    window.addEventListener('scroll', this.scrollWatch);
  },
  methods: {
    scrollWatch() {
      this.yScrollVaule = window.scrollY
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
    // 打開跳窗
    showModal(val) {
      this[val] = true;
      document.body.style.overflow = 'hidden'
    },
    // 關閉跳窗
    hideModal(val) {
      this[val] = false;
      document.body.style.overflow = 'auto'
    },
    fundColor(val) {
      let color = ''
      if (val === '0056') { color = '#eb6000' }
      if (val === '00713') { color = '#589bea' }
      if (val === '00850') { color = '#277503' }
      return color
    },
    showDivList(val) {
      document.body.style.overflow = 'hidden'
      this.divListShow = true
      let activeData = this.fund.find(f => f.fundid == val).data
      let color = this.fundColor(val)
      this.activeDiv = {
        title: `${activeData.etf.STK_CD}${activeData.fund.name}歷史配息(本基金之配息來源可能為收益平準金)
        `,
        color: color,
        divList: activeData.divList
      }
    },
    // PC展開資訊
    showDetail(val) {
      const isPC = document.body.clientWidth > 992;
      if (isPC) {
        this[val] = !this[val]
      } else {
        const splitsFund = val.split("_", 2)[1];
        this.showFundList(splitsFund)
      }
    },
    showMoreDivList() {
      this.fundListShow = !this.fundListShow
      this.fundMoreListShow = !this.fundMoreListShow
      document.body.style.overflow = 'hidden'

    },
    //手機版Modal資料
    showFundList(val) {
      this.fundListShow = true
      document.body.style.overflow = 'hidden'
      let activeData = this.fund.find(f => f.fundid == val).data
      let msgWarning = this.fund.find(f => f.fundid == val).msg
      let color = this.fundColor(val)
      let title = `${activeData.etf.STK_CD}${activeData.fund.name}`
      this.activeFund = {
        title: `${title}基金資訊`,
        titleDiv: `${title}歷史配息(本基金之配息來源可能為收益平準金)`,
        color: color,
        id: activeData.chart.name,
        infomation: {
          STK_NAME: activeData.fund.name,
          STK_CD: activeData.etf.STK_CD,
          INDEX_FUND_NAME: activeData.etf.INDEX_FUND_NAME,
          INDEX_PREPARE: activeData.etf.INDEX_PREPARE,
          MANAGER: activeData.etf.MANAGER,
          CUSTODIAN_BANK: activeData.etf.CUSTODIAN_BANK,
          INDEX_REVIEW: activeData.etf.INDEX_REVIEW
        },
        investInfo: {
          investIndustry: activeData.fund.investIndustry,
          investIndustryDate: activeData.fund.investIndustryDate
        },
        chart: {
          name: 'chart_mobile',
          xValue: activeData.chart.xValue,
          yValue: activeData.chart.yValue,
          update: activeData.chart.update
        },
        top10Info: {
          top10: activeData.fund.top10,
          top10Date: activeData.fund.top10Date,
        },
        divList: activeData.divList,
        msgWarning: msgWarning
      }
      this.drawChart(this.activeFund.chart)

    },
    activeBtn(val) {
      return [
        'arrow',
        { 'active': this[val] }
      ]
    },
    // 投資產業配置圖
    fundDataChart(result) {
      const res = result.data.Data
      const InvestIndustry = res.InvestIndustry
      let date = moment(res.InvestIndustry[0].DATE).format('YYYY / MM / DD')
      let id = result.data.Data.Detail[0].STK_CD
      let x = InvestIndustry.map(x => x.Item);
      let y = InvestIndustry.map(x => x.Ratio);
      let data = {
        name: 'chartIndustry_' + id,
        xValue: x,
        yValue: y,
        update: date
      }
      return data
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
      let name = res.Detail[0].STK_CHNM
      let InvestIndustry = res.InvestIndustry
      let InvestIndustryDate = moment(InvestIndustry[0].DATE).format('YYYY / MM / DD')
      let top10 = res.HoldingSharesTop10
      let top10Date = moment(top10[0].DATA_DATE).format('YYYY / MM / DD')
      let data = {
        name:name,
        investIndustry: InvestIndustry,
        investIndustryDate: InvestIndustryDate,
        top10: top10,
        top10Date: top10Date
      }
      //console.log(data)
      return data
    },
    // 回傳etf資料
    etfDataJson(result) {
      let data = result.data.Data
      return data
    },
    // 回傳配息紀錄資料
    divDataJson(result) {
      let data = result.data.Data.Data
      return data
    },
    // Function return
    async getAxiosData(f) {
      return await axios(f)
    },
    // ETF資料
    async getAllData() {
      try {
        let [fund1, fund2, fund3] = await axios.all(this.setFundAPI.map(x => this.getAxiosData(x)))
        let [etf1, etf2, etf3] = await axios.all(this.setEtfAPI.map(x => this.getAxiosData(x)))
        let [div1, div2, div3] = await axios.all(this.setDivAPI.map(x => this.getAxiosData(x)))
        let [fund_0056, fund_00713, fund_00850] = [fund1, fund2, fund3].map(d => this.fundDataJson(d))
        let [chart_0056, chart_00713, chart_00850] = [fund1, fund2, fund3].map(c => this.fundDataChart(c))
        let [etf_0056, etf_00713, etf_00850] = [etf1, etf2, etf3].map(d => this.etfDataJson(d))
        let [div_0056, div_00713, div_00850] = [div1, div2, div3].map(d => this.divDataJson(d))

        let dataArry = [[fund_0056, etf_0056, chart_0056, div_0056], [fund_00713, etf_00713, chart_00713, div_00713], [fund_00850, etf_00850, chart_00850, div_00850]]
        //基金資料
        for (let [index, x] of ['0056', '00713', '00850'].entries()) {
          //console.log(x);
          this.fund.find(f => f.fundid == x).data = {
            fund: dataArry[index][0],
            etf: dataArry[index][1],
            chart: dataArry[index][2],
            divList: dataArry[index][3]
          };
        }
        this.fund.map(x => this.drawChart(x.data.chart))

      }
      catch (err) {
        console.error(err)
      }

    },
    getYearAssignRation(yearAssignRatio) {
      return yearAssignRatio ? `${yearAssignRatio}%` : ' - '
    },
    getPayDate(divPayDate) {
      return divPayDate == ' ' ? ' - ' : divPayDate
    },

  }
});

//跳窗模板
app.component("modal", {
  props: {
    title: String,
    color: String,
    mod: String,
    position: {
      type: String,
      default: 'Y_center'
    }
  },
  setup(props) {
    //console.log(props.title);
    return { props };
  },
  template:
    `
  <div class="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" :class='position'>
        <div class="modal-container">

          <div class="modal-header" :class='mod'>
            <h3 :style="{color:color}">{{ props.title }}</h3>
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
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>

  `
});


app.mount('#app');