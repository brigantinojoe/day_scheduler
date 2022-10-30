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
var button = $("button");

var timeSlotArray = [col9AM, col10AM, col11AM, col12PM, col1PM, col2PM, col3PM, col4PM, col5PM];

// Get Time Block time and set block time.
for (let i = 0; i < timeSlotArray.length; i++) {
    const element = timeSlotArray[i][0];
    var timeText = $(element).find("p").text();
    var timeHH = moment(timeText, "hh").format("HH");
    var nowHH = moment().format("HH");

    $(element).find("p").text(moment(timeText, "hh:mm").format("hh:mm a"));

    if (timeHH === nowHH) {
        $(element).next().addClass("present");
    } else if (timeHH > nowHH) {
        $(element).next().addClass("future");
    }
}

// TODO: Add setInterval function for the date. Weekday, Month Date (st/th)
currentDay.text(moment().format('dddd, MMMM Do'));

// Text should be added to local storage. When the user clicks the "Save" button.
button.click(function (e) {
    e.preventDefault();
    var parent = $(e.target).parent();
    var textBox = parent.children("div").eq(1);
    var time = parent.children("div").eq(0).text();
    var timeClass = moment(time, "HH").format("HH");
    if (parseInt(timeClass) < 8) {
        var timeNumber = parseInt(timeClass) + 12;
        var timeClass = timeNumber.toString();
    }
    if (parseInt(timeClass) > 11) {
        timeClass += "PM-text";
    } else { 
        timeClass += "AM-text";
    }
    console.log(timeClass);
    var textBoxContent = textBox.text();
    localStorage.setItem(timeClass, textBoxContent);
});

for (const key in localStorage) {
    if (localStorage.hasOwnProperty.call(localStorage, key)) {
        const element = localStorage[key];
        $(`.${key}`).find("p").text(element);
        console.log(key);
        console.log(element);
    }
}