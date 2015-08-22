(function() {
	'use strict';

	$(function() {
		backgroundChanger();
	});

	function backgroundChanger() {
		var elm = $('.login-panel');
		var bg1 = $('<div>').addClass('bg bg-1 active');
		var bg2 = $('<div>').addClass('bg bg-2');
		elm.append(bg1).append(bg2);
		var bg = $('.bg');
		setInterval(function() {
			bg.each(function() {
				if ($(this).hasClass('active')) {
					$(this).removeClass('active');
					return;
				}
				if (!$(this).hasClass('active')) {
					$(this).addClass('active');
					return;
				}
			});
		}, 3000);
	}
})();
