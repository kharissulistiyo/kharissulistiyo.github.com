jQuery(window).ready(function($) {

	/**
	 * Set hieght of element as per window height
   * size (resized or not)
	 * ======================================= */

    var wi = $(window).height();

    // Call in css height attribute
    $('#teaser').css({
      height: wi
    });

	  $(window).resize(function() {

	  	var wi = $(window).height();
      // Call in css height attribute
      $('#teaser').css({
        height: wi
      });

	  });


});
