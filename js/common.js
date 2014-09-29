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


    

// filter
function filter () {
  var filter = $('.js-filter'),
      filter_tabs = filter.find('.filter__tabs'),
      fitler_item = filter.find('.filter__item'),
      filter_nav = filter_tabs.find('a');

  filter_nav.on('click', function () {
    if (!$(this).parent().hasClass('is-active')) {
      filter_nav.parent().removeClass('is-active');
      $(this).parent().addClass('is-active');
      if ($(this).parent().hasClass('is-more')) {
        filter_tabs.addClass('is-active');
        var index = $(this).parent().index();
        fitler_item.slideUp();
        fitler_item.eq(index).slideDown();
      }
      else {
        fitler_item.slideUp();
        filter_tabs.removeClass('is-active');
      }
    };
  });

  // location
  var location = $('.js-location');
  location.keypress(function (e) {
    var key = e.which;
    if(key == 13) {
      var text = $(this).val()
      $(this).parent().before('<a href="#">'+text+'</a>');
      location.val('');
    }
  }); 

  // distance
  var distance = $('.js-distance'),
      distance_slider = distance.find('.filter__distance-slider'),
      distance_val = distance.find('.filter__distance-value span');
  distance_slider.slider({
    range: 'min',
    value: 25,
    min: 0,
    max: 150,
    slide: function( event, ui ) {
      distance_val.html(ui.value);
    }
  });

  // salary
  var salary = $('.filter__salary'),
      salary_slider = salary.find('.filter__salary-slider');
  salary_slider.slider({
    range: true,
    min: 0,
    max: 100000,
    values: [10000, 40000],
    create: function( event, ui ) {
      salary_slider.find('.ui-widget-header').append('<div class="ui-widget-tip"></div>');
    },
    slide: function( event, ui ) {
      salary_slider.find('.ui-widget-tip').html('R$ '+ui.values[0]+' to R$ '+ui.values[1]);
    }
  }); 
  var salary_slider_first = salary_slider.slider('values', 0),
      salary_slider_last = salary_slider.slider('values', 1);
  salary_slider.find('.ui-widget-tip').html('R$ '+salary_slider_first+' to R$ '+salary_slider_last);

}
filter();

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

