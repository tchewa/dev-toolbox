(function( $ ){

	var winWidth = null,
		messWidth = null,
		slide = 0,
		slideCount = $('.card').length - 1, 
		length = $('.dot').length - 1;
	
	$(window).on('load resize', function(e) {

		winWidth = $( window ).width();
		messWidth = $( '.article-box' ).width();

		var canvasCount = $( '.canvas' ).length,
		cardCount = $( '.card' ).length;

		$( '.canvas' ).css( 'width', 'calc(100%/' + canvasCount + ' )' );
		$( '.canvas-container' ).css( 'width', winWidth * canvasCount );
		$( '.card-container' ).css( 'width', messWidth * cardCount );

		if (e.type === 'resize') {
			$('body').find( '.canvas-container' ).css( 'left', '0');
			$('body').find( '.card-container' ).css( 'left', '0');
			$('.pagination-backward-container').addClass('disabled');
			slide = 0;
			$('.pagination-forward-container').removeClass('disabled');
		}
	});

	if (slide === 0) {
		$('.pagination-backward-container').addClass('disabled');
	}

	$('.carousel-arrow').on('click', function() {
		
		if ($(this).hasClass('pagination-forward-container')) {
			slide++;
		} 

		if ($(this).hasClass('pagination-backward-container')) {
			slide--;
		}

		$('body').find( '.canvas-container' ).animate({ 'left': - slide * winWidth }, 500);
		$('body').find( '.card-container' ).animate({ 'left': - slide * messWidth }, 500);

		
		if (slide > 0) {
			$('.pagination-backward-container').removeClass('disabled');
		}

		if (slide === 0) {
			$('.pagination-backward-container').addClass('disabled');
		}

		if (slide == slideCount) {
			$('.pagination-forward-container').addClass('disabled');
		} else {
			$('.pagination-forward-container').removeClass('disabled');
		}
	});

})(jQuery);
