$(document).ready(function() {
    ////////--->Variables declarations<---////////
    const currentday = $("#currentDay"); // <p> element that renders the current day
    const containerEl = $(".container"); // <div> elemnt to prepend and render the time-blocks items
    const hoursinadayflag = 24; // Flag variable to iterate a for lop and store the hours of the currentday in the following array
    let hoursblockarray = []; // Array to store the hours of the day
    let curday = moment().format('MMMM Do YYYY'); //Variable to get the current date from moment.js library
    ////////--->End of Variables declarations<---////////

    //////Render current day
    function renderCurrentDay() {
        currentday.text(curday);
    }
    renderCurrentDay();


    //////Store time blocks in an array
    function StoreTimeHoursinArray() {
        let formatedday = "";
        for (let i = 0; i < hoursinadayflag; i++) {
            formatedday = moment().subtract(i, "hours").format("hA");
            hoursblockarray.unshift(formatedday);
        }
        console.log(hoursblockarray);
    }
    StoreTimeHoursinArray();

    /////////Render the time blocks
    function renderTimeBlocks() {
        console.log("Starting renderTimeBlocks");
        for (let x = 0; x <= hoursblockarray.length - 1; x++) {
            //console.log(`inserting time blocks from array pos: ${x}`);
            let classN;
            if (x === 0) {
                classN = "future";
            }
            if (x > 0 && x < hoursblockarray.length) {
                classN = "present";
            }
            containerEl.prepend(`<div class="row hour">
                                        <p class="time-block">${hoursblockarray[x]}</p>
                                        <textarea id="${x}" rows="1" cols="128" class="${classN}"></textarea>
                                        <button class="saveBtn"><span class="fas fa-save"></span></button>
                                </div>`);
        }
    }
    renderTimeBlocks();
});