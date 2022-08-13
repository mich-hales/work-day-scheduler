

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
        var timeLine = parseInt($(this).attr('id'));
        // current hour 
        var currentHour = moment().hours();
        // logs military time
        console.log(currentHour);
        console.log(timeLine);

        if (currentHour > timeLine) {
            $(this).addClass('past');
        } else if (currentHour < timeLine){
            $(this).addClass('future');
        } else {
            $(this).addClass('present');
        }
    })
}

colorCode();




// function to save text input to local storage 
function saveToLocalStorage(event) {
    event.preventDefault();
    // selects all siblings of the button clicked and gets value of text input from class form-control
    var userInput = $(this).siblings('.form-control').val().trim();
    console.log(userInput);
    var hourText = $(this).siblings('.input-group-prepend').text().trim();
    console.log(hourText);
    // stringify
    var objString = JSON.stringify(userInput);

    localStorage.setItem(hourText, objString);

    console.log(objString);
}

// call the saveToLocalStorage function when the save button is clicked
$('.save').on('click', saveToLocalStorage);


// testing local storage
// JSON.parse(localStorage.getItem("9 AM"));






