$(document).ready(function (){
			$('.overlay').click(function (){
				$('.test_frame, .overlay').css({'opacity':'0', 'visibility':'hidden'});
				$('.start, .j1, .j2_yes, .j2_no, .m1, .m2_yes, .m2_no, .s1, .s2_yes, .s2_no').css({'opacity':'0', 'visibility':'hidden'});
				$('html').css({'overflow':  'visible'});
			});
			$('.test').click(function (e){
				$('.test_frame, .overlay').css({'opacity':'1', 'visibility':'visible'});
				$('.start').css({'opacity':'1', 'visibility':'visible'});
				$('html').css({'overflow':  'hidden'});
				e.preventDefault();
			});
		});
$(document).ready(function (){
			$('.j').click(function (){
				$('.start').css({'opacity':'0', 'visibility':'hidden'});
			$('.j1').css({'opacity':'1', 'visibility':'visible'});
				});
			});

		$(document).ready(function (){
			$('.j_yes').click(function (){
				$('.j1').css({'opacity':'0', 'visibility':'hidden'});
			$('.j2_yes').css({'opacity':'1', 'visibility':'visible'});
				});
			});

		$(document).ready(function (){
			$('.j_no').click(function (){
				$('.j1').css({'opacity':'0', 'visibility':'hidden'});
			$('.j2_no').css({'opacity':'1', 'visibility':'visible'});
				});
			});

/*------------------------------------------------------------*/

		$(document).ready(function (){
			$('.m').click(function (){
				$('.start').css({'opacity':'0', 'visibility':'hidden'});
			$('.m1').css({'opacity':'1', 'visibility':'visible'});
				});
			});

		$(document).ready(function (){
			$('.m_yes').click(function (){
				$('.m1').css({'opacity':'0', 'visibility':'hidden'});
			$('.m2_yes').css({'opacity':'1', 'visibility':'visible'});
				});
			});

		$(document).ready(function (){
			$('.m_no').click(function (){
				$('.m1').css({'opacity':'0', 'visibility':'hidden'});
			$('.m2_no').css({'opacity':'1', 'visibility':'visible'});
				});
			});

/*------------------------------------------------------------*/
	
		$(document).ready(function (){
			$('.s').click(function (){
				$('.start').css({'opacity':'0', 'visibility':'hidden'});
			$('.s1').css({'opacity':'1', 'visibility':'visible'});
				});
			});

		$(document).ready(function (){
			$('.s_yes').click(function (){
				$('.s1').css({'opacity':'0', 'visibility':'hidden'});
			$('.s2_yes').css({'opacity':'1', 'visibility':'visible'});
				});
			});

		$(document).ready(function (){
			$('.s_no').click(function (){
				$('.s1').css({'opacity':'0', 'visibility':'hidden'});
			$('.s2_no').css({'opacity':'1', 'visibility':'visible'});
				});
			});