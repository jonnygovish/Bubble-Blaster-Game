// Back-end

// Front-end
$(document).ready(function () {
    // Make about section clickable and open about overlay
  $(".about").on('click', function (event) {
    event.preventDefault();
    $('.overlay').addClass('open');
      // Test
      // console.log("open");
  });
    
    // Close the about overlay
  $('.closeNav').on('click', function (event) {
    event.preventDefault();
    $('.overlay').removeClass('open');
  });
    
    // Store and Display player name in the console 
    $('form.player').submit( function (event) {
        event.preventDefault();
        // Navigate to play console
        window.location.assign("play.html");
        
    });
  
    // Click the start button for the timer to start
  $('#start').click(function (event) { 
    event.preventDefault();
    
    var min = 0;
    var sec = 30;

    var myVar = setInterval( function() { countDownTimer() } ,1000 );

    function countDownTimer() {

    var displayCountdown = $('.timer').text( min +" : " + sec );
    sec--;
    if(sec === -1) {
       clearInterval(myVar);
    };
    };
  });
});



