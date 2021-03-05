import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardHeader } from 'reactstrap';

const LocalAttractionsPage = () => {

    return (
        <div className="container" style={{ marginTop: '20px' }}>
            <h3 style={{ color: 'white', marginBottom: '20px' }}>Local Attractions</h3>
            <Row>
                <Col sm="4">
                    <Card>
                        <CardImg top width="100%" src="https://i.imgur.com/hPshmdh.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Tower of London</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">St Katharine's & Wapping, London EC3N 4AB</CardSubtitle>
                            <CardText>
                                <p> Centuries of bloody history around a medieval castle, home to Crown Jewels and iconic Beefeaters.</p>
                                <p> Offers: <i>Currently unavailable</i> </p>
                            </CardText>
                            <Button color='info' href="https://www.hrp.org.uk/tower-of-london/#gs.um7v08" target="_blank">Go to website</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card>
                        <CardImg top width="100%" src="https://i.imgur.com/7YyfA5Y.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Jack the Ripper Museum</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">12 Cable St, Aldgate, Whitechapel, London E1 8JG</CardSubtitle>
                            <CardText>
                                <p>Grisly museum on 6 floors in a Victorian house recounting stories of the 1888 East End murderer.</p>
                                <p> Offers: <i>Currently unavailable</i> </p>
                            </CardText>
                            <Button color='info' href="https://www.jacktherippermuseum.com/" target="_blank">Go to website</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card>
                        <CardImg top width="100%" src="https://i.imgur.com/rXPw5er.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Emilia's Crafted Pasta</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">C3, Ivory House St Katharine Docks, London E1W 1AT</CardSubtitle>
                            <CardText>
                                <p>Fresh, crafted pasta inspired from the artisans in small trattorias from the Emilia Romagna region in Italy.</p>
                                <p> Offers: <i>Currently unavailable</i> </p>
                            </CardText>
                            <Button color='info' href="https://www.emiliaspasta.com/" target="_blank">Go to website</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default LocalAttractionsPage;