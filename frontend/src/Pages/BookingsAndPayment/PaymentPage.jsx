import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Badge } from 'reactstrap';
import { Toast, ToastBody, ToastHeader, ToastFooter } from "reactstrap";
import PUBLISHABLE_KEY from './.env'

// const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);
const stripePromise = loadStripe('pk_test_51IRJCSK9eOXpEB8jQfIX7nJGm8jrshmJJ0mISdUCUAYbjT4lV9hZLxvCfclftnED2Q7rgLz7KVeUWEDR0vhfCawY00r9aDXSb8');

// console.log(process.env.PUBLISHABLE_KEY)

const PaymentPage = () => {

    return (
        <div className="container">
            {/* <CheckoutForm 
            price={12.00}
            onSuccessfulCheckout={() => {console.log("success");}}
        
      /> */}

            <Row>
                <Col>
                    <div class="media" style={{ marginLeft: '100px' }}>
                        <img src="https://i.imgur.com/GWr9lUc.jpg" style = {{maxWidth:'100%', margin: '0 auto' }} class="align-self-center" />
                    </div>
                </Col>
                <Col style={{ color: "white", backgroundColor: "grey" }}>

                    <div className="p-6 my-2 rounded">
                        <Toast style = {{margin: '0 auto' }} >
                            <ToastHeader> Payment for X </ToastHeader>
                            <ToastBody style={{ height: "auto" }}>


                                <Elements stripe={stripePromise}>
                                    <CheckoutForm />
                                </Elements>


                            </ToastBody>

                        </Toast>
                    </div>


                </Col>
            </Row>


        </div>
    )

}

export default PaymentPage;