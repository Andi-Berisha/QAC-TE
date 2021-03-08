// import Stripe from "stripe";
require('dotenv').config();
// const stripe = new Stripe('sk_test_51IRJCSK9eOXpEB8jC5cpya35klc0uShoiYgk7dWsboOL7uS6DLoM6GezOmQzm24sACzKyw3xdB7qaumBgDvRYWey00L0d1pKzV');
const router = require('express').Router();

const stripe = require('stripe')('sk_test_51IRJCSK9eOXpEB8jC5cpya35klc0uShoiYgk7dWsboOL7uS6DLoM6GezOmQzm24sACzKyw3xdB7qaumBgDvRYWey00L0d1pKzV');

router.post("/charge", (req, res, next) => {
  const { id, amount } = req.body;

  // try {
    const payment = stripe.paymentIntents.create({
      amount,
      currency: "GBP",
      description: "Cinema Tickets",
      payment_method: id,
      confirm: true
    }).then((result) => {
      res.status(201).send(`${payment} payment has been completed successfully!`)
    }).catch((err) => next(err));

  //   console.log(payment);

  //   return res.status(200).json({
  //     confirm: "abc123"
  //   });
  // } catch (error) {
  //   console.log(error);
  //   return res.status(400).json({
  //     message: error.message
  //   });
  // }
});

module.exports = router; 


// export default async (req, res) => {
//   const { id, amount } = req.body;

//   try {
//     const payment = await stripe.paymentIntents.create({
//       amount,
//       currency: "GBP",
//       description: "Product description here",
//       payment_method: id,
//       confirm: true
//     });

//     console.log(payment);

//     return res.status(200).json({
//       confirm: "abc123"
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json({
//       message: error.message
//     });
//   }
// };