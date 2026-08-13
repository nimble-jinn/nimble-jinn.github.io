(function ($) {
	"use strict";
	
	 // Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "991"
        });
		
        // Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.navbar-area').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
            }
        });
	
	
	// START PRELOADED
    $(window).on('load', function() {
        $('.preloader').fadeOut();
        $('.preloader').delay(350).fadeOut('slow');
    });

	// Back to top button 
        $(function(){
            // Scroll Event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 300) $('.back-to-top').addClass('active');
                if (scrolled < 300) $('.back-to-top').removeClass('active');
            });  
            // Click Event
            $('.back-to-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
        });
        
        
    
	// Testimonials owl
	$('#testimonial-slide').owlCarousel({
		margin: 0,
		autoplay: true,
		autoplayTimeout: 4000,
		nav: false,
		smartSpeed: 1000,
		dots: true,
		autoplayHoverPause: true,
		loop: true,
        responsiveClass:true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
	
    // Screenshort-slide owlCarousel
    $('.screenshort-slide.owl-carousel').owlCarousel({
        loop:true,
        margin: 15,
        mouseDrag:true,
        autoplay:true,
        dots: false,
		smartSpeed:800,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
	
	
    $('.features-slider.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 1500,
        autoplay: true,
        autoplayTimeout: 6000,
        dotsContainer: '.features-content'
    });
	
    //  POPUP VIDEO
    $('.popup-video').magnificPopup({
		type: 'iframe',
	});
	
	//  Accordion faq
	$(".accordion").on("click",".title", function () {

        $(this).next().slideDown();

        $(".accordion-info").not($(this).next()).slideUp();

    });

    $(".accordion").on("click",".accordion-item", function () {

        $(this).addClass("active").siblings().removeClass("active");

    });
	
})(jQuery);
