import { useState } from 'react';
import films from '../../Resources/films.json';
import { Button, Form, FormGroup, Label, Input, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BOOKINGS_URL } from "../../Resources/CONSTS.json";
import axios from "axios";
import PaymentModal from './PaymentModal';
const BookingsPage = (booknow) => {

    const [title, setTitle] = useState('Avengers: Endgame');
    const [showingTime, setShowingTime] = useState('');
    const [bookerName, setBookgerName] = useState('');
    const [adult, setAdult] = useState(0);
    const [child, setChild] = useState(0);
    const [concession, setConcession] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [bookingID, setBookingID] = useState('');
    const [filmIndividual, setfilmIndividual] = useState(films.find(item => item.Title === title));

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const setPrice = () => {
        setTotalPrice(7.2 * adult + 6.5 * child + 6.5 * concession);
    }

    const create = (e) => {
        e.preventDefault();
        axios.post(`${BOOKINGS_URL}/create`, { title, showingTime, bookerName, adult, child, concession, totalPrice })
            .then((res) => {
                console.log(res.data);
                // console.log(res.data._id);
                setBookingID(res.data)
                toggle();

            }).catch((err) => {
                console.log(err);
            })
    }


    return (
        <div className="container" >
            <Row>
                <Col >
                    <div class="media" style={{ marginLeft: '100px' }}>
                        <img src={filmIndividual.Poster} height="500px" class="align-self-center" alt="film-poster" />
                    </div>
                </Col>
                <Col className="rounded" style={{ color: "white", backgroundColor: "grey" }}>
                    <Form onSubmit={create}>

                        <FormGroup>
                            <Label for="filmSelect">Select Film</Label>
                            <Input
                                type="select"
                                name="select"
                                id="filmSelect"
                                onChange={({ target }) => {
                                    setTitle(target.value);
                                    setfilmIndividual(films.find(item => item.Title === target.value));
                                    // console.log(target.value);
                                    // console.log(filmIndividual);
                                }}>
                                {films.map((item) =>
                                    <option obj={item} value={item.Title}>{item.Title}</option>)}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="showingTimes">Showing Times</Label>
                            <Input type="select" name="select" id="exampleSelect" onChange={({ target }) => {
                                setShowingTime(target.value);
                                console.log(`showing time selected: ${showingTime}`);
                            }}>
                                {filmIndividual.Showtimes.map((item) =>
                                    <option value={item}>{item}</option>)}

                            </Input>

                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleEmail">Name</Label>
                            <Input type="text" name="name" id="bookerName" placeholder="Name of Booker" onChange={({ target }) => setBookgerName(target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="seating">Seating</Label>
                            <Row>
                                <Col>Adult: £7.20</Col>
                                <Col>
                                    <Input type="select" name="select" id="adultSelect" onChange={({ target }) => {
                                        setAdult(target.value);

                                    }} onBlur={setPrice}>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>Child: £6.50</Col>
                                <Col>
                                    <Input type="select" name="select" id="childSelect" onChange={({ target }) => {
                                        setChild(target.value);

                                    }} onBlur={setPrice}>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>Concession: £6.50</Col>
                                <Col>
                                    <Input type="select" name="select" id="concessionSelect" onChange={({ target }) => {
                                        setConcession(target.value);

                                    }} onBlur={setPrice}>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Input>
                                </Col>
                            </Row>
                            <Row>

                                <Col>Total: £{(totalPrice).toFixed(2)}  </Col>
                                <Col>

                                </Col>
                            </Row>



                        </FormGroup>

                        <Button onClick={create} color="warning"> Confirm Booking</Button>
                    </Form>
                </Col>
            </Row>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Please confirm</ModalHeader>
                <ModalBody>
                    <p> Total Price: £{totalPrice.toFixed(2)}</p>
                    <PaymentModal bookingID={bookingID} amount={totalPrice * 100} />

                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Back</Button>
                </ModalFooter>
            </Modal>
        </div>
    )

}

export default BookingsPage;