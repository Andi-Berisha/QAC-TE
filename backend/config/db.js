'use strict';
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { DB_URL, DB_NAME } = require('./CONSTS.json');

const DiscussionSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    Comments: {
        type: String,
        required: true
    },

    Rating: {
        type: Number,
        required: true


    }
}
);

const BookingSchema = new Schema({
    title: {
        type: String
    },
    showingTime: {
        type: String
    },
    bookerName: {
        type: String
    },
    adult: {
        type: Number
    },
    child: {
        type: Number
    },
    concession: {
        type: Number
    },
    totalPrice: {
        type: Number
    },
    paid: {
        type: Boolean,
        default:false
    }
}
);

const Discussion = model('Discussion', DiscussionSchema);
const Bookings = model('Bookings',BookingSchema);

mongoose.connect(`${DB_URL}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Connected`);
    }
});

module.exports = { "Discussion": Discussion, "Bookings":Bookings };