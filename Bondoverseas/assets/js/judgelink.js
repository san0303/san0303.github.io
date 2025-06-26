  document.getElementById('buyBondoverseas').addEventListener('click', function (e) {
    e.preventDefault(); // 阻止預設跳轉

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isMobile = isAndroid || isIOS;

    // app 功能頁
    const appLink = "https://m.pbankinginyoursuperapp.yuantabank.com.tw/pmb/MIMQU015?type=1";
    // App Store / Play Store
    const iosStore = "https://apps.apple.com/tw/app/%E5%85%83%E5%A4%A7%E9%8A%80%E8%A1%8C-yuanta-commercial-bank/id1173515038";
    const androidStore = "https://play.google.com/store/apps/details?id=com.yuantabank.bankinginyour.superapp.personal&hl=zh_TW";
    // 桌機用連結（另開）
    const webLink = "https://ebank.yuantabank.com.tw/nib/ibanc_b.jsp?OSdebtBuy";

    if (isMobile) {
      // 嘗試打開 APP
      window.location.href = appLink;

      // 若未安裝，延遲導引至下載中心
      setTimeout(() => {
        if (isIOS) {
          window.location.href = iosStore;
        } else if (isAndroid) {
          window.location.href = androidStore;
        }
      }, 1500);
    } else {
      // 桌機使用者另開新視窗前往網頁版
      window.open(webLink, '_blank');
    }
  });