		$(document).ready(function(){
	
	// Находим блок карусели
	var carousel = $("#carousel");

	// Запускаем плагин карусели
	carousel.owlCarousel({
	pagination: true,
	singleItem: true,
	loop: true,
      slideSpeed : 1200,
	  navSpeed: 1200,
	  dotsSpeed: 1500,
	  dragEndSpeed: 300,
      singleItem : true,
      animateOut:  'fadeOutLeft' ,
      animateIn:  'fadeOutRight' ,
      items: 1 ,
      margin: 30 ,
      stagePadding: 30 ,
      smartSpeed: 1000 
	  
	});
		$('#js-prev').click(function () {
			

	// Запускаем перемотку влево
	carousel.trigger('owl.prev');
    
	return false;
});

// Вперед
// При клике на "Вперед"
$('#js-next').click(function () {

	// Запускаем перемотку вправо
	carousel.trigger('owl.next');

	return false;
});
	
	
});

	
		