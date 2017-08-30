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
    $('form.player').submit(function (event) {
        event.preventDefault();
        window.location.assign("play.html");

    });

    // Selecting background colors
    $('.bg-colors').change(function () {
        var colorsChosen = ['blue','violet','aqua','lilac','default'];
        colorsChosen.forEach(function(colorChosen){
            $('.colorOverlay').removeClass(colorChosen);
        });
//        $('.colorOverlay').removeClass();

        if ($(this).val() === 'blue') {
            $('.colorOverlay').addClass('blue');
        } else if ($(this).val() === 'violet') {
            $('.colorOverlay').addClass('violet');
        } else if ($(this).val() === 'aqua') {
            $('.colorOverlay').addClass('aqua');
        } else if ($(this).val() === 'lilac') {
            $('.colorOverlay').addClass('lilac');
        } else {
            $('.colorOverlay').addClass('default');
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

        var myVar = setInterval(function () {
            countDownTimer()
        }, 1000);

        function countDownTimer() {

            var displayCountdown = $('.timer').text(min + " : " + sec);
            sec--;
            if (sec === -1) {
                clearInterval(myVar);
            };
        };
    });
});
