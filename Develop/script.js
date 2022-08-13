

// function for the current date and time
function todaysDate() {
    // Displays current time on the header every second
    setInterval(function() {
        var today = moment().format('dddd, MMM Do YYYY h:mm:ss a');
        $('#currentDay').text(today);  
    }, 1000);
  }

todaysDate();
