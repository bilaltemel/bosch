(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991"
});

//mobile side menu
$('.side-toggle').on('click', function () {
	$('.side-info').addClass('info-open');
	$('.offcanvas-overlay').addClass('overlay-open');
})

$('.side-info-close,.offcanvas-overlay').on('click', function () {
	$('.side-info').removeClass('info-open');
	$('.offcanvas-overlay').removeClass('overlay-open');
})

    
// data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

//for menu active class
$('.aportfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

    
    
    // team 3 activation
	if (jQuery(".testimonial-active-3").length > 0) {
		let swipertest = new Swiper('.testimonial-active-3', {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: false,
			infinite: false,
		
			// If we need pagination
			pagination: {
			el: '.swiper-pagination2',
			clickable: true,
			},
		
			// Navigation arrows
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},
		
			// And if we need scrollbar
			scrollbar: {
			el: '.swiper-scrollbar',
			dynamicBullets: true,
			},
			breakpoints: {
				480: {
				slidesPerView: 1,
				},
				768: {
				slidesPerView: 2,
				},
				1200: {
				slidesPerView: 3,
				},
				1400: {
				slidesPerView: 3,
				},
			}

		});
	}
    
    
    // gallery activation
	if (jQuery(".gallery-active").length > 0) {
	let gallery = new Swiper('.gallery-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		// direction: 'vertical',
		loop: false,
	  
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		  dynamicBullets: true,
		},
		breakpoints: {
			480: {
			  slidesPerView: 2,
			},
			768: {
			  slidesPerView: 3,
			},
			1200: {
			  slidesPerView: 4,
			},
		  }

	  });
	}

    // testimonial 2 activation
	if (jQuery(".testimonial-active-2").length > 0) {
	let testimonial2 = new Swiper('.testimonial-active-2', {
		slidesPerView: 1,
		spaceBetween: 30,
		// direction: 'vertical',
		loop: true,
	  
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		  dynamicBullets: true,
		},
		breakpoints: {
			640: {
			  slidesPerView: 1,
			},
			768: {
			  slidesPerView: 1,
			},
			1024: {
			  slidesPerView: 1,
			},
		  }

	  });
	}

    // blog gallery activation
	if (jQuery(".ablog__img--active").length > 0) {
	let ablogimgactive = new Swiper('.ablog__img--active', {
		slidesPerView: 1,
		spaceBetween: 30,
		// direction: 'vertical',
		loop: true,
	  
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		  dynamicBullets: true,
		},
		breakpoints: {
			640: {
			  slidesPerView: 1,
			},
			768: {
			  slidesPerView: 1,
			},
			1024: {
			  slidesPerView: 1,
			},
		  }

	  });
	}
    
    // testimonial 1 activation
	if (jQuery(".atestimonial-active").length > 0) {
	let atestimonial1 = new Swiper('.atestimonial-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		// direction: 'vertical',
		loop: true,
	  
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		},

	  });
	}
    
	// brand activation
	if (jQuery(".brand-active").length > 0) {
	let brand = new Swiper('.brand-active', {
		slidesPerView: 2,
		spaceBetween: 30,
		// direction: 'vertical',
		loop: true,
        autoplay: {
				delay: 5000,
			},
	  
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		},
		breakpoints: {
			550: {
			  slidesPerView: 3,
			},
			768: {
			  slidesPerView: 4,
			},
			1200: {
			  slidesPerView: 5,
			},
		  }

	  });
	}

})(jQuery);