		$(document).ready(function(){
	
	// Находим блок карусели
	var carousel = $("#carousel");

	// Запускаем плагин карусели
	carousel.owlCarousel({
	pagination: true,
	singleItem: true
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
	
		