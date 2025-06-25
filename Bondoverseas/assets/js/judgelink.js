"use strict";
 
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
 
function urlAppHandler(url) {
 if (typeof url != 'undefined') {
   if (isMobile) {
     window.location.href = 'https://m.pbankinginyoursuperapp.yuantabank.com.tw/pmb/MIMQU015?type=1';
   } else {
     window.open(url, '_blank');
   }
 }
}
 
$(document).ready(function () {
 $('#buyBondoverseas').on('click', function () {
   urlAppHandler('https://ebank.yuantabank.com.tw/nib/ibanc_b.jsp?OSdebtBuy');
 });
});