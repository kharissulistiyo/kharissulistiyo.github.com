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


  /**
   * Animation
   * ======================================= */

   // Functions

        // Returns true if the specified element has been scrolled into the viewport.
        function isElementInViewport(elem) {
            var $elem = $(elem);

            // Get the scroll position of the page.
            var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
            var viewportTop = $(scrollElem).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            // Get the position of the element on the page.
            var elemTop = Math.round( $elem.offset().top );
            var elemBottom = elemTop + $elem.height();

            return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
        }

        // Check if it's time to start the animation.
        function checkAnimation(target) {
            var $elem = $(target);
            var $className = 'move';



            /**
             * Starting animation again when element is in viewport
             */

            if (isElementInViewport($elem)) {
                // Start the animation
                $elem.addClass($className);
            }

            if (!isElementInViewport($elem)) {
                // Start the animation
                $elem.removeClass($className);
            }



        }



        // Capture scroll events
        $(window).scroll(function(){

            var $target = $('#main');
            var $button = $('#buttons-demo');
            var $button_iconic = $('#iconic-buttons-demo');
            var $boxes = $('#boxes-demo');
            var $icons = $('#icons-demo');
            var $highlights = $('#highlight-demo');
            var $dividers = $('#dividers-demo');
            var $accordions = $('#accordions-demo');
            var $toggle = $('#toggle-demo');
            var $tabs = $('#tabs-demo');
            var $pricingtables = $('#pricing-tables-demo');
            var $grids = $('#grids-demo');


            checkAnimation($target);
            checkAnimation($button);
            checkAnimation($button_iconic);
            checkAnimation($boxes);
            checkAnimation($icons);
            checkAnimation($highlights);
            checkAnimation($dividers);
            checkAnimation($accordions);
            checkAnimation($toggle);
            checkAnimation($tabs);
            checkAnimation($pricingtables);
            checkAnimation($grids);


            // Overlay for teaser

            if($('#main').hasClass('move')){

              $('#teaser').addClass('overlayed');

            } else {

              $('#teaser').removeClass('overlayed');

            }

        });


});
