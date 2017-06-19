var Widget = {
	// адрес для запроса
	_url : "https://dev.nexusmedia-ua.com/devtest/",

	// данные для вывода
	_name: '',
	_status: '',
	_avatar: '',
	_textMessage: '',

	// активные элементы
	widget: undefined,
	open: undefined,
	close: undefined,
	message: undefined,
	closeUserInfo: undefined,
	userInfo: undefined,
	textMessage: undefined,

	// стили
	_style: {
		'.widget-mes-con': {
			'position': 'fixed',
			'bottom': '100px',
			'right': '100px',
			'z-index': '100000',
			'font-family': 'Roboto, sans-serif'
		},
		'.widget-mes-con .widget-mes-open-message-wrap': {
			'cursor': 'pointer',
			'transition': '.3s',
			'background': 'rgba(3, 169, 245, 0.23)',
			'width': '30px',
			'height': '30px',
			'padding': '10px',
			'border-radius': '50%',
			'position': 'absolute',
			'bottom': '-25px',
			'right': '-25px',
			'box-sizing': 'content-box'
		},
		'.widget-mes-con .widget-mes-open-message-wrap.widget-mes-hide': {
			'animation': 'widget-mes-hide-icon 0.5s 1 ease-in-out forwards'
		},
		'.widget-mes-con .widget-mes-open-message-wrap.widget-mes-show': {
			'animation': 'widget-mes-show-icon 0.5s 1 ease-in-out forwards'
		},
		'.widget-mes-con img': {
			'width': '100%'
		},
		'.widget-mes-con .message-wrap-widget': {
			'border-radius': '5px',
			'width': ' 300px',
			'display': 'none',
			'background': '#fff'
		},
		'.widget-mes-con .message-wrap-widget.widget-mes-show': {
			'animation': 'widget-mes-show-message 0.5s 1 ease-in-out forwards'
		},
		'.widget-mes-con .message-wrap-widget.widget-mes-hide': {
			'animation': 'widget-mes-hide-message 0.5s 1 ease-in-out forwards'
		},
		'.widget-mes-con .close-i': {
			'background': '#0078fb',
			'width': '20px',
			'border-radius': '50%',
			'height': '20px',
			'cursor': 'pointer',
			'transition': '.3s',
			'position': 'absolute',
			'right': '-10px',
			'bottom': '-10px',
			'display': 'none'
		},
		'.widget-mes-con .close-i.widget-mes-show': {
			'animation': 'widget-mes-show-icon 0.5s 1 ease-in-out forwards'
		},
		'.widget-mes-con .close-i.widget-mes-hide': {
			'animation': 'widget-mes-hide-icon 0.5s 1 ease-in-out forwards'
		},
		'.widget-mes-con .close-i-span': {
			'width': '1px',
			'height': '10px',
			'display': 'block',
			'position': 'absolute',
			'background': '#fff',
			'left': '0',
			'margin': 'auto',
			'right': '0',
			'top': '5px'
		},
		'.widget-mes-con .close-i-line-1': {
			'transform': 'rotate(45deg)'
		},
		'.widget-mes-con .close-i-line-2': {
			'transform': 'rotate(-45deg)'
		},
		'.widget-mes-con .widget-mes-user-info': {
			'padding': '10px',
			'background': '#f2f2f2',
			'border-radius': '5px 5px 0px 0px'
		},
		'.widget-mes-con .widget-mes-user-info.widget-mes-hide': {
			'animation': 'widget-mes-hide-user-info 0.5s 1 ease-in-out forwards'
		},
		'.widget-mes-con .widget-mes-avatar': {
			'width': '40px',
			'border-radius': '50%',
			'overflow': 'hidden',
			'font-size': '0',
			'display': 'inline-block',
			'vertical-align': 'middle',
			'margin-right': '5px'
		},
		'.widget-mes-con .widget-mes-name-status': {
			'display': 'inline-block',
			'vertical-align': 'middle',
			'position': 'relative'
		},
		'.widget-mes-con .widget-mes-name-status-after': {
			'content': '',
			'width': '0',
			'height': '0',
			'border': '12px solid transparent',
			'border-bottom': '15px solid #fff',
			'border-left': '0',
			'border-top': '0',
			'position': 'absolute',
			'transform': 'rotate(-6deg)',
			'left': '-24px',
			'bottom': '-20px'
		},
		'.widget-mes-con .widget-mes-name': {
			'font-size': '12px',
			'margin': '0',
			'color': '#878888',
			'margin-bottom': '4px'
		},
		'.widget-mes-con .widget-mes-status': {
			'font-size': '10px',
			'color': '#b0b0b0',
			'margin': '0'
		},
		'.widget-mes-con .widget-mes-text-message': {
			'background': '#fff',
			'color': '#929395',
			'padding': '15px 15px',
			'transition': '.3s',
			'font-size': '12px',
			'border-radius': '0px 0px 5px 5px'
		},
		'.widget-mes-con .widget-mes-text-message.widget-mes-top': {
			'transform': 'translateY(-60px)',
			'border-radius': '5px'
		},
		'.widget-mes-con .widget-mes-text-message.widget-mes-bottom': {
			'transform': 'translateY(0px)'
		},
		'.widget-mes-con .widget-mes-close-user-info': {
			'width': '20px',
			'height': '20px',
			'position': 'absolute',
			'right': '10px',
			'cursor': 'pointer',
			'top': '10px',
			'z-index': '10',
			'transition': '.3s',
			'border-radius': '50%'
		},
		'.widget-mes-con .widget-mes-close-user-info.active': {
			'background': '#0078fb',
			'right': '-10px',
			'top': '-10px'
		},
		'.widget-mes-con .widget-mes-close-user-info.active .widget-mes-close-user-info-line': {
			'background': '#fff',
			'height': '7px'
		},
		'.widget-mes-con .widget-mes-close-user-info.active .widget-mes-close-line-2': {
			'transform': 'rotate(-45deg) translate(-2px,-1px)'
		},
		'.widget-mes-con .widget-mes-close-user-info.active .widget-mes-close-line-1': {
			'transform': 'rotate(45deg) translate(2px,-1px)'
		},
		'.widget-mes-con .widget-mes-close-user-info-line': {
			'background': '#4c504f',
			'transition': '.3s',

		}
	},
	_hovers: {
		'.widget-mes-con .widget-mes-open-message-wrap:hover': {
			'transform': 'scale(1.1)'
		},
		'.widget-mes-con .close-i:hover': {
			'transform': 'scale(1.1)'
		},
		'.widget-mes-con .widget-mes-close-user-info.active:hover': {
			'transform': 'scale(1.1) '
		}
	},
	_animation: {
		'widget-mes-hide-icon': {
			0: {
				'transform': 'scale(1)'
			},
			100: {
				'transform': 'scale(0)'
			}
		},
		'widget-mes-show-icon': {
			0: {
				'transform': 'scale(0)'
			},
			100: {
				'transform': 'scale(1)'
			}
		},
		'widget-mes-show-message': {
			0: {
				'transform': 'scaleX(0) scaleY(0.1)'
			},
			50: {
				'transform': 'scaleX(1) scaleY(0.1)'
			},
			100: {
				'transform': 'scaleX(1) scaleY(1)'
			}
		},
		'widget-mes-hide-message': {
			0: {
				'transform': 'scaleX(1) scaleY(1)'
			},
			50: {
				'transform': 'scaleX(1) scaleY(0.1)'
			},
			100: {
				'transform': 'scaleX(0) scaleY(0)'
			}
		},
		'widget-mes-hide-user-info': {
			0: {
				'transform': ' translateY(0) scaleY(1)'
			},
			100: {
				'transform': ' translateY(-30px) scaleY(0)'
			}
		}
	},

	_createStyleDOM: function () {
		var style = document.createElement('style'),
			styleText = '',
			hoverText = '',
			animationText = '',
			fonts = "@import url('https://fonts.googleapis.com/css?family=Roboto')";
		style.type = 'text/css';

		// style
		for (var key in this._style) {
			styleText += key + '{';
			for (var i in this._style[key]) {
				styleText += i + ':' + this._style[key][i] + ';';
			}
			styleText += '}';
		}

		//hovers
		for (var key in this._hovers) {
			hoverText += key + '{';
			for (var i in this._hovers[key]) {
				hoverText += i + ':' + this._hovers[key][i] + ';';
			}
			hoverText += '}';
		}

		//animation
		for (var key1 in this._animation) {
			animationText += '@keyframes ' + key1 + ' { ';
			for (var key2 in this._animation[key1]) {
				animationText += key2 + '% { ';
				for (var key3 in this._animation[key1][key2]) {
					animationText += key3 + ':' + this._animation[key1][key2][key3] + ';';
				}
				animationText += ' }';
			}
			animationText += ' }';
		}

		style.innerHTML = (fonts + ';' + styleText + hoverText + animationText).replace(/\"|\"/g, '');
		document.getElementsByTagName('head')[0].appendChild(style);
	},

	_createWidgetOpenDOM: function () {
		//wrap
		var widget = document.createElement('div');
		$(widget).addClass('widget-mes-con');
		$('body').prepend(widget);

		this.widget = widget;


		// OPEN MESSAGE WINDOW
		var open = document.createElement('div'),
			openImg = document.createElement('img');

		this.open = open;
		// добавление css классов
		$(open).addClass('widget-mes-open-message-wrap');
		$(openImg).attr('src', 'https://cdn4.iconfinder.com/data/icons/ios7-active-2/512/Envelope.png');

		// добавление в DOM
		$(widget).append(open);
		$(open).append(openImg);


	},

	_createWidgetMessageDOM: function () {

		var widget = this.widget;


		//MESSAGE WRAP
		var message = document.createElement('div'),
			userInfo = document.createElement('div'),
			avatar = document.createElement('div'),
			avatarImg = document.createElement('img'),
			nameStatusWrap = document.createElement('div'),
			name = document.createElement('p'),
			status = document.createElement('p'),
			textMessage = document.createElement('div'),
			closeUserInfo = document.createElement('div'),
			closeUserInfoLine1 = document.createElement('span'),
			closeUserInfoLine2 = document.createElement('span');

		this.message = message;
		this.closeUserInfo = closeUserInfo;
		this.userInfo = userInfo;
		this.textMessage = textMessage;

		// добавление css классов
		$(message).addClass('message-wrap-widget');
		$(userInfo).addClass('widget-mes-user-info');
		$(avatar).addClass('widget-mes-avatar');
		$(nameStatusWrap).addClass('widget-mes-name-status');
		$(name).addClass('widget-mes-name');
		$(status).addClass('widget-mes-status');
		$(textMessage).addClass('widget-mes-text-message');

		$(closeUserInfo).addClass('widget-mes-close-user-info');
		closeUserInfoLine1.classList = 'close-i-span close-i-line-1 widget-mes-close-user-info-line widget-mes-close-line-1';
		closeUserInfoLine2.classList = 'close-i-span close-i-line-2 widget-mes-close-user-info-line widget-mes-close-line-2';


		// добавление в DOM
		$(widget).append(message);
		$(message).append(userInfo);
		$(userInfo).append(avatar);
		$(message).append(closeUserInfo);
		$(closeUserInfo).append(closeUserInfoLine1);
		$(closeUserInfo).append(closeUserInfoLine2);
		$(avatar).append(avatarImg);
		$(userInfo).append(nameStatusWrap);
		$(nameStatusWrap).append(name);
		$(nameStatusWrap).append(status);
		$(message).append(textMessage);

		// CLOSE MESSAGE WINDOW
		var close = document.createElement('div'),
			closeLine1 = document.createElement('span'),
			closeLine2 = document.createElement('span');

		this.close = close;

		// добавление css классов
		$(close).addClass('close-i');
		closeLine1.classList = 'close-i-span close-i-line-1 widget-mes-close-line-1';
		closeLine2.classList = 'close-i-span close-i-line-2 widget-mes-close-line-2';


		// добавление в DOM
		$(widget).append(close);
		$(close).append(closeLine1);
		$(close).append(closeLine2);


		//добавление данных
		$(avatarImg).attr('src', this._avatar);
		$(name).text(this._name);
		$(status).text(this._status);
		$(textMessage).text(this._textMessage);


	},

	_events: function () {
		var _this = this;

		$(document).on('click', '.' + this.open.className, function () {
			$(this).removeClass('widget-mes-show');
			$(this).addClass('widget-mes-hide');

			$(_this.close).css('display', 'block');
			$(_this.close).removeClass('widget-mes-hide');
			$(_this.close).addClass('widget-mes-show');

			$(_this.message).css('display', 'block');
			$(_this.message).removeClass('widget-mes-hide');
			$(_this.message).addClass('widget-mes-show');

			setTimeout(function () {
				$(_this.close).removeClass('widget-mes-show');
			}, 500)
		});

		$(document).on('click', '.' + this.close.className, function () {
			$(_this.textMessage).removeClass('widget-mes-top');
			$(_this.userInfo).removeClass('widget-mes-hide');

			$(_this.message).removeClass('widget-mes-show');
			$(_this.message).addClass('widget-mes-hide');

			$(_this.close).removeClass('widget-mes-show');
			$(_this.close).addClass('widget-mes-hide');

			$(_this.open).removeClass('widget-mes-hide');
			$(_this.open).addClass('widget-mes-show');

			$(_this.userInfo).removeClass('widget-mes-hide');

			$(_this.closeUserInfo).removeClass('active');

			setTimeout(function () {
				$(_this.message).css('display', 'none');

			}, 500)
		});

		$(document).on('click', '.' + this.closeUserInfo.className, function () {

			if(!$(_this.closeUserInfo).hasClass('active')){
				$(_this.userInfo).addClass('widget-mes-hide');

				setTimeout(function () {
					$(_this.textMessage).addClass('widget-mes-top');
					$(_this.closeUserInfo).addClass('active');
				}, 200);
			}else{
				$(_this.closeUserInfo).removeClass('active');
				$(_this.textMessage).removeClass('widget-mes-top');
				$(_this.userInfo).removeClass('widget-mes-hide');
			}
		});
	},

	start: function () {
		this._createStyleDOM();
		var _this = this;
		$.getJSON(this._url, function (data) {
			data = data.messages[0];
			_this._avatar = data.image;
			_this._textMessage = data.message;
			_this._name = data.name;
			_this._status = data.title;

			_this._createWidgetOpenDOM();
			_this._createWidgetMessageDOM();
			_this._events();
		});
	}
};

if (typeof($) !== 'undefined') {
	$(document).ready(function () {
		Widget.start();
	});
} else {
	alert('Подключите JQuery');
}