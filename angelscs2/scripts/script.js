var eventTag = document.querySelector('.event');
var prizeTag = document.querySelector('.prize');
var footerCta = document.querySelector('.float-cta');
var goTop = document.querySelector('.footer-gotop');
var eventOffset = eventTag.offsetTop;
var prizeOffset = prizeTag.offsetTop;
var clintH = document.documentElement.clientHeight;
function hide(el) {
  el.style.display = 'none'
}
function show(el) {
  el.style.display = 'block'
}
function scrollDisplay(el, scrollTop, offset) {
  if(scrollTop > offset) {
    show(el);
  } else {
    hide(el);
  }
}
window.addEventListener('scroll', function() {
  var scrollTop = document.documentElement.scrollTop;
  scrollDisplay(footerCta, scrollTop, eventOffset);
  scrollDisplay(goTop, scrollTop, prizeOffset - clintH);
});
goTop.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})