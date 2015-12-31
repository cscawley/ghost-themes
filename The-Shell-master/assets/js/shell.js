$(function(){
	$('pre').addClass('prettyprint');
	prettyPrint();
});
$(function(){
	var $head = $( '#navi-header' );
	$( '.js-waypoint' ).each( function(i) {
		var $el = $( this ),
			animClassDown = $el.data( 'animateDown' ),
			animClassUp = $el.data( 'animateUp' );

		$el.waypoint( function( direction ) {
			if( direction === 'down' && animClassDown ) {
				$head.attr('class', 'navi-header ' + animClassDown);
			}
			else if( direction === 'up' && animClassUp ){
				$head.attr('class', 'navi-header ' + animClassUp);
			}
		}, { offset: '50%' } );
	} );
});
$(document).on('click', 'a[href^="#"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $(id).offset().top;
    $('body, html').animate({
			scrollTop: pos
		});
});
