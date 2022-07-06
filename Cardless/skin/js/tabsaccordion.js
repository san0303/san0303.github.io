$(function () {
	//set PC tabs controls
	$(window).on('resize', function () {
		if (!Modernizr.mq('(max-width: 768px)')) {
			if ($(".accordion--tabs").length == 0) {
				var ultabControl = '<ul class="accordion--tabs &tabsCount& clearfix">&li&</ul>',
					liControl = '',
					li = '<li class="&active&"><a href="javascript:void(0)" class="tab-title" title="&index&">&Title&</a></li>';
				$('.accordion--group > li').each(function (e) {
					var title = $(this).children('.accordion--title'),
						tabsLi = (title.hasClass('js-on')) ? li.replace('&active&', 'active') : li.replace('&active&', ' ');
					liControl += tabsLi.replace('&index&', e).replace('&Title&', title.text());
				});
				var tabsCountCss = ($('.accordion--group > li').length > 4) ? 'tab5' : 'tab4';
				ultabControl = ultabControl.replace('&tabsCount&', tabsCountCss).replace('&li&', liControl);
				$('.accordion--group').before(ultabControl);

				$('.accordion--content').removeAttr('style');
			}
		}
		else {
			$('.accordion--tabs').remove();
		}
	}).trigger('resize');

	//anchor
	$(document).on('click', ".tab-title", function () {
		var index = this.title;
		$(this).parent('li').addClass('active').siblings().removeClass('active');
		var toTop = $('.accordion--group > li').eq(index).offset().top - 40;
		$("html,body").animate({ scrollTop: toTop }, 500);

		$('.accordion--group > li').find('.accordion--title').removeClass('js-on').eq(index).addClass('js-on');
	});

	//mobile accordion
	$('.accordion--title').on('click', function (e) {
		$(this).siblings('.accordion--content').slideToggle(function () {
			$(this).parent('li').toggleClass('active');
		});
		$(this).parent('li').siblings('li.active').each(function (e) {
			$(this).removeClass('active');
			$(this).children('.accordion--content').slideUp();
		});
	});
})