$(document).ready(function () {
  $(".about").on('click', function (event) {
    event.preventDefault();
    $('.overlay').addClass('open');
    console.log("open");
  });
  $('.closeNav').on('click', function (event) {
    event.preventDefault();
    $('.overlay').removeClass('open');
  });
  console.log();
});
