// Use JQUERY for everything
// TODO: Add elements
var currentDay = $("#currentDay");
var timeBlock = $(".time-block");
var col9AM = $(".09AM");
var col10AM = $(".10AM");
var col11AM = $(".11AM");
var col12PM = $(".12PM");
var col1PM = $(".13PM");
var col2PM = $(".14PM");
var col3PM = $(".15PM");
var col4PM = $(".16PM");
var col5PM = $(".17PM");

var timeSlotArray = [col9AM, col10AM, col11AM, col12PM, col1PM, col2PM, col3PM, col4PM, col5PM];

// Get Time Block time and set block time.
for (let i = 0; i < timeSlotArray.length; i++) {
    const element = timeSlotArray[i][0];
    var timeText = $(element).find("p").text();
    var timeHH = moment(timeText, "hh").format("HH");
    var nowHH = moment().format("HH");
    console.log(timeText);
    console.log(timeHH);
    console.log(nowHH);

    $(element).find("p").text(moment(timeText, "hh:mm").format("hh:mm a"));

    if (timeHH === nowHH) {
        $(element).next().addClass("present");
    } else if (timeHH > nowHH) {
        $(element).next().addClass("future");
    }
}

// TODO: Add setInterval function for the date. Weekday, Month Date (st/th)
currentDay.text(moment().format('dddd, MMMM Do'));

// TODO: Timeblocks should be colored based on past, present, and future
    // Determine Current Time
    // Determine time block time
        // Maybe format the text in time block? format("HH")?
    // Compare Current/Block Times
    // Return background-color

// Text should be added to local storage. When the user clicks the "Save" button.