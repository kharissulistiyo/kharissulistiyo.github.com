jQuery( document ).ready(function($) {

  $('#wrapper').waitForImages(function() {

      alert('Image is loaded!');

  });

});



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

  $('#about').removeClass('dynamic-transit');
  $('#about').addClass('dynamic-transit-on');
  $('.front').removeClass('fade-in');
  $('.front').addClass('fade-out');
  $('#about').delay(2000).fadeIn();
  return false;


});

$('.close-window').click(function(){

  $(this).parent('#about').fadeOut().delay(1500);
  $('.front').addClass('fade-in');
  $('#about').removeClass('dynamic-transit-on');
  return false;

});

$('.demo').click(function(){


    $('.front').removeClass('fade-in');
    $('.front').addClass('fade-out');

    if ($('div').hasClass('dynamic-transit-on')) {
        $('.dynamic-transit-on').removeClass('fade-in');
        $('.dynamic-transit-on').addClass('fade-out');
    }


    $('#show-demo').delay(2000).fadeIn();

    $(this).hide();
    $('.demo-close').delay(5000).show();


    return false;


});

$('.demo-close').click(function(){


  $('#show-demo').fadeOut().delay(1500);
  if ($('div').hasClass('dynamic-transit-on')) {
      $('.dynamic-transit-on').removeClass('fade-out');
      $('.dynamic-transit-on').addClass('fade-in');
  } else {

    $('.front').removeClass('fade-out');
    $('.front').addClass('fade-in');

  }

  $(this).hide();
  $('.demo').delay(5000).show();

  return false;

});



// Show subscription form bock

$('.subscription-teaser span').click(function(){

  $(this).addClass('hide');
  $('#subscribe form').addClass('display');

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

// Show person bio

$('.show-person-bio').click(function(){

  if($(this).parent().next('.person-bio').hasClass('display-none')){

    $(this).parent().next('.person-bio').removeClass('display-none');

  } else {

    $(this).parent().next('.person-bio').addClass('display-none');

  }

  return false;

});
