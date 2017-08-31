// Back-end

// Create bubbles constructor
function createBubbles() {
  // Generate a random number between 1 - 100
  var randomLeft = Math.floor(Math.random() * 100) + 1;
  // Store bubbles in an array
  var getBubbleSize = ["large", "small"];
  // Generate any random number
  var rand = Math.random();
  // Increasing the length of the array
  rand *= getBubbleSize.length;
  // Set the bubble size to a random number
  var bubbleSize = getBubbleSize[Math.floor(rand)];
  // Set a random opacity for the bubbles
  var randomOpacity = Math.floor(Math.random() * (9 - 8 + 1)) + 8;
  // Set a random size for the bubbles
  var scaleValue = Math.floor(Math.random() * (9 -5 + 1)) + 5;
  // For appending the scale
  var randomScale = "scale(0." + scaleValue + ")";
  // Rate of speed for accession
  var verticalSpeed = Math.floor(Math.random() * (25 - 5 + 1)) + 5;
  // Number of bubbles produces at one go
  var frequency = Math.floor(Math.random() * (6 - 1 + 1)) + 10;
  // For appending the rate of speed and veritical speed
  var randomAnimation = "moveclouds " + verticalSpeed + "s linear infinite, sideWays " + frequency + "s  ease-in-out infinite alternate";

  $("#bubbles").append('<div class="bubble ' + bubbleSize + '" style="left:' +
    randomLeft + '%;opacity:0.' + randomOpacity + ';transform:' + randomScale +
     ';-moz-transform:' + randomScale + ';-webkit-transform:' + randomScale +
     ';-webkit-animation:' + randomAnimation + ';-moz-animation:' +
     randomAnimation + ';--o-animation:' + randomAnimation + ';"></div>');
}

// Create 50 bubbles every 0.5 seconds
for (i = 0; i < 100; i++) {
  (function(i) {
    window.setTimeout(function() {
      createBubbles();
    }, i * 500);
  }(i));
}

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
    $('form.player').submit(function (event) {
        event.preventDefault();
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

        // Show header and start button
        $('#start').show();
        $('header').show();
      };
    };

    $("#bubbles").on("click", ".large", function() {
      var bubble = $(this);
      $(this).css("transform", "scale(1.1)");
      setTimeout(function() {
        $(bubble).css("background", "url(../assets/images/large-bubble.png)")
        setTimeout(function() {
          $(bubble).css("opacity", "0");
        }, 50);
      }, 20);
    });

    $("#bubbles").on("click", ".small", function() {
        var bubble = $(this);
        $(this).css("transform", "scale(1.1)");
        setTimeout(function() {
        $(bubble).css("background", "url(../assets/images/small-bubble.png)")
        setTimeout(function() {
          $(bubble).css("opacity", "0");
        }, 50);
        }, 20);
      });
    });
});
