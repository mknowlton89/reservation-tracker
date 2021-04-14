// DOM Variables

const { response } = require("express");



// JS Variables



// Function Definitions
const getReservations = () => {
    fetch("/currentreservations", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // const { id, name, email, phone } = data;

            // if (data) {

            // }
        })
}


// Event Listeners



// Function Calls
getReservations();