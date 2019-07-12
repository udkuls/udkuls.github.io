	$(document).ready(function (){
			$('.overlay').click(function (){
				$('.popup1,.popup2,.popup3,.popup4,.popup5,.popup6, .overlay').css({'opacity':'0', 'visibility':'hidden'});
				$('html').css({'overflow':  'visible'});
			});
			$('.open_window1').click(function (e){
				$('.popup1, .overlay').css({'opacity':'1', 'visibility':'visible'});
				$('html').css({'overflow':  'hidden'});
				e.preventDefault();
			});
			$('.open_window2').click(function (e){
				$('.popup2, .overlay').css({'opacity':'1', 'visibility':'visible'});
				$('html').css({'overflow':  'hidden'});
				e.preventDefault();
			});
			$('.open_window3').click(function (e){
				$('.popup3, .overlay').css({'opacity':'1', 'visibility':'visible'});
				$('html').css({'overflow':  'hidden'});
				e.preventDefault();
			});
			$('.open_window4').click(function (e){
				$('.popup4, .overlay').css({'opacity':'1', 'visibility':'visible'});
				$('html').css({'overflow':  'hidden'});
				e.preventDefault();
			});
			$('.open_window5').click(function (e){
				$('.popup5, .overlay').css({'opacity':'1', 'visibility':'visible'});
				$('html').css({'overflow':  'hidden'});
				e.preventDefault();
			});
			$('.open_window6').click(function (e){
				$('.popup6, .overlay').css({'opacity':'1', 'visibility':'visible'});
				$('html').css({'overflow':  'hidden'});
				e.preventDefault();
			});
		});