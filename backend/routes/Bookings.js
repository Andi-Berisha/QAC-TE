
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
            // res.status(201).send(`${result.title} has been added successfully!`);
            res.send(result._id);
        })
        .catch((err) => next(err));
});


// ? DELETE
router.delete("/delete/:id", (req, res, next) => {
    Bookings.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            next(err);
        }
        res.status(204).send(`Successfully deleted`);
    });
});

// // ? PATCH
// router.patch("/patch/:id", (req, res, next) => {
//     Bookings.findByIdAndUpdate(req.params.id, (err) => {
//         if (err) {
//             next(err);
//         }
//         res.status(204).send(`Successfully patched`);
//     });
// });
// // ? PARTIAL UPDATE


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