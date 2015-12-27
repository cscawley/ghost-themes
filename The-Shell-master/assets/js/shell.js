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
