'use strict';
const {DISCUSSION_URL} = require ("./config/CONSTS.json")
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const createError = require('http-errors');



// instantiate my app 
const app = express();
// middleware!
app.use(cors());
app.use(bodyParser.json());

//Custom middleware
const logger = (req, res, next) => {
    console.log(new Date());
    next();
}

// this will print the date before each request.. 
app.use(logger);

// importing all of the routes in Discussion.js
const DiscussionRoute = require('./routes/Discussion');

app.use(`${DISCUSSION_URL}`, DiscussionRoute);

// const StripeRoute = require('./routes/charge');

// app.use(`${Stripe_URL}`, StripeRoute);

// error handling
app.use((req, res, next) => {
    next(createError(404, 'Resource not found'));
});

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send(err.message || "something went wrong");
})

// communicate with the app on a specific port
const server = app.listen(5019, () => {
    console.log(`Server has successfully started on port number: ${server.address().port}`);
});

module.exports = server; 