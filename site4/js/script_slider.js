		$(document).ready(function(){
	
	// ������� ���� ��������
	var carousel = $("#carousel");

	// ��������� ������ ��������
	carousel.owlCarousel({
	pagination: true,
		video: true,
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
			

	// ��������� ��������� �����
	carousel.trigger('owl.prev');
    
	return false;
});

// ������
// ��� ����� �� "������"
$('#js-next').click(function () {

	// ��������� ��������� ������
	carousel.trigger('owl.next');

	return false;
});
	
	
});

	
		