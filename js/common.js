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
		$('.js-filter-item').hide();

		btn.on('click', function(){
			$(this).toggleClass('is-open').parent().find('.js-filter-item').slideToggle();
		});

	}
	if ($('.m-filters').length) {
		filters();
	};

// tags add
	
	if ($('.js-textarea').length) {
		$('.js-textarea').each(function(){
			$(this).textext({plugins: 'tags'});
		});
	};

// iu slider

	$( "#slider-range-min" ).slider({
      range: "min",
      min: 1,
      max: 200,

      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-range-min" ).slider( "value" ) );

    $( "#slider-salary" ).slider({
      range: true,
      min: 0,
      max: 200,
      values: [ 0, 100 ],
      slide: function( event, ui ) {
        $( "#salary" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#salary" ).val( "$" + $( "#slider-salary" ).slider( "values", 0 ) +
      " - $" + $( "#slider-salary" ).slider( "values", 1 ) );

    $( "#slider-weekend" ).slider({
      range: "min",		
      min: 0,
      max: 2,
      slide: function( event, ui ) {
        $( "#weekend" ).val( ui.value );
      }
    });
    $( "#weekend" ).val( $( "#slider-weekend" ).slider( "value" ) );

    $( "#slider-hours" ).slider({
      range: "min",		
      min: 0,
      max: 60,
      value: 40,
      slide: function( event, ui ) {
        $( "#hours" ).val( ui.value );
      }
    });
    $( "#hours" ).val( $( "#slider-hours" ).slider( "value" ) );


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

