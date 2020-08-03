$(document).ready(function() {
    ////////--->Variables declarations<---////////
    const currentday = $("#currentDay"); // <p> element that renders the current day
    const containerEl = $(".container"); // <div> elemnt to prepend and render the time-blocks items
    let pastHoursFromCurrentMoment = []; // Array to store the hours past from the current hour(momment()) to the beginnig (9AM) of a journey
    let futureHoursFromCurrentMoment = []; // Array to store the future hours from the the current hour(momment()) to the remaining hours of a journey
    let curday = moment().format('MMMM Do YYYY'); //Variable to get the current date from moment.js library as a readable string
    const startOfJourney = moment().hour(9); //Variable to define the starting time of a journey and use it in the inBetween function from moment
    const endOfJourney = moment().hour(17); //Variable to define the end time of a journey and use it in the inBetween function from moment
    let currentT; // variable defined to store the current time;
    ////////--->End of Variables declarations<---////////

    //////Render current day
    function renderCurrentDay() {
        currentday.text(curday);
    }
    renderCurrentDay();


    //////Store time blocks in an array
    function StoreTimeHoursinArray() {
        //Store time business hours past from current time ()
        for (let i = 0; i <= 24; i++) {
            currentT = moment().subtract(i, "hours");
            pastHoursFromCurrentMoment.unshift(currentT);
        }
        //Store current time in the future business hours array position[0]
        futureHoursFromCurrentMoment.push(moment());

        //Store future bussiness hours from current time in the array
        for (let j = 0; j <= 24; j++) {
            currentT = moment().add(j, "hours");
            futureHoursFromCurrentMoment.push(currentT);
        }

    }
    StoreTimeHoursinArray();

    /////////Render the time blocks
    function renderTimeBlocks() {
        console.log("Starting renderTimeBlocks");
        //empty variable to set for class attribute of the textarea of the time block items
        let classN = "";

        let reversedPast = pastHoursFromCurrentMoment.reverse(); //reversed array of past hours

        let reversedFuture = futureHoursFromCurrentMoment.reverse(); //reversed array of future hours
        console.log(`Past hours length: ${reversedPast.length}`); //logging length of the arrays
        console.log(`Future hours length: ${reversedFuture.length}`); //logging length of the arrays

        //This for loop is intented to render the future business hours and the current time on the planner app
        for (let y = 0; y <= reversedFuture.length - 1; y++) {
            if (reversedFuture[y].isBetween(startOfJourney, endOfJourney)) {
                if (reversedFuture[y] === moment().hour()) {
                    classN = "present"
                } else {
                    classN = "future";
                }
                containerEl.prepend(`<div class="row hour">
                                            <p class="time-block">${reversedFuture[y].format("hA")}</p>
                                            <textarea rows="1" cols="128" class="${classN} text-area"></textarea>
                                            <button class="saveBtn"><span class="fas fa-save"></span></button>
                                    </div>`);
            }
        }

        //This for loop is intented to render the past business hours from the current time
        for (let x = 0; x <= reversedPast.length - 1; x++) {
            if (reversedPast[x].isBetween(startOfJourney, endOfJourney)) {
                classN = "past";
                containerEl.prepend(`<div class="row hour">
                                            <p class="time-block">${reversedPast[x].format("hA")}</p>
                                            <textarea rows="1" cols="128" class="${classN} text-area"></textarea>
                                            <button class="saveBtn"><span class="fas fa-save"></span></button>
                                    </div>`);
            }
        }

    }
    renderTimeBlocks();
});