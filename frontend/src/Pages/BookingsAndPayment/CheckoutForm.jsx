import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from "axios";
import { Link, } from 'react-router-dom';
import { BOOKINGS_URL } from "../../Resources/CONSTS.json";


const CARD_OPTIONS = {
  iconStyle: 'solid',
  hidePostalCode: true,
  style: {
    // base: {
    //   iconColor: '#c4f0ff',
    //   fontWeight: 500,
    //   fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
    //   fontSize: '16px',
    //   fontSmoothing: 'antialiased',
    //   ':-webkit-autofill': {color: '#fce883'},
    //   '::placeholder': {color: '#87bbfd'},
    // },
    invalid: {
      iconColor: '#ff0000',
      color: '#ff0000',
    },
  },
};



const CheckoutForm = ({ success, amount, bookingID }) => {
  const stripe = useStripe();
  const elements = useElements();

  const updateDatabase = () => {
    // e.preventDefault();
    axios.patch(`${BOOKINGS_URL}/update/${bookingID}`,
        { paid: true })
        .then((res) => {
            // trigger(res.data);
            // toggle();
            console.log(bookingID);
            console.log('succesfully updated db');
        })
        .catch((err)=>{
            // trigger(err.data);
            console.log(err);
        })
  }

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post("http://localhost:5019/Stripe/charge", { id, amount: amount });
        console.log(data);
        success();
        updateDatabase();
        // return (<Link to={{ pathname: `/` }} style={{ color: 'black' }}></Link>);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ color: 'black', maxWidth: '400px', margin: '0 auto' }}>
      {/* <label>Name on credit card:</label><br/> */}
      {/* <input type="text" name="name" /> */}
      <CardElement options={CARD_OPTIONS} />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;