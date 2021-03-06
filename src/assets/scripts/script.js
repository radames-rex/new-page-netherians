// Open menu mobile
$( '.header-bars' ).click(function(){
  if($( '.header-nav ul' ).hasClass('closed')) {
    $( '.header-nav ul' ).removeClass('closed');
  } else {
    $( '.header-nav ul' ).addClass('closed');
  }
});

// Reduz Header após scroll
$( window ).scroll(function() {
	var top = $('.header').offset().top <= 1;
  if(top){
  	$('.header-image').removeClass('header-image-mini'); 	
  }else {
  	$('.header-image').addClass('header-image-mini'); 	
  }
});

// Smooth Scroll com a navegação dos links
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });