$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		loop:true,
		items: 1,
		margin:130,
		stagePadding: 130,
		responsiveClass:true,
		navContainer: '#customNav',
		responsive: {
	    // > 0
	    0 : {
        dots: false,
        margin:30,
        stagePadding: 30,
        nav: true,
				navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	    },
	    // > 768
	    768 : {
	    	margin:130,
	    	stagePadding: 130,
        dots: true,
        nav: false
	    }
	}
	});
});