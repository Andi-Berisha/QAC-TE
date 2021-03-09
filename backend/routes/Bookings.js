
'use strict';
const router = require('express').Router();
const { Bookings } = require("../config/db");


// ? GET ALL
router.get("/getAll", (req, res, next) => {
    Bookings.find((err, products) => {
        if (err) {
            next(err);
        }
        res.send(products);
    });
});


// ? CREATE
router.post("/create", ({ body }, res, next) => {
    const item = new Bookings(body);
    item.save()
        .then((result) => {
            res.send(result._id);
        })
        .catch((err) => next(err));
});

router.patch("/update/:id", (req, res, next) => {
    Bookings.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true },
        (err) => {
            if (err) {
                next(err);
            }
            res.status(202).send(`Successfully patched!`);
        })
});

module.exports = router; 