(function ($) {
	"use strict";
	//sidebar menu open in mobile
	$('.nav_toggle').on('click', function () {
		$(".navigation_menu").toggleClass("menu_open");
		//$(this).toggleClass("close");
	});
	$('.nav_close_btn').on('click', function () {
		$(".navigation_menu").removeClass("menu_open");
	});
	$(".navigation_menu ul li ul.sub_menu").parents("li").addClass("dropdown_toggle");
	$(".dropdown_toggle").append("<span class='caret_down'></span>");
	$(".navigation_menu ul li").children(".caret_down").on("click", function () {
		$(this).toggleClass("caret_up");
		$(this).prev("ul").slideToggle();
	});
	//counter js
	$('.counter_number').countTo();
	//Accordion js
	$(".accordion_heading").on("click", function () {
		$(this).toggleClass("active");
		$(this).next(".accordion_content").slideToggle(250);
		$(".accordion_heading").not(this).next(".accordion_content").slideUp(250);
		$(".accordion_heading").not(this).removeClass("active");
	});
	//tabs
	$('.tabs li').click(function () {
		var tab_data = $(this).attr('data-tab');
		$('.tabs li').removeClass('active');
		$(this).addClass('active');
		$(".tab_container").removeClass('active');
		$('#' + tab_data).addClass("active");
	});
	//show more text
	if ($('.show_more_text').length > 0) {
		$('.show_more_text').myOwnLineShowMoreLess({
			showLessText: 'Read Less',
			showMoreText: 'Read More',
		});
	}
	//show more text
	if ($('.show_more_testi_text').length > 0) {
		$('.show_more_testi_text').myOwnLineShowMoreLess({
			showLessText: 'Read Less',
			showMoreText: 'Read More',
		});
	}
	 // service slider
      $('.banner_slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: false,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause:true,
        slideSpeed: 2000,
        smartSpeed: 2000,
        dots: true,
      })

      //faq js
         $(".faq_accordion_panel").eq(0).children(".faq_accordion_content").slideDown();
         $(".faq_accordion_heading").on("click", function() {
           $(this).toggleClass("active");
           $(this).next(".faq_accordion_content").slideToggle(250);
           $(".faq_accordion_heading").not(this).next(".faq_accordion_content").slideUp(250);
           $(".faq_accordion_heading").not(this).removeClass("active");
         });
         //wow animation js
		new WOW().init();
})(jQuery);


