import { useState } from 'react';
import films from '../../Resources/films.json';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Badge,  Modal, ModalHeader, ModalBody, ModalFooter, FormFeedback  } from 'reactstrap';
import { Link, } from 'react-router-dom';
import { DB_URL, BOOKINGS_URL } from "../../Resources/CONSTS.json";
import axios from "axios";
import PaymentModal from './PaymentModal';
const BookingsPage = (booknow) => {

    const [poster, setPoster] = useState('');

    const [title, setTitle] = useState('Avengers: Endgame');
    const [showingTime, setShowingTime] = useState('');
    const [bookerName, setBookgerName] = useState('');
    const [adult, setAdult] = useState(0);
    const [child, setChild] = useState(0);
    const [concession, setConcession] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [bookingID, setBookingID] = useState('');
    const [filmObj, setFilmObj] = useState(films);
    const [filmIndividual, setfilmIndividual] = useState(films.find(item => item.Title === title));
    
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const dismissModal = () => {
        toggle();
        setTimeout(() => {
            
        }, 1000);
    }


    // setShowingTime(films.find(films.Showtimes, films.Showtimes, `${title}`));
    // setShowingTime(films.find(x => x.title === `${title}`).Showtimes);
    // setShowingTime(films.find(item => item.title === `${title}`));

    // setShowingTimeList(films.find(item => item.id === 1));

    // setShowingTimeList(films.find(item => item.Title === title));

    // console.log(filmIndividual);
    
    const totalPriceCalc = (adult, child, concession) => {
        let totalAdult = 7.2*adult;
        let totalChild = 6.5*child;
        let totalConcession = 6.5*concession;
        setTotalPrice(totalAdult+totalChild+totalConcession);
        return(totalPrice);

    }

    const setPrice = () =>{
        setTotalPrice(7.2*adult+6.5*child+6.5*concession);
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
                        <img src={filmIndividual.Poster} height="500px" class="align-self-center" />
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
                            <Input type="select" name="select" id="exampleSelect" onChange={({ target }) => { setShowingTime(target.value);
                            console.log(`showing time selected: ${showingTime}`); }}>
                                {filmIndividual.Showtimes.map((item) =>
                                    <option value={item}>{item}</option>)}
                                
                            </Input>

                        </FormGroup>
                        {/* <FormGroup>
                            <Label for="showingTimes">Showing Times</Label>
                            <br />
                         
                            {filmIndividual.Showtimes.map((item) =>
                                // <Badge color="warning" pill style={{ marginLeft: '15px' }} onclick="myFunction()">
                                //     <Link to="" style={{ color: 'black' }}>{item}</Link> 
                                // </Badge>)}
                                <Button color="warning" pill
                                    style={{ marginLeft: '15px', color: 'black' }}
                                    value={item}
                                    onClick={({ target }) => {
                                        // target.preventDefault();
                                        setShowingTime(target.value);
                                        { console.log(`showing time clicked: ${showingTime}`) }
                                    }}>
                                    {item}

                                </Button>)}
                          
                        </FormGroup> */}
                        <FormGroup>
                            <Label for="exampleEmail">Name</Label>
                            <Input type="text" name="name" id="bookerName" placeholder="Name of Booker" onChange={({ target }) => setBookgerName(target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="seating">Seating</Label>
                            <Row>
                                <Col>Adult: £7.20</Col>
                                <Col>
                                    <Input type="select" name="select" id="adultSelect" onChange={({ target }) => {setAdult(target.value);
                                    
                                    }} onBlur = { setPrice}>
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
                                    <Input type="select" name="select" id="childSelect" onChange={({ target }) => {setChild(target.value);
                                    
                                    }} onBlur = { setPrice}>
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
                                    <Input type="select" name="select" id="concessionSelect" onChange={({ target }) => {setConcession(target.value);
                                    
                                    }} onBlur = { setPrice}>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Input>
                                </Col>
                            </Row>
                            <Row>
                                {/* <Col>Total: £{(7.2*adult+6.5*child+6.5*concession).toFixed(2)}  </Col> */}
                                <Col>Total: £{(totalPrice).toFixed(2)}  </Col>
                                <Col>
                                    {/* {totalPriceCalc(adult,child,concession)} */}
                                    {/* £{(7.2*adult+7.2*child+7.2*concession).toFixed(2)} */}
                                </Col>
                            </Row>
                            


                        </FormGroup>
                        {/* <Link to={{ pathname: `/bookings/${movie.Title}` }} style={{ color: 'white' }}>Book Now</Link> */}
                        {/* <Button color="warning" style={{ width: 100 }}>Pay Now</Button> */}

                        {/* <Button type="submit" color="warning" style={{ width: 100 }}> <Link to={{ pathname: `/payment/` }} style={{ color: 'black' }}>Book Now</Link> </Button> */}
                        {/* <Button onSubmit={create} color="warning" style={{ width: 100 }}> Confirm Booking</Button> */}
                        <Button onClick={create} color="warning"> Confirm Booking</Button>
                    </Form>
                </Col>
            </Row>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Please confirm</ModalHeader>
                <ModalBody>
                {/* <p>Title: {title}</p>
                <p> Showing Time: {showingTime}</p>
                <p>  Name: {bookerName}</p>
                <p>  Adult: {adult}</p>
                <p>  Child: {child}</p>
                <p> Concession: {concession}</p>*/}
                <p> Total Price: £{totalPrice.toFixed(2)}</p> 
                <PaymentModal bookingID={bookingID} amount ={totalPrice*100}/>
                    
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Back</Button>
                </ModalFooter>
            </Modal>
        </div>
    )

}

export default BookingsPage;