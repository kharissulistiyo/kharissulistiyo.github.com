// Wrapper height
  /**
   * Set hieght of element as per window height
   * size (resized or not)
   * ======================================= */

    var wi = $(window).height();

    // Call in css height attribute
    $('#wrapper').css({
      height: wi
    });

    $(window).resize(function() {

      var wi = $(window).height();
      // Call in css height attribute
      $('#wrapper').css({
        height: wi
      });

    });


// Count down setting
$("#getting-started")
  .countdown("2014/08/09", function(event) {
  $(this).html(event.strftime('<div class="time day"><span class="amount"><span class="text">%D</span></span></div><div class="time hour"><span class="amount"><span class="text">%H</span></span></div><div class="time minute"><span class="amount"><span class="text">%M</span></span></div><div class="time second"><span class="amount"><span class="text">%S</span></span></div>'));
});


// Animate menu

$('.about').click(function(){

    $('#getting-started, #header, #menu, #subscribe').removeClass('fade-in');
    $('#getting-started, #header, #menu, #subscribe').addClass('fade-out');
    $('#new-window').delay(2000).fadeIn();
    return false;


});

$('.close-window').click(function(){

  $(this).parent('#new-window').fadeOut().delay(1500);
  $('#getting-started, #header, #menu, #subscribe').removeClass('fade-out');
  $('#getting-started, #header, #menu, #subscribe').addClass('fade-in');

});


// Form

$('input[type="text"]').on('focus', function(){

  $('input[type="submit"]').addClass('visible');
  $('input[type="submit"]').removeClass('visiblez');

});

$('input[type="text"]').on('blur', function(){

  $('input[type="submit"]').addClass('visiblez');

});
