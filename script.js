(function() {
	'use strict';

	$(function() {
		if ($('.login-panel').length) {
			backgroundChanger();
		}
	});

	function backgroundChanger() {
		var activeClass, bg;
		backgroundChangerInit();
		setInterval(changeBackgroundClass, 3000);

		function backgroundChangerInit() {
			activeClass = 'active';
			var elm = $('.login-panel');
			var bg1 = $('<div>').addClass('bg bg-1 active');
			var bg2 = $('<div>').addClass('bg bg-2');
			elm.append(bg1).append(bg2);
			bg = $('.bg');
		}

		function changeBackgroundClass() {
			bg.each(function() {
				var thisElm = $(this);
				if (thisElm.hasClass(activeClass)) {
					thisElm.removeClass(activeClass);
				} else {
					thisElm.addClass(activeClass);
				}
			});
		}
	}
})();
