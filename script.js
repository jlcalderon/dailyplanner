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
    //let LocalStorageArray = []; //Intented to store JSON objects timeblocks
    //let hoursCount = 9;
    ////////--->End of Variables declarations<---////////

    //////Render current day
    function renderCurrentDay() {
        currentday.text(curday);
    }
    renderCurrentDay();


    //////Store time blocks in an array
    function StoreTimeHoursinArray() {
        //Store time business hours past from current time ()
        for (let i = 1; i <= 24; i++) { // iterator i will iterate until i gets to 24 Hours past from current time
            currentT = moment().subtract(i, "hours");
            pastHoursFromCurrentMoment.unshift(currentT);
        }
        //Store current time in the future business hours array position[0]
        futureHoursFromCurrentMoment.push(moment());

        //Store future bussiness hours from current time in the array
        for (let j = 1; j <= 24; j++) { //iterator j will iterate 24 times which a representation of the hours from current time to future of hours remaining
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
                                            <p id="${reversedFuture[y].format("hA")}" class="time-block">${reversedFuture[y].format("hA")}</p>
                                            <textarea id="text-${reversedFuture[y].format("hA")}" rows="1" cols="128" class="${classN} text-area"></textarea>                               
                                            <button id="${reversedFuture[y].format("hA")}" class="saveBtn"><span class="fas fa-save"></span></button>
                                    </div>`);
                $(`#text-${reversedFuture[y].format("hA")}`).val(localStorage.getItem(reversedFuture[y].format("hA")));
                /*                 hoursCount = hoursCount - 1;
                                let timeBlock = {
                                    "index": hoursCount,
                                    "time": reversedFuture[y].format("hA"),
                                    "value": $(`#text-${reversedFuture[y].format("hA")}`).val(),
                                    "saved": false
                                }
                                LocalStorageArray.push(timeBlock); */
            }

        }

        //This for loop is intented to render the past business hours from the current time
        for (let x = 0; x <= reversedPast.length - 1; x++) {
            if (reversedPast[x].isBetween(startOfJourney, endOfJourney)) {
                classN = "past";
                containerEl.prepend(`<div class="row hour">
                                            <p id="${reversedPast[x].format("hA")}" class="time-block">${reversedPast[x].format("hA")}</p>
                                            <textarea id="text-${reversedPast[x].format("hA")}" rows="1" cols="128" class="${classN} text-area"></textarea>
                                            
                                            <button id="${reversedPast[x].format("hA")}" class="saveBtn"><span class="fas fa-save"></span></button>
                                    </div>`);
                $(`#text-${reversedPast[x].format("hA")}`).val(localStorage.getItem(reversedPast[x].format("hA")));
                /*                 hoursCount = hoursCount - 1;
                                let timeBlock = {
                                    "index": hoursCount,
                                    "time": reversedPast[x].format("hA"),
                                    "value": $(`text-${reversedPast[x].format("hA")}`).val(),
                                    "saved": false
                                }
                                LocalStorageArray.push(timeBlock); */
            }
        }

    }
    renderTimeBlocks();


    //Set localStorage variables to store notes of the events written in the time blocks
    //let rLocalStorageArray = LocalStorageArray.reverse() //reversed LocalStorageArray
    //console.log(rLocalStorageArray); // Logging timeblocksarray

    $('.saveBtn').on("click", function() {
        let id = $(this).attr("id");
        let valor = $(`#text-${id}`).val();
        console.log(valor);
        localStorage.setItem(`${id}`, valor);
    });



});