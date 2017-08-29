// Back-end

// Front-end
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
  $('#start').click(function (event) { 
    event.preventDefault();
    
    var min = 0;
    var sec = 30;

    var myVar = setInterval( function() { countDownTimer() } ,500 );

    function countDownTimer() {

    var displayCountdown = $('.timer').text( min +" : " + sec );
    sec--;
    if(sec === -1) {
       clearInterval(myVar);
    };
    // displayCountdown;
    };

    // countDownTimer();
    console.log('I am groot');
    console.log(countDownTimer());
  });
});

