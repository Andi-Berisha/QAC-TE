import Stripe from "stripe";

const stripe = new Stripe("sk_test_51IRJCSK9eOXpEB8jC5cpya35klc0uShoiYgk7dWsboOL7uS6DLoM6GezOmQzm24sACzKyw3xdB7qaumBgDvRYWey00L0d1pKzV");

export default async (req, res) => {
  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "GBP",
      description: "Product description here",
      payment_method: id,
      confirm: true
    });

    console.log(payment);

    return res.status(200).json({
      confirm: "abc123"
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error.message
    });
  }
};