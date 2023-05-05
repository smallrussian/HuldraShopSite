jQuery(document).ready(function($) {


	var mastheadheight = $('.hus-header').outerHeight();
	//console.log(mastheadheight);
	$(".div-hero").css("margin-top" , mastheadheight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.hus-header').addClass('hus-fixed-header');
	    }
	    else {
	        $('.hus-header').removeClass('hus-fixed-header');
	    }
	}).scroll();


});

