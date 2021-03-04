import { useState } from 'react';
import films from '../../Resources/films.json';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Badge } from 'reactstrap';
import { Link, } from 'react-router-dom';
const BookingsPage = () => {

    const [poster, setPoster] = useState('');

    const [title, setTitle] = useState('');
    const [showingTime, setShowingTime] = useState('');
    const [bookerName, setBookgerName] = useState('');
    const [adult, setAdult] = useState(0);
    const [child, setChild] = useState(0);
    const [concession, setConcession] = useState(0);
    const [filmObj, setFilmObj] = useState(films);


    // setShowingTime(films.find(films.Showtimes, films.Showtimes, `${title}`));
    // setShowingTime(films.find(x => x.title === `${title}`).Showtimes);
    // setShowingTime(films.find(item => item.title === `${title}`));


    return (
        <div className="container">
            <Row>
                <Col > 
                <div class="media" style={{ marginLeft: '100px' }}>
                    <img src="https://i.imgur.com/sYIlBfm.jpg" height="500px" class="align-self-center" />
                    </div>
                </Col>
                <Col style={{ color: "white", backgroundColor: "grey" }}>
                    <Form>

                        <FormGroup>
                            <Label for="filmSelect">Select Film</Label>
                            <Input type="select" name="select" id="exampleSelect" onChange={({ target }) => {setTitle(target.value); 
                           setShowingTime(films.find(item => item.title === `${title}`));}}>
                                {films.map((item) =>
                                    <option obj = {item} value={item.Title}>{item.Title}</option>)}
                            </Input>
                        </FormGroup>
                        {/* <FormGroup>
                            <Label for="showingTimes">Showing Times</Label>
                            <Input type="select" name="select" id="exampleSelect" onChange={({ target }) => {setTitle(target.value); 
                            setFilmObj(target.obj); }}>
                                {films.map((item) =>
                                    <option obj = {item} value={item.Showtimes}>{item.Showtimes}</option>)}
                            </Input>

                        </FormGroup> */}
                        <FormGroup>
                            <Label for="showingTimes">Showing Times</Label>
                            {films.map((item) =>
                                <Badge color="warning" pill style={{ marginLeft: '15px' }}>
                                    <Link to="" style={{ color: 'black' }}>{item.Showtimes}</Link>
                                </Badge>)}

                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Name</Label>
                            <Input type="text" name="name" id="bookerName" placeholder="Name of Booker" onChange={({ target }) => setBookgerName(target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="seating">Seating</Label>
                            <Row>
                                <Col>Adult:</Col>
                                <Col>
                                    <Input type="select" name="select" id="adultSelect" onChange={({ target }) => setAdult(target.value)}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>Child:</Col>
                                <Col>
                                    <Input type="select" name="select" id="childSelect" onChange={({ target }) => setChild(target.value)}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>Concession:</Col>
                                <Col>
                                    <Input type="select" name="select" id="concessionSelect" onChange={({ target }) => setConcession(target.value)}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Input>
                                </Col>
                            </Row>
                            {/* <Input type="text" name="name" id="bookerName" placeholder="Name of Booker" /> */}
                            
                            
                        </FormGroup>
                        <Button color="warning" style={{width: 100}}>Pay Now</Button>
                    </Form>
                    {showingTime}
                </Col>
            </Row>
        </div>
    )

}

export default BookingsPage;