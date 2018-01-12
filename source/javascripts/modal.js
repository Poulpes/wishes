$(document).ready(function() {
  $(".modal-button").click(function() {
    $($(this).data("target")).addClass("is-active");
  });
  $(".modal-close, .modal-background").click(function() {
    $('.modal').removeClass('is-active');
  })
});
