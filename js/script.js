/* -----------------------------------------------------------------------------


File:           JS Core
Version:        1.0
Last change:    00/00/00 
Author:         Suelo

-------------------------------------------------------------------------------- */
(function() {
	
	"use strict";

	var landy = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.menuBar();
				// this.onePageNavigation();
				this.videoPopup();
				this.showcaseSlide();

			},
/* Start Of Preloader
================================================*/
preloader: function (){

	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});
},
/* Start Of Preloader
================================================*/



/* - Start of menu bar
================================================*/
menuBar: function (){
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 100) {
			jQuery('.main-menu-container').addClass('menu-bg-overlay')
		} else {
			jQuery('.main-menu-container').removeClass('menu-bg-overlay')
		}
	})

	$(function() {
		$('.navbar-nav a').on("click", function(){
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top -65
					}, 1000);
					return false;
				}
			}
		});

		$(".navbar-nav a").on("click", function() {
			$(".navbar-nav a").removeClass("active");
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).addClass("active");   
});
	});
},


/* - End of menu bar
================================================*/



/* Start of Video popup
================================================*/
videoPopup: function (){
	$('.popup-with-zoom-anim').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});


	
	$('.banner-slide-area').owlCarousel({
		loop:true,
		margin:0,
		items: 1,
		nav:false,
		autoplay: true,
		smartSpeed: 1500,
	})
	
	
},

/* - End Of Video popup
================================================*/




/* - Start of showcase slide
================================================*/
showcaseSlide: function (){
	$('.showcase-slider').owlCarousel({
		margin:15,
		responsiveClass:true,
		pagination: true,
		nav: true,
		navText: [ '<span class="ti-angle-left"></span>' ,
		'<span class="ti-angle-right"></span>'],
		autoplay: false,
		smartSpeed: 1000,
		responsive:{
			0:{
				items:1,
				pagination: true,
			},
			400:{
				items:2,
				pagination: true,
			},
			500:{
				items:2,
				pagination: true,
			},
			600:{
				items:2,
				pagination: true,
			},
			700:{
				items:3,
				pagination: true,
			},
			1000:{
				items:4,
				pagination: true,

			}
		},
	})
},
/* - End of showcase slide
================================================*/



}
}
$(document).ready(function (){
	landy.init();
});

})();