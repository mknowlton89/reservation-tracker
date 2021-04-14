// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [
    {
        id: 001,
        name: "Michael K",
        email: "michael@michael.com",
        phone: 7708434662,
    }
];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/reservations', (req, res) => res.sendFile(path.join(__dirname, 'reservation.html')));

app.get('/currentreservations', (req, res) => res.json(reservations));

app.post('/api/reservation', (req, res) => {

    console.log(req);
    const newReservation = req.body;

    reservations.push(newReservation);
    res.json(newReservation);
})



app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));