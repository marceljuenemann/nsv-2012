
$(document).ready(function(){
	$(window).scroll(function() {
		var y = $(window).scrollTop();
		if (y > 75) {
			$("nav").addClass("scrolling");
		} else {
			$("nav").removeClass("scrolling");
		}
	});
});

