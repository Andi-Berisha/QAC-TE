import { Button, Form, FormGroup, Input, Row, Col, Card, CardText, CardHeader, CardFooter, Toast, ToastHeader, ToastBody } from 'reactstrap';
import ContactInfo from './ContactInfo';
import EmailForm from './EmailForm';

const ContactPage = () => {
    return (
        <div className="container" style={{ marginTop: '20px' }}>
            <h3 style={{ color: 'white', marginBottom: '20px' }}>Contact Us</h3>
            <Row>
                <Col sm="4">
                    <ContactInfo />
                </Col>
                <Col sm="8">
                    <EmailForm />
                </Col>
            </Row>


        </div>
    )
}

export default ContactPage;