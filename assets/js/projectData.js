$(document).ready(function(){
	$('header').fadeIn('200');
	$('.project').removeClass('hide');
	$('.projects').addClass('open');

	$('a').click(function(e){
		e.preventDefault();
		var eLink = $(this).attr('href');
		var eLinkBlank = $(this).attr('target');
		$('.projects').removeClass('open');
		$('header').fadeOut('200');

		setTimeout(function(){
			if(eLinkBlank == '_blank'){
				window.open(eLink);
			} else {
				window.location = eLink;
			}
		},400);
	});

});