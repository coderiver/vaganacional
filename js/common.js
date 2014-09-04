head.ready(function() {

// slick

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
	$('.js-slick2').slick({
		  slidesToShow: 4,
		  responsive: [
		    {
		      breakpoint: 880,
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

// tabs

    $('#demoTab').easyResponsiveTabs();

// filters

	function filters(){
		var btn = $('.js-filter-btn');
		//$('.js-filter-item').hide();

		btn.on('click', function(){
			$(this).parent().find('.js-filter-item').slideToggle();
		});

	}
	if ($('.m-filters').length) {
		filters();
	};

// select
    function select() {
        $(".js-select").each(function(){
            var select_list = $(this).find(".js-select-list");
            var text = select_list.find("li").first().text();
            select_list.hide();
            $(this).click(function(event){
                if ($(this).hasClass("is-active")) {
                    $(this).removeClass("is-active");
                    select_list.slideUp("fast");
                }
                else {
                    $(".js-select").removeClass("is-active");
                    $(".js-select-list").hide();
                    select_list.slideDown("fast");
                    $(this).addClass("is-active");
                }
                event.stopPropagation();
            });
            select_list.find("li").click(function(event) {
                var id = $(this).attr("data-id");
                var text = $(this).text();
                $(this).parent().parent().find(".js-select-text").text(text);
                $(this).parent().parent().find(".js-select-input").val(id);
                $(this).parent().hide();
                $(this).parents(".js-select").removeClass("is-active");
                event.stopPropagation();
                return false;
            });
        });

    }
    select();
    $('.js-select').click(function(event){
        event.stopPropagation();
    });    

// personal

	if ($('.js-personal').length) {
		$('.js-personal-block').hide();
		$('.js-personal-btn').on('click', function(){
			$(this).toggleClass('is-open');
			$(this).next('.js-personal-block').toggle('fast');
		});
	};    

});

