$(function () {
	var start_size = 30;
	var end_size = 1000;
	var tl = new TimelineMax({ paused: true });
	tl
		.to(
			$(".corner"),
			0.5,
			{ width: end_size, height: end_size, display: "none" },
			"corner"
		)
		.to($(".bg_wrapper"), 0.5, { width: end_size, height: end_size }, "corner");

	$(".wrapper").mouseenter(function () {
		tl.play();
	});

	$(".wrapper").mouseleave(function () {
		tl.reverse();
	});
})(jQuery);
