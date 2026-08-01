/*

Author: Jeremy St Pierre #301540295 for COMP229

*/
require('dotenv').config()
const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./db/connection');

var app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded( { extended: true }));

app.use(morgan('combined'));
app.use(cors());

//import routers
let indexRouter = require('./routes/index');
app.use('/api', indexRouter);

app.use('/', function(req, res) {
    res.send('Hello World, I am express');
});

//forward 404 to a generic error message
app.use(function (req, res, next) {
    next(createError(404));
});

// error handling
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal server error',
        },
    });
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');
module.exports = app;

