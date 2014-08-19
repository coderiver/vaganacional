head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	$('.js-slick').slick({
		  centerMode: true,
		  centerPadding: '20px',
		  slidesToShow: 5,
		  responsive: [
		    {
		      breakpoint: 880,
		      settings: {
		        slidesToShow: 4
		      }
		    },
		    {
		      breakpoint: 790,
		      settings: {
		        slidesToShow: 3
		      }
		    }
		  ]
		});
	$('.js-menu').click(function(event) {
		$('body').addClass('is-sidebar');
		return false;
	});
	$('.sidenav__overlay').click(function(event) {
		$('body').removeClass('is-sidebar');
		return false;
	});
});

