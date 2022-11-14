var noticeTag = document.querySelector('.activity-prize-item');
var goTop = document.querySelector('.float-gotop');
var noticeOffset = noticeTag.offsetTop;
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
  scrollDisplay(goTop, scrollTop, noticeOffset - clintH);
});
goTop.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})