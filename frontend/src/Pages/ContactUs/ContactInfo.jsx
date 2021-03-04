import { Row, Col, Toast, ToastHeader, ToastBody } from 'reactstrap';


const ContactInfo = () => {

    return (
        <Toast>
            <ToastHeader>
                <h4 style={{ marginTop: '5px' }}>
                    Contact Info
                </h4>
            </ToastHeader>
            <ToastBody>
                <Row>
                    <Col sm="4">
                        <p><b>Email:</b></p>
                    </Col>
                    <Col sm="8">
                        <p>someone@qa.com</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm="4">
                        <p><b>Phone:</b></p>
                    </Col>
                    <Col sm="8">
                        <p>0345 074 7829</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm="4">
                        <p><b>Address:</b></p>
                    </Col>
                    <Col sm="8">
                        <p>3rd Floor, International House, 1 St Katharine's Way, St Katharine's & Wapping, London E1W 1UN</p>
                    </Col>
                </Row>
            </ToastBody>
        </Toast>
    )
}

export default ContactInfo;