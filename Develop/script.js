

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
        var timeLine = $(this).attr('id');
        // current hour 
        var currentHour = moment().hours();
        // logs military time
        console.log(currentHour);
        console.log(timeLine);

        // sets the color code for the scheduler
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


//global variables
var userInput;
var hourText;
var objString;

// function to save text input to local storage 
function saveToLocalStorage(event) {
    event.preventDefault();
    // selects all siblings of the button clicked and gets value of text input from class form-control
    userInput = $(this).siblings('.form-control').val().trim();
    console.log(userInput);
    // selects from the siblings the class of input-group-prepend
    hourText = $(this).siblings('.input-group-prepend').text().trim();
    console.log(hourText);
    // stringify
    objString = JSON.stringify(userInput);
    // sets the variable hourText to the key and objString which is userInput stringified as the value
    localStorage.setItem(hourText, objString);

    console.log(objString);
}

// call the saveToLocalStorage function when the save button is clicked
$('.saveBtn').on('click', saveToLocalStorage);


// variables selecting each hour 
var nine = $('#9');
var ten = $('#10');
var eleven = $('#11');
var twelve = $('#12');
var one = $('#13');
var two = $('#14');
var three = $('#15');
var four = $('#16');
var five = $('#17');
var six = $('#18');

// get items from local storage and make each of the selected varables contain that new value
function showValue() {
    nine.val(JSON.parse(localStorage.getItem('9 AM')));

    ten.val(JSON.parse(localStorage.getItem('10 AM')));

    eleven.val(JSON.parse(localStorage.getItem('11 AM')));

    twelve.val(JSON.parse(localStorage.getItem('12 PM')));

    one.val(JSON.parse(localStorage.getItem('1 PM')));

    two.val(JSON.parse(localStorage.getItem('2 PM')));

    three.val(JSON.parse(localStorage.getItem('3 PM')));

    four.val(JSON.parse(localStorage.getItem('4 PM')));

    five.val(JSON.parse(localStorage.getItem('5 PM')));

    six.val(JSON.parse(localStorage.getItem('6 PM')));
};

showValue();



