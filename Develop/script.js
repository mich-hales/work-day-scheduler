

// function for the current date and time
function todaysDate() {
    // Displays current time on the header every second
    setInterval(function() {
        var today = moment().format('dddd, MMM Do YYYY h:mm:ss a');
        $('#currentDay').text(today);  
    }, 1000);
  }

  // call function
todaysDate();



// function to color code past, present and future hours
function colorCode() {
  
    $('.form-control').each(function() {
        // selecting id value to match up timeline
        var timeLine = parseInt($('this').attr('id'));
        // current hour 
        var currentHour = moment().hours();
        // logs military time
        console.log(currentHour);
        console.log(timeLine);

        if (currentHour > timeLine) {
            $('this').addClass('past');
        } else if (currentHour < timeLine){
            $('this').addClass('future');
        } else {
            $('this').addClass('present');
        }
    })
}

colorCode();




// testing local storage
// var textInput = JSON.parse()



var userInput;
var hourText

// function to save text input to local storage when save button is clicked
// (jquery on click for event listener)
$('.save').on('click', function() {
    // selects all siblings of the button clicked and gets value of text input from class form-control
    userInput = $('this').siblings('.form-control').val();
    console.log(userInput);
    hourText = $('this').siblings('.input-group-prepend').text();
    console.log(hourText);
    // stringify
    var objString = JSON.stringify(userInput);
    localStorage.setItem(hourText, objString);

    console.log(objString);
});




