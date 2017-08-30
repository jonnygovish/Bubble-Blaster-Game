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
    
  // Navigate to play console
  $('form.player').submit( function (event) {
    event.preventDefault();
    window.location.assign("play.html");
      
  });

  // Selecting background colors
  $('.bg-colors').change(function () {

    $('body').removeClass();

    if ($(this).val() === 'blue') {
      $('body').addClass('blue');
    } else if ($(this).val() === 'violet') {
      $('body').addClass('violet');
    } else if ($(this).val() === 'aqua') {
      $('body').addClass('aqua');
    } else if ($(this).val() === 'lilac') {
      $('body').addClass('lilac');
    } else {
      $('body').addClass('default');
    }

  });
  // var chosenColor = $('select.bg-colors option:checked').val();
  // if (chosenColor === "Blue") {
  //   $('body').addClass('blue');
  //   console.log("I am groot");
  // } else {
  //   return false;
  // }
  
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



