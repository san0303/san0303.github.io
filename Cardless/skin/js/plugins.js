// Avoid `console` errors in browsers that lack a console.
(function () {
	var method;
	var noop = function () { };
	var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

// Place any jQuery/helper plugins in here.
; (function ($) {
	var methods = {
		init: function (options) {
			var $mainNav = $(this);

			$mainNav.before('<div class="magic-line"></div>');
			var $magicLine = $mainNav.prev();

			var origLeft = 0, origWidth = 0;
			if ($(' > li.active:not(.magic-line--exclude)', $mainNav).length > 0) {
				origLeft = $(' > li.active', $mainNav).position().left;
				origWidth = $(' > li.active', $mainNav).width();
			};
			$magicLine
				.css({
					left: origLeft,
					width: origWidth
				})
				.data('origLeft', origLeft)
				.data('origWidth', origWidth);
			$(' > li:not(.magic-line--exclude)', $mainNav).hover(function () {
				var $el = $(this),
					leftPos = $el.position().left,
					newWidth = $el.width();
				$magicLine.stop().animate({
					left: leftPos,
					width: newWidth
				});
			}, function () {
				$magicLine.stop().animate({
					left: $magicLine.data('origLeft'),
					width: $magicLine.data('origWidth')
				});
			});

			$(window).on('resize', function (e) {
				clearTimeout($.data(this, 'resizeTimerMagicLine'));
				$.data(this, 'resizeTimerMagicLine', setTimeout(function () {
					methods.update.apply($mainNav);
				}, 150));
			});

			return this;
		},
		reset: function () {
			var $magicLine = $(this).prev()
			$magicLine
				.css({
					left: $magicLine.data('origLeft'),
					width: $magicLine.data('origWidth')
				});
			return this;
		},
		update: function () {
			var $magicLine = $(this).prev(),
				origLeft = 0, origWidth = 0;
			var $currentItem = $(' > li.active:not(.magic-line--exclude):first', $(this));
			if ($currentItem.length > 0) {
				origLeft = $currentItem.position().left;
				origWidth = $currentItem.width();
			};
			$magicLine
				.css({
					left: origLeft,
					width: origWidth
				})
				.data('origLeft', origLeft)
				.data('origWidth', origWidth);
			return this;
		}
	};

	$.fn.magicLine = function (methodOrOptions) {
		if (methods[methodOrOptions]) {
			return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + methodOrOptions + ' does not exist on jQuery.magicLine');
		}
	};
})(jQuery);

; (function ($) {
	var settings = {
		selector: ' > li > a > img',
		dataPC: 'img-pc',
		dataMobile: 'img-mobile'
	},
	methods = {
		init: function (options) {
			var $this = $(this);
			settings = $.extend({}, settings, options);
			methods.reset.apply($this);
			$(window).on('resize', function (e) {
				//clearTimeout($.data(this, 'resizeTimerSlider'));
				//$.data(this, 'resizeTimerSlider', setTimeout(function () {
					methods.reset.apply($this);
				//}, 100));
			});
			return this;
		},
		reset: function () {
			var $this = $(this);
			var toMode = Modernizr.mq('(max-width: 768px)') ? 'Mobile' : 'PC';
			var oeMode = $this.data('mode');
			if (toMode != oeMode) {
				var dataName = toMode == 'PC' ? settings.dataPC : settings.dataMobile;
				$this.parents('.bx-viewport').css('overflow', 'visible');
				$(settings.selector, $this).each(function (i, el) {
					$(el).prop('src', $(el).data(dataName));
				});
				$this.data('mode', toMode);
			}
		}
	};

	$.fn.aplusRwdSlider = function (methodOrOptions) {
		if (methods[methodOrOptions]) {
			return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + methodOrOptions + ' does not exist on jQuery.magicLine');
		}
	};
})(jQuery);

//slide--menu�C
var slideMenu = {
	turnOn: function (idName) {
		$('.side--menu--root', 'ul' + idName).click(function () {
			var $this = $(this),
				$thisLi = $this.parent('li');
			$this.parents('.slide--menu').find('ul').stop();
			$this.siblings('ul').slideToggle(function () {
				if ($(this).is(':visible')) {
					$(this).parent('li').addClass('active');
					$this.addClass('on');
				} else {
					$(this).parent('li').removeClass('active');
					$this.removeClass('on');
				}
			});
			$thisLi.siblings('li').each(function (e) {
				if ($(this).hasClass('active')) {
					$(this).children('ul').css({ 'display': 'block' });
				}
				$(this).removeClass('active').children('a').removeClass('on');
				$(this).children('ul').slideUp();
			});
			return false;
		});
	}
};
