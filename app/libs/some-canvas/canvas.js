
window.someCanvas  = function(wrap,canvasElem,) {
		var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;
		initHeader();
		initAnimation();
		addListeners();
		function initHeader() {
			width =  document.getElementById(wrap).clientWidth;
			height =  document.getElementById(wrap).clientHeight;
			target = {
				x: width / 2,
				y: height / 2
			};
			largeHeader = document.getElementById(wrap);
			largeHeader.style.height = height + 'px';
			canvas = document.getElementById(canvasElem);
			canvas.width = width;
			canvas.height = height;
			ctx = canvas.getContext('2d');
			points = [];
			for (var x = 0; x < width; x = x + width / 7) {
				for (var y = 0; y < height; y = y + height / 7) {
					var px = x + Math.random() * width / 20;
					var py = y + Math.random() * height / 20;
					var p = {
						x: px,
						originX: px,
						y: py,
						originY: py
					};
					points.push(p);
				}
			}
			for (var i = 0; i < points.length; i++) {
				var closest = [];
				var p1 = points[i];
				for (var j = 0; j < points.length; j++) {
					var p2 = points[j];
					if (!(p1 == p2)) {
						var placed = false;
						for (var k = 0; k < 5; k++) {
							if (!placed) {
								if (closest[k] == undefined) {
									closest[k] = p2;
									placed = true;
								}
							}
						}
						for (var k = 0; k < 5; k++) {
							if (!placed) {
								if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
									closest[k] = p2 ;
									placed = true;
								}
							}
						}
					}
				}
				p1.closest = closest;
			}
			for (var i in points) {
				var c = new Circle(points[i], 7,'rgba(0,0,0,0.3)');
				points[i].circle = c;
			}
		}
		function addListeners() {
			// if (!('ontouchstart'in window)) {
			// 	window.addEventListener('mousemove', mouseMove);
			// }
			// window.addEventListener('scroll', scrollCheck);
			window.addEventListener('resize', resize);
		}
		// function mouseMove(e) {
		// 	var posx  =  0,
		// 		posy = posx;
		// 	if (e.pageX || e.pageY) {
		// 		posx = e.pageX;
		// 		posy = e.pageY;
		// 	} else if (e.clientX || e.clientY) {
		// 		posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		// 		posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		// 	}
		// 	target.x = posx ;
		// 	target.y = posy ;
		// }
		function scrollCheck() {
			if (document.body.scrollTop > height)
				animateHeader = false;
			else
				animateHeader = true;
		}
		function resize() {
			width =  document.getElementById(wrap).clientWidth;
			height =  document.getElementById(wrap).clientHeight;
			largeHeader.style.height = height + 'px';
			canvas.width = width;
			canvas.height = height;

		}
		function initAnimation() {
			animate();
			for (var i in points) {
				shiftPoint(points[i]);
			}
		}
		function animate() {
			if (animateHeader) {

				ctx.clearRect(0, 0, width, height);
				for (var i in points) {
					if (Math.abs(getDistance(target, points[i])) < 2000) {
						points[i].active = 0.3;
						points[i].circle.active =  0.3;
					} else if (Math.abs(getDistance(target, points[i])) < 20000) {
						points[i].active = 0.1;
						points[i].circle.active =0.1;
					} else if (Math.abs(getDistance(target, points[i])) < 60000) {
						points[i].active = 0.02;
						points[i].circle.active = 0.02;
					} else {
						points[i].active = 0.1;
						points[i].circle.active = 0.1;
					}
					drawLines(points[i]);
					points[i].circle.draw();
				}
			}
			requestAnimationFrame(animate);
		}
		function shiftPoint(p) {
			TweenLite.to(p, 1 + 1 * Math.random(), {
				x: p.originX - 50 + Math.random() * 100,
				y: p.originY - 50 + Math.random() * 100,
				ease: Power4.easeOut,
				onComplete: function() {
					shiftPoint(p);
				}
			});
		}
		function drawLines(p) {
			// if (!p.active)
			// 	return;
			// for (var i in p.closest) {
			// 	ctx.beginPath();
			// 	ctx.moveTo(p.x, p.y);
			// 	ctx.lineTo(p.closest[i].x, p.closest[i].y);
			// 	ctx.strokeStyle = 'rgba(0,0,0,' + p.active + ')';
			// 	ctx.stroke();
			// }
		}
		function Circle(pos, rad, color) {
			var _this = this;
			(function() {
				_this.pos = pos || null;
				_this.radius = rad || null;
				_this.color = color || null;
			})();
			this.draw = function() {
				if (!_this.active)
					return;
				ctx.beginPath();
				ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);

				ctx.fillStyle = 'rgba(0,0,0,' + _this.active + ')';
				ctx.fill();
			}
			;
		}
		function getDistance(p1, p2) {

			return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
		}
	};