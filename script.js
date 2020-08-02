$(document).ready(function() {
    ////////--->Variables declarations<---////////
    const currentday = $("#currentDay"); // <p> element that renders the current day
    const container = $(".container"); // <div> elemnt that appends to render the timeblocks
    let curday = moment().format('MMMM Do YYYY'); //Variable to get the current date from moment.js library
    ////////--->End of Variables declarations<---////////

    //////Render current day
    function renderCurrentDay() {
        currentday.text(curday);
    }
    renderCurrentDay();


    //////Render time blocks
    function renderTimeBlocks() {

    }
});