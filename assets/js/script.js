// Use JQUERY for everything
var currentDay = $("#currentDay");
// TODO: Add elements

// TODO: Add setInterval function for the date. Weekday, Month Date (st/th)
currentDay.text(moment().format('dddd, MMMM Do'));

// TODO: Create timeblocks for each hour of the day.
// Timeblocks should be colored based on past, present, and future

// TODO: Add event listener so when you click on a time block, you can add text. 
// Text should be added to local storage. When the user clicks the "Save" button.