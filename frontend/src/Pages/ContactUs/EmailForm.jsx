import { Button, Form, FormGroup, Input, Card, CardText, CardHeader, CardFooter } from 'reactstrap';


const EmailForm = () => {

    return (
        <Card body>
            <CardHeader tag="h4">Email Us</CardHeader>
            <CardText style={{ marginTop: '20px' }}>Fill out the form below to contact us:</CardText>
            <Form>
                <FormGroup>
                    <Input type="text" placeholder="Name..." />
                </FormGroup>
                <FormGroup>
                    <Input type="email" placeholder="Email..." />
                </FormGroup>
                <FormGroup>
                    <Input type="text" placeholder="Subject..." />
                </FormGroup>
                <FormGroup>
                    <hr />
                    <Input style={{ height: '80px' }} type="textarea" placeholder="Your message..." />
                </FormGroup>
                <CardFooter style={{ height: '65px' }}><Button style={{ float: 'right' }}> <a href="mailto:cbasa@qa.com" style={{ color: 'white' }}>Submit</a> </Button></CardFooter>

            </Form>
        </Card>
    )
}

export default EmailForm;