;(function ($) {
	'use strict';

	$('.tabs-header').on('click', 'li:not(.active)', function () {
		var index_el = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(this).closest('.tabs').find('.tabs-item').removeClass('active').eq(index_el).addClass('active');
		$(this).closest('.inner-content').siblings('.tabs').find('.tabs-item').removeClass('active').eq(index_el).addClass('active');
	});


	$('.accordion__title').on('click', function (e) {
		e.preventDefault();
		$(this).parent().toggleClass('active').find('.accordion__text').slideToggle(300);
		$(this).parent().siblings().removeClass('active').find('.accordion__text').slideUp(300);

	})

})(jQuery, window, document);