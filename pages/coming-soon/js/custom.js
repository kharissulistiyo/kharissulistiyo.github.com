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
$("#time-box")
  .countdown("2014/08/09", function(event) {
  $(this).html(event.strftime('<div class="time day"><span class="amount"><span class="text">%D</span></span></div><div class="time hour"><span class="amount"><span class="text">%H</span></span></div><div class="time minute"><span class="amount"><span class="text">%M</span></span></div><div class="time second"><span class="amount"><span class="text">%S</span></span></div>'));
});


// Animate menu

$('.about').click(function(){

    $('#time-box, #menu, #subscribe').removeClass('fade-in');
    $('#time-box, #menu, #subscribe').addClass('fade-out');
    $('#new-window').delay(2000).fadeIn();
    return false;


});

$('.close-window').click(function(){

  $(this).parent('#new-window').fadeOut().delay(1500);
  $('#time-box, #menu, #subscribe').removeClass('fade-out');
  $('#time-box, #menu, #subscribe').addClass('fade-in');

});


// Form

$('input[type="text"]').on('focus', function(){

  $('input[type="submit"]').addClass('visible');
  $('input[type="submit"]').removeClass('visiblez');

});

$('input[type="text"]').on('blur', function(){

  $('input[type="submit"]').addClass('visiblez');

});


// Fix placeholder visibility in IE

$('#subscribe input[type="text"]').focus(function() {
  var input = $(this);
  if (input.val() == input.attr("'placeholder'")) {
    input.val("''");
    input.removeClass("'placeholder'");
  }
}).blur(function() {
  var input = $(this);
  if (input.val() == "''" || input.val() == input.attr("'placeholder'")) {
    input.addClass("'placeholder'");
    input.val(input.attr("'placeholder'"));
  }
}).blur();
