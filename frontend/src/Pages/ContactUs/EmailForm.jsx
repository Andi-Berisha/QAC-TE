import { Button, Form, FormGroup, Input, Card, CardText, CardHeader, CardFooter, Modal, ModalHeader, ModalBody, ModalFooter, FormFeedback } from 'reactstrap';
import { useState } from 'react';

const EmailForm = () => {

    const [name, setName] = useState(``);
    const [email, setEmail] = useState(``);
    const [subject, setSubject] = useState(``);
    const [body, setBody] = useState(``);

    const [validatedEmail, setValidatedEmail] = useState(true);
    const [validatedSubject, setValidatedSubject] = useState(true);

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubject = (e) => {
        setSubject(e.target.value);
    }

    const handleBody = (e) => {
        setBody(e.target.value);
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const handleSubmit = () => {
        if (validateEmail(email) & subject != '') {
            setValidatedEmail(true);
            setValidatedSubject(true);
            toggle();
        } else if (validateEmail(email) & subject == '') {
            setValidatedEmail(true);
            setValidatedSubject(false);
        } else if (!validateEmail(email) & subject != '') {
            setValidatedEmail(false);
            setValidatedSubject(true);
        } else if (!validateEmail(email) & subject == '') {
            setValidatedEmail(false);
            setValidatedSubject(false);
        }
    };

    const dismissModal = () => {
        toggle();
        setTimeout(() => {
            clearVals();
        }, 1000);
    }

    const clearVals = () => {
        setName('');
        setEmail('');
        setSubject('');
        setBody('');
    }

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <Card body>
                <CardHeader tag="h4">Email Us</CardHeader>
                <CardText style={{ marginTop: '20px' }}>Fill out the form below to contact us:</CardText>
                <Form>
                    <FormGroup>
                        <Input type="text" placeholder="Name..." onChange={handleName} value={name} />
                    </FormGroup>
                    <FormGroup>
                        <Input invalid={!validatedEmail} type="email" placeholder="Email..." onChange={handleEmail} value={email} />
                        <FormFeedback invalid>Please enter a valid email address</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Input invalid={!validatedSubject} type="text" placeholder="Subject..." onChange={handleSubject} value={subject} />
                        <FormFeedback invalid>Subject is required</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <hr />
                        <Input style={{ height: '80px' }} type="textarea" placeholder="Your message..." onChange={handleBody} value={body} />
                    </FormGroup>
                    <CardFooter style={{ height: '65px' }}>
                        <Button style={{ float: 'right' }} color='info' onClick={handleSubmit}>Send</Button>
                        <Button style={{ float: 'right', marginRight: '10px' }} onClick={clearVals}>Clear form</Button>
                    </CardFooter>
                </Form>
            </Card>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Please confirm</ModalHeader>
                <ModalBody>
                    Click confirm to send email or cancel to make changes
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                    <Button color="secondary" onClick={dismissModal} href={`mailto:someone@qa.com?subject=${subject}&body=${body}%0D%0A%0D%0ASent by ${name} from ${email}`}>Confirm</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default EmailForm;