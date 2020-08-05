# Dailyplanner
This repository contains a daily planner web app

## Contents
- [Overview](#Overview)
- [Technical Specs](#Technical_Specs)
- [Instructions](#Instructions)
- [Functionality](#Functionality)
- [Contributions](#Contributions)
- [Deployed Application](https://jlcalderon.github.io/dailyplanner/)

## Overview
This is a simple calendar app that allows user to organize thier daily events/activities by adding/editing/deleting activities or events on **time blocks**. The *time blocks* are elements composed by: 
- Header: Contains a label of the time in hours
- Body: Is where the users type/delete thier events to be add/edit
- Options: Contains a button to save the current status of the body of the **time blocks**. The **time blocks** are color coded so that you know where you are on the day and what events past already and what events are comming. The color code goes like this:
- Gray: Events in the past
- Red: Current time event
- Green: Upcoming events
Enjoy your daily planner!. *Keep calm and by organized* 

## Technical_Specs
In this app time/dates are handled by using [Moment.js](https://momentjs.com/) library. Each of the **time blocks** in this app fetch/save data from/to `LocalStorage` variables, so that the data persist in the app even if the user closes the browser or tab or refresh the page. The **time blocks** rendered in the schedule of this app are considered regular business hours and are being evaluated taking the 24 hours of the day and checking if they are `inBetween(startOfJourney,endOfJourney)` where `startOfJourney=moment(9)` menaing 9:00 AM and `endOfJourney=moment(17)` meaning 5:00 PM.

## Instructions
- **1.** When you open the app click on any time blocks body
- **2.** Add or edit an event by typing on the body
- **3.** Save the event by clicking on its option save button

## Functionality
The following animation demonstrate the application functionality:
![Dailyplanner demo](Work_Day_Scheduler.gif)
PD: I recoreded this demo early morning at 6:00 AM so all the events show up as upcomming.

## Contributions
If you will like to contribute to this app you are more than welcome. Please check the [repository](https://github.com/jlcalderon/dailyplanner) and the [deployed app](https://jlcalderon.github.io/dailyplanner/). Clone/Fork Request a pull and push your changes. Please feel free to contact for more information <jlcalderonfuentes@gmail.com>