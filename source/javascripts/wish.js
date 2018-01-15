$(document).ready(function(){
  $(window).on('scroll', function() {
    var position = $('.bg-red').offset().top;
    var half = $('.section').height() / 2;
    if ($(window).scrollTop() > position - half ) {
      $('#new-year').addClass('animate');
    }
  });


});