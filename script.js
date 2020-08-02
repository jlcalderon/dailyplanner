$(document).ready(function() {
    ////////--->Variables declarations<---////////
    const currentdate = $("#currentDay"); // <p> element that renders the current day
    const container = $(".container"); // <div> elemnt that appends to render the timeblocks
    let curdate = moment().format('MMMM Do YYYY'); //Variable to get the current date from moment.js library
    ////////--->End of Variables declarations<---////////

    //////Render current date
    function renderCurrentDate() {
        currentdate.text(curdate);
    }
    renderCurrentDate();
});