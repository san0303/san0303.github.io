var vm = new Vue({
  el: '#app',
  data() {
    return {
      yScrollVaule: '',
      showAllotList: false,
      location: [],
      qa: [
        {
          q: '我的風險屬性是否可以一次定期定額三檔龍頭基金？',
          a: '於元大投信基金理財網、元大基金先生 APP 時進行定期定額申購時，系統即會自動判斷您目前的風險屬性，若您的風險屬性符合即可一次定期定額三檔元大龍頭系列基金。',
          isOpen: false,
        },
        {
          q: '我要如何定義我是「當月」每 1 檔均實際成功扣款乙次？',
          a: '假設 1/28 新增第一檔定期定額契約，扣款日 1 號；2/28 新增第二檔定期定額契約，扣款日 1 號，；3/28 新增第三檔定期定額契約，扣款日 1 號。雖三筆契約分別都有扣款成功，但不在「同一個月份」，即不符合活動條件。',
          isOpen: false,
        },
        {
          q: '我本來就有定期定額其中一檔龍頭基金，是不是再定期定額其他兩檔就符合活動資格？',
          a: '3 檔元大龍頭系列基金均需於「活動期間」新建立定期定額契約才符合活動條件，舉例來說，若您在 2023 年已建立元大日本龍頭企業基金的定期定額契約，您仍需在龍年（2024 年）新建立 3 檔元大龍頭系列基金定期定額契約。',
          isOpen: false,
        },
        {
          q: '如果我成功獲得 30 張單筆申購零手續費優惠券，是否適用於新基金募集？',
          a: '需視新募集基金是否開放優惠券而定。',
          isOpen: false,
        },
        {
          q: '我在月底新增定期定額契約，但成功扣款日期是下一個月，我什麼時候可以領到優惠券？',
          a: '如您於 1/31 新增定期定額契約，但實際扣款日期為 2/1，您將在實際扣款月份的次月（3 月）取得優惠券。假設您第一檔定期定額契約實際扣款日為 2/1，第二檔為 3/1，第三檔為 4/1，而在 4/1 時三檔基金「都」同時扣款成功，故將於次月（5 月）才會領取到優惠券。',
          isOpen: false,
        },
        {
          q: '線上新增定期定額 3 檔元大龍頭系列基金，需要三檔不一樣的基金？還是可以同一檔基金，設三個不同契約？',
          a: '假設您三檔定期定額契約分別為「元大日本龍頭企業基金、元大全球優質龍頭平衡基金、元大台灣高股息優質龍頭基金-新台幣A類型不配息(本基金之配息來源可能為收益平準金)」則符合活動資格。但若您三檔定期定額契約分別為元大日本龍頭企業基金、元大台灣高股息優質龍頭基金-新台幣A類型不配息(本基金之配息來源可能為收益平準金)、元大台灣高股息優質龍頭基金-新台幣B類型配息(本基金之配息來源可能為收益平準金)」則不符合活動資格。',
          isOpen: false,
        },
        {
          q: '如何取得我的優惠券？',
          a: '當您登入元大投信基金理財網、元大基金先生 APP 時，如您符合活動贈獎資格，系統會自動將優惠券匯入您的基金理財帳戶，同時透過電子報方式通知您，若您未於本公司留存您的電子信箱或訂閱電子報則不另行通知。',
          isOpen: false,
        },
        {
          q: '我要如何查詢自己的優惠券使用狀態與剩餘次數？',
          a: '該優惠券名稱會註明清楚，客戶在電子平台單筆申購選擇該優惠券時，可看到剩餘可用次數。',
          isOpen: false,
        },
      ],
      isOpen_faq: false,
      showAD: false,
      showOpenacc: false,
      showBankLiist: false,
      GetBankShow: [],
      GetEPay: [],
      GetBank: [],
      epayList: [
        { BankCode: '004', BankName: '臺灣銀行', ePayAgency: ['392', '389'] },
        { BankCode: '005', BankName: '臺灣土地銀行', ePayAgency: ['392', '389'] },
        { BankCode: '007', BankName: '第一商業銀行', ePayAgency: ['392', '389'] },
        { BankCode: '008', BankName: '華南商業銀行', ePayAgency: ['392', '389'] },
        { BankCode: '009', BankName: '彰化商業銀行', ePayAgency: ['392', '389'] },
        { BankCode: '011', BankName: '上海商業儲蓄銀行', ePayAgency: ['392', '389'] },
        { BankCode: '012', BankName: '台北富邦商業銀行', ePayAgency: ['392', '389'] },
        { BankCode: '013', BankName: '國泰世華商業銀行', ePayAgency: ['392', '389'] },
        { BankCode: '017', BankName: '兆豐國際商業銀行', ePayAgency: ['389'] },
        { BankCode: '050', BankName: '臺灣中小企業銀行', ePayAgency: ['392', '389'] },
        { BankCode: '053', BankName: '台中商業銀行', ePayAgency: ['392','389'] },
        { BankCode: '102', BankName: '華泰商業銀行', ePayAgency: ['389'] },
        { BankCode: '103', BankName: '臺灣新光商業銀行', ePayAgency: ['392', '389'] },
        { BankCode: '700', BankName: '中華郵政', ePayAgency: ['392', '389'] },
        { BankCode: '806', BankName: '元大商業銀行', ePayAgency: ['392', '389'] },
        { BankCode: '807', BankName: '永豐商業銀行', ePayAgency: ['392'] },
        { BankCode: '808', BankName: '玉山商業銀行', ePayAgency: ['389'] },
        { BankCode: '809', BankName: '凱基商業銀行', ePayAgency: ['389'] },
        { BankCode: '812', BankName: '台新國際商業銀行', ePayAgency: ['392', '389'] },
        { BankCode: '816', BankName: '安泰商業銀行', ePayAgency: ['389'] },
        { BankCode: '822', BankName: '中國信託商業銀行', ePayAgency: ['392'] },
        { BankCode: '823', BankName: '將來商業銀行', ePayAgency: ['389'] },
        { BankCode: '826', BankName: '樂天國際商業銀行', ePayAgency: ['392', '389'] },
      ],
      showEpayList: false,
      currentBank: ''
    }
  },
  computed: {
    expandIcon() {
      return [
        'icon-lb-expand',
        { 'open': this.showBankLiist }
      ]
    },
    expandList() {
      return [
        'lb-bank-list',
        { 'open': this.showBankLiist }
      ]
    },
    currentBankList() {
      return this.epayList.filter(x => 
        x.ePayAgency.includes(this.currentBank)
      )
    }
  },
  mounted() {
    document.addEventListener('click', this.closeAllotList)
    this.getLocation()
    window.addEventListener('scroll', this.scrollWatch)
    this.getbank('GetBankShow')
    this.getbank('GetEPay')
    this.getbank('GetBank')
  },
  methods: {
    // 銀行
    getbank(val) {
      const apiUrl = 'https://api.yuantafunds.com/ECTranslation/api/Translate'

      axios({
        url: apiUrl,
        method: 'POST',
        params: {
          FuncId: val,
          PageName: 'Bank',
          APIType: 'AccApplyApi',
          AppName: 'AccApply',
          Device: '4',
          deviceId: '0e3ca41f-1d91-4519-b39e-cd649ca38865'
        },
        data: {},
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
      })
      .then((result) => {
        console.log(result)
        this[val] = result.data.Data
      })
      .catch((error) => {
        console.error(`${error || error.message}`)
      })
    },
    setCurrentBank(val) {
      this.currentBank = val
      this.showEpayList = true
    },
    scrollWatch() {
      this.yScrollVaule = window.scrollY
    },
    goTop() {
      this.$refs.topScroll.scrollIntoView({ behavior: 'smooth' })
    },
    toggle(e) {
      this.showAllotList = !this.showAllotList
    },
    closeAllotList(e) {
      const apply = document.querySelector('#btn-side-apply')

      if (!apply.contains(e.target)) {
        this.showAllotList = false
      }
    },
    closeLbox(val) {
      this[val] = false
      document.body.style.overflowY = 'auto'
    },
    openLbox(val) {
      this[val] = true
      document.body.style.overflowY = 'hidden'
    },
    closeNScroll(val) {
      this[val] = false
      document.body.style.overflowY = 'auto'
      this.$refs.adScroll.scrollIntoView({ behavior: 'smooth' })
    },
    offerScroll() {
      this.$refs.adScroll.scrollIntoView({ behavior: 'smooth' })
    },
    // 展開常見問題
    showDetail(val) {
      this[val] = !this[val]
    },
    showQa(index) {
      this.qa[index].isOpen = !this.qa[index].isOpen
    },
    showMoreDivList() {
      this.fundListShow = !this.fundListShow
      this.fundMoreListShow = !this.fundMoreListShow
      document.body.style.overflowY = 'hidden'
    },
    activeBtn(val) {
      return ['arrow', { active: this[val] }]
    },
    activeQa(index) {
      return this.qa[index].isOpen ? 'active' : ''
    },
    // 地址
    getLocation() {
      axios({
        url: 'https://api.yuantafunds.com/ectranslation/api/bridge',
        methods: 'GET',
        params: {
          APIType: 'EC2API',
          AppName: 'FundWeb',
          PageName: 'LeadersFunds',
          Device: '4',
          DeviceId: '0e3ca41f-1d91-4519-b39e-cd649ca38865',
          FuncId: 'CustomerService',
        },
      })
        .then((result) => {
          this.location = result.data.Data.CS
        })
        .catch((error) => {
          console.error(`${error || error.message}`)
        })
    },
    addr(arr) {
      return `${arr.ComName}：${arr.Address} ${arr.Tel}　${arr.ApprovedNo}`
    },
    trackCustom(btnName, contentName) {
      fbq('trackCustom', btnName, { content_name: contentName })
    },
    openOpenacc(val) {
      this.trackCustom('龍頭推廣頁_我要開戶', '我要開戶')
      this.openLbox(val)
    },
    openList() {
      this.showBankLiist = !this.showBankLiist
    }
  },
})
