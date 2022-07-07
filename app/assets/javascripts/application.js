// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require turbolinks
//= require jquery-3.4.1.min.js
//= require popper.js
//= require bootstrap.js
//= require wow.min.js
//= require scripts.js
//= require ziehharmonika.js
//= require jquery.serialscrolling.js
//= require jquery-ui.js
//= require owl.carousel.min.js
	
		jQuery(window).scroll(function(){
			var upto2 = jQuery(window).scrollTop();
			if(upto2 > 80) {
				jQuery('.header-area-inner3').addClass("for-header-menu");
			} else {
				jQuery('.header-area-inner3').removeClass("for-header-menu");
			}
		});

		jQuery(".header-item-inner i").click(function() {
			jQuery(".side-menu").addClass("for-menu");
		});

		jQuery(".side-menu-item i").click(function() {
			jQuery(".side-menu").removeClass("for-menu");
		});

		$(".banner-item-inner div > i").click(function() {
		    $("html, body").animate({ scrollTop: $(".build-area").offset().top }, 600);
		});

		$('.ziehharmonika').ziehharmonika({
			collapsible: true,
		});

	    jQuery( "#tabs" ).tabs();

		jQuery('[data-serialscrolling]').serialscrolling();

		new WOW().init();