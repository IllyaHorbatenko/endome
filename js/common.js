class sliderAnimationDescription {
	constructor() {
		this.ts1 = new TimelineMax();
		this.ts2 = new TimelineMax();
		this.ts3 = new TimelineMax();
		this.ts4 = new TimelineMax();
		this.ts5 = new TimelineMax();
		this.ts6 = new TimelineMax();

		this.td1 = new TimelineMax();

		this.text = new TimelineMax();

		this.ts1.pause();
		this.ts2.pause();
		this.ts3.pause();
		this.ts4.pause();
		this.ts5.pause();
		this.ts6.pause();

		this.td1.pause();
	}

	description() {
		this.slideAnim();
		this.descAnim();
	};

	slideAnim() {

		this.text
			.from('.animation-item h3', 0.7, {
				y: -50,
				opacity: 0,
				ease: Power4.easeOut
			}, '+=0.3')
			.from('.animation-item .order', 0.7, {
				y: 50,
				opacity: 0,
				ease: Power4.easeOut
			}, '-=0.5');

		this.ts1
			.from('.animation-item.item1 .img1', 0.7, {
				y: 100,
				opacity: 0,
				ease: Power4.easeOut
			}, '+=0.5')
			.from('.animation-item.item1 .img2', 0.7, {
				y: -100,
				opacity: 0,
				ease: Power4.easeOut
			}, '-=0.5')
			.from('.animation-item.item1 .img3', 0.7, {
				y: 100,
				opacity: 0,
				ease: Power4.easeOut
			}, '-=1');

		this.ts2
			.from('.animation-item.item2  .img1', 0.7, {
				y: 100,
				opacity: 0,
				ease: Power4.easeOut
			}, '+=0.5')
			.from('.animation-item.item2  .img2', 0.7, {
				y: -100,
				opacity: 0,
				ease: Power4.easeOut
			}, '-=0.5');

		this.ts3
			.from('.animation-item.item3  .img1', 0.7, {
				y: 100,
				opacity: 0,
				ease: Power4.easeOut
			}, '+=0.5')
			.from('.animation-item.item3  .img2', 0.7, {
				y: -100,
				opacity: 0,
				ease: Power4.easeOut
			}, '-=0.5');

		this.ts4
			.from('.animation-item.item4  .img3', 0.7, {
				y: -50,
				opacity: 0,
				ease: Power4.easeOut
			}, '+=0.5')
			.from('.animation-item.item4  .img2', 0.5, {
				scale: 0,
				opacity: 0,
				ease: Power4.easeOut
			}, '-=0.5')
			.from('.animation-item.item4  .img1', 0.5, {
				scale: 0,
				opacity: 0,
				ease: Power4.easeOut
			}, '-=0.4');

		this.ts5
			.from('.animation-item.item5  .img1', 0.7, {
				y: 100,
				opacity: 0,
				ease: Power4.easeOut
			}, '+=0.5')
			.from('.animation-item.item5  .img2', 0.7, {
				y: -100,
				opacity: 0,
				ease: Power4.easeOut
			}, '-=0.5');

		this.ts6
			.from('.animation-item.item6  .img1', 0.7, {
				y: 100,
				opacity: 0,
				ease: Power4.easeOut
			}, '+=0.5')
			.from('.animation-item.item6  .img2', 0.7, {
				y: -100,
				opacity: 0,
				ease: Power4.easeOut
			}, '-=0.5');
	};

	descAnim() {
		this.td1
			.from('.service-description-wrap h3', 0.7, {
				y: -50,
				opacity: 0,
				ease: Power4.easeOut
			}, '+=0.3')
			.from('.service-description-wrap .description-text', 0.7, {
				x: 50,
				opacity: 0,
				ease: Power4.easeOut
			}, '-=0.7')
			.from('.service-description-wrap .more-link', 0.7, {
				y: 50,
				opacity: 0,
				ease: Power4.easeOut
			}, '-=0.7');
	};

	start(elem = '') {
		var index = parseInt($(elem).attr('data-index'));

		if (index === 1) {
			this.text.restart();

			this.ts1.restart();
			this.td1.restart();
		}
		else if (index === 2) {
			this.text.restart();

			this.ts2.restart();
			this.td1.restart();
		}
		else if (index === 3) {
			this.text.restart();

			this.ts3.restart();
			this.td1.restart();
		}
		else if (index === 4) {
			this.text.restart();

			this.ts4.restart();
			this.td1.restart();
		}
		else if (index === 5) {
			this.text.restart();

			this.ts5.restart();
			this.td1.restart();
		}
		else if (index === 6) {
			this.text.restart();

			this.ts6.restart();
			this.td1.restart();
		}
		else {
			this.text.play();
			this.ts1.play();
			this.td1.play();
		}
	}
}

var animation = new sliderAnimationDescription;

function radioSliderTop() {
	var wrap = $('.service-section .select-wrap .wrap');
	var now = parseInt(wrap.attr('style').replace(/[^-0-9]/gim, ''));

	wrap.css({
		'transform': 'rotate(' + (now + 60) + 'deg)'
	});
	wrap.find('li').css({
		'transform': 'rotate(' + (now + 60) * -1 + 'deg)'
	});
	var limit = 0;
	wrap.find('li').each(function () {
		if (limit === wrap.find('li').length - 1) {
			wrap.find('li[data-index=1]').addClass('active');
		}

		if ($(this).hasClass('active')) {

			$(this).removeClass('active');
			wrap.find('li[data-index=' + (parseInt($(this).attr('data-index')) + 1) + ']').addClass('active');
			sliderAnimation();
			return false
		}
		limit++;
	});
}

function radioSliderBottom() {
	var wrap = $('.service-section .select-wrap .wrap');
	var now = parseInt(wrap.attr('style').replace(/[^-0-9]/gim, ''));

	wrap.css({
		'transform': 'rotate(' + (now - 60) + 'deg)'
	});
	wrap.find('li').css({
		'transform': 'rotate(' + (now - 60) * -1 + 'deg)'
	});
	var limit = 0;
	wrap.find('li').each(function () {


		if ($(this).hasClass('active')) {

			$(this).removeClass('active');
			wrap.find('li[data-index=' + (parseInt($(this).attr('data-index')) - 1) + ']').addClass('active');
			if (parseInt($(this).attr('data-index')) === 1) {
				wrap.find('li[data-index=6]').addClass('active');
			}
			sliderAnimation();
			return false
		}

	});
}

function sliderAnimation() {
	var wrap = $('.service-section .select-wrap .wrap');
	wrap.find('li').each(function () {

		if ($(this).hasClass('active')) {
			var index = parseInt($(this).attr('data-index'));
			$('.animation-item').hide();
			$('.service-description-wrap .item').hide();

			$('.animation-item[data-index=' + index + ']').show();
			$('.service-description-wrap .item[data-index=' + index + ']').show();

			animation.start('.animation-item[data-index=' + index + ']');
			return false
		}
	});
}

function activeSection(section, startTop = 0, startBotton = 0) {
	section = '.' + section;
	if ($(section).offset() !== undefined) {
		var topPosition = $(section).offset().top - startTop,
			bottomPosition = $(section).offset().top + $(section).height() - startBotton;
		if (($(window).scrollTop() >= topPosition) && ($(window).scrollTop() <= bottomPosition)) {
			return true;
		}
	}
}
$(window).scroll(function () {
	if (activeSection('blog-contant-section')) {
		$('.scroll-top-wrap').addClass('active')
	} else {
		$('.scroll-top-wrap').removeClass('active')
	}
});

$(document).ready(function () {
	animation.description();
	animation.start();


	if ($('#blog-canvas-wrap').length !== 0) {
		window.someCanvas('blog-canvas-wrap', 'blog-canvas');
	}


	if (activeSection('blog-contant-section')) {
		$('.scroll-top-wrap').addClass('active')
	} else {
		$('.scroll-top-wrap').removeClass('active')
	}

	$('.scroll-top-wrap').click(function (e) {
		"use strict";
		e.preventDefault();

		$('html, body').stop().animate({
			scrollTop: $('body').offset().top
		}, 500);
		return false;
	});

	$('.service-section .select-wrap .wrap').css('transform', 'rotate(-94deg)');
	$('.service-section .select-wrap .wrap li').css('transform', 'rotate(94deg)');

	var index = 0;
	$('.service-section .select-wrap .wrap li').each(function () {
		index++;
		$(this).attr('data-index', index)
	});


	$('.top-button').click(radioSliderTop);
	$('.bottom-button').click(radioSliderBottom);
	$('.service-item').click(function () {
		var now = $('.service-item').map(function () {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				return this
			}
		});

		var index = parseInt($(this).data('index'));

		var nowIndex = parseInt(now.data('index'));
		var difference = index - nowIndex;


		var wrap = $('.service-section .select-wrap .wrap');
		var rotate = parseInt(wrap.attr('style').replace(/[^-0-9]/gim, ''));
		$(this).addClass('active');
		sliderAnimation();

		if ((nowIndex === $('.service-item').length) && (index === 1)) {
			difference = 1;
		}
		if ((index === $('.service-item').length) && (nowIndex === 1)) {
			difference = -1;
		}

		wrap.css({
			'transform': 'rotate(' + (rotate + (60 * difference)) + 'deg)'
		});
		wrap.find('li').css({
			'transform': 'rotate(' + (rotate + (60 * difference)) * -1 + 'deg)'
		});


	});


	// Определения браузера
	function get_name_browser() {
		// получаем данные userAgent
		var ua = navigator.userAgent;
		// с помощью регулярок проверяем наличие текста,
		// соответствующие тому или иному браузеру
		if (ua.search(/Chrome/) > 0) return 'Google Chrome';
		if (ua.search(/Firefox/) > 0) return 'Firefox';
		if (ua.search(/Opera/) > 0) return 'Opera';
		if (ua.search(/Safari/) > 0) return 'Safari';
		if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
		if (ua.search(/Trident/) > 0) return 'Trident';
		// условий может быть и больше.
		// сейчас сделаны проверки только
		// для популярных браузеров
		return 'Не определен';
	}

	if (get_name_browser() == "Trident" || get_name_browser() == "Internet Explorer" || get_name_browser() == "Firefox") {
		// $(".from_what_is_seo .from_what_is_seo_bot_decor svg").css("bottom", "-217px");
		// $(".website_promotion .website_promotion_decor").css("bottom", "-177px");
		// $(".cost_of_online_store .cost_of_online_store_links_item").css("margin-right", "72px");
	}
	if (get_name_browser() == "Safari") {
		console.log("Это Сафари");
	}
	if (get_name_browser() == "Google Chrome") {
		console.log("Это Хром");
	}
	// для инициализации tooltips
	// $( document ).tooltip({
	//   track: true
	// });

	// скролл по ссылке с атрибутом href
	// $(".header_nav a[href*='#']").on("click", function(e) {
	//     e.preventDefault();
	//     var anchor = $(this);
	//     $('html, body').stop().animate({
	//         scrollTop: $(anchor.attr('href')).offset().top
	//     }, 500);
	//     return false;
	// });

	// Скролл по классу .scroll_to и атрибуту data-scroll у кнопки к примеру (data-scroll="куда скроллим" в элементе куда скроллим ставим id потом впишем в куда скроллим)
	// $(".scroll_to").on("clcik", function(e) {
	//     e.preventDefault();
	//     var anchor = $(this);
	//     $('html, body').stop().animate({
	//         scrollTop: $("#" + anchor.data('scroll')).offset().top
	//     }, 500);
	//     return false;
	// });
	$('#burger').click(function () {
		$('.eff').toggleClass('active');
		$('#large-header').toggleClass('active');
		$('body').toggleClass('slidebars');
		$(this).toggleClass('active');
	});

	$('.main').click(function(){
		if($(this).hasClass('active')){
			$('.eff').toggleClass('active');
			$('#large-header').toggleClass('active');
			$('body').toggleClass('slidebars');
			$('#burger').toggleClass('active');
		}
	});

	$(".owl-carousel").slick({
		dots: true
	});
	loading(10000);


});

function loading(speed) {
	var level = 0,
		interval = 10,
		dots = $('.section-slider .slick-dots li button');
	speed = 100 / speed;
	$('.owl-carousel').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		level = 0;
	});
	setInterval(function () {
		level += (speed * interval); // Скорость выполнения
		if (level > 100) {
			level = 0;
			$('.slick-next').trigger('click');
		} else {
			$('.slider-progress .progress').css('width', (level + '%'))
		}
	}, interval); // Плавность
}

$(window).resize(function () {

});



