$(document).ready(function() {
    // Hide the birthday image initially
    $("#pic").hide();
    
    $('#b2')[0].play();


    // Event listener for the play button
    $(document).on('click', '#playButton', function() {
        // Show the birthday image
        $("#pic").show();
        $("#card").hide();
        $("#b2").hide();

        // Auto-play the birthday music
        var birthdayMusic = $('#birthdayMusic1')[0];
        birthdayMusic.play();

        // Set the background to the GIF image and center it
        $("#pic").css({
            "background-image": "url('file/bad1.jpg')",
            "background-position": "center",
            "background-size": "cover"
        });

        // Add the bounceIn class to trigger the animation
        $("#card").addClass("bounceIn");

        // Set a timer to revert the background after 5 seconds (adjust as needed)
        setTimeout(function() {
            // Hide the birthday image
            $("#pic").hide();
            $("#card").show();

            // Stop the birthday music
            birthdayMusic.pause();
            birthdayMusic.currentTime = 0;

            // Revert the background to its original state
            $("#pic").css({
                "background-image": "none",
                "background-position": "initial",
                "background-size": "auto"
            });

            // Remove the bounceIn class
            $("#card").removeClass("bounceIn");
        }, 50000); // 5000 milliseconds = 5 seconds
    });
});
