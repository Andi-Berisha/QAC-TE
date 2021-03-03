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
        required: true},

    Rating: {
            type: Number,
            required: true


        }
    }
);

const Discussion = model('Discussion', DiscussionSchema);

mongoose.connect(`${DB_URL}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Connected`);
    }
});

module.exports = { "Discussion": Discussion };