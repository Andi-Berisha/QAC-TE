import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Button } from 'reactstrap';
import { Toast, ToastBody, ToastHeader, ToastFooter } from "reactstrap";
// import PUBLISHABLE_KEY from './.env'
// require('dotenv').config();

// const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);
const stripePromise = loadStripe('pk_test_51IRJCSK9eOXpEB8jQfIX7nJGm8jrshmJJ0mISdUCUAYbjT4lV9hZLxvCfclftnED2Q7rgLz7KVeUWEDR0vhfCawY00r9aDXSb8');

// console.log(process.env.PUBLISHABLE_KEY)

const PaymentModal = ({bookingID, amount}) => {
    const [status, setStatus] = useState("ready");

    if (status === "success") {
        return <div> <p>Payment Successfully Processed!</p>
                     <Button href="/whatsOn" color="secondary">Back to Listings</Button></div>;
    }
    return (
        <div className="container">



            <Elements stripe={stripePromise}>
                <CheckoutForm success={() => {
                    setStatus("success");
                }} bookingID={bookingID} amount ={amount}/>
            </Elements>

        </div>
    )

}

export default PaymentModal;