$( window ).scroll(function() {
	var top = $('.header').offset().top <= 120;
  if(top){
  	$('.header-image').removeClass('header-image-mini'); 	
  }else {
  	$('.header-image').addClass('header-image-mini'); 	
  }
});