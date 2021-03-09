'use strict';
const router = require('express').Router();
const { Discussion } = require("../config/db");


// ? GET ALL
router.get("/getAll", (req, res, next) => {
    Discussion.find((err, products) => {
        if (err) {
            next(err);
        }
        res.send(products);
    });
});


// ? CREATE
router.post("/create", ({ body }, res, next) => {
    const item = new Discussion(body);
    item.save()
        .then((result) => {
            res.status(201).send(`${result.title} has been added successfully!`)
        })
        .catch((err) => next(err));
});


module.exports = router; 