

class sliderAnimationDescription {
	constructor() {
		this.ts1 = new TimelineMax();
		this.td1 = new TimelineMax();

		this.ts1.pause();
		this.td1.pause();
	}

	description() {
		this.slideAnim();
		this.descAnim();
	};

	slideAnim(){
		this.ts1
			.from('.animation-item h3', 0.7, {
				y: -50,
				opacity: 0,
				ease: Power4.easeOut
			}, '+=0.3')
			.from('.animation-item .order', 0.7, {
				y: 50,
				opacity: 0,
				ease: Power4.easeOut
			}, '-=0.5')
			.from('.animation-item .img1', 0.7, {
				y: 100,
				opacity: 0,
				ease: Power4.easeOut
			}, '-=0.5')
			.from('.animation-item .img2', 0.7, {
				y: -100,
				opacity: 0,
				ease: Power4.easeOut
			}, '-=0.5');
	};

	descAnim(){
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
			this.ts1.restart();
			this.td1.restart();
		}
		else if (index === 2) {
			this.ts1.restart();
			this.td1.restart();
		}
		else if (index === 3) {
			this.ts1.restart();
			this.td1.restart();
		}
		else if (index === 4) {
			this.ts1.restart();
			this.td1.restart();
		}
		else if (index === 5) {
			this.ts1.restart();
			this.td1.restart();
		}
		else if (index === 6) {
			this.ts1.restart();
			this.td1.restart();
		}
		else{
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


$(document).ready(function () {
	animation.description();
	animation.start();

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

$(window).scroll(function () {

});

