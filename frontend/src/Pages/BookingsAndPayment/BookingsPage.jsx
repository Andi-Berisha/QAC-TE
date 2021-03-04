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


    return (
        <div className="container">
            <Row>
                <Col>
                    <img src="https://i.imgur.com/VmLLlbK.jpg" />
                </Col>
                <Col style={{ color: "white" }}>
                    <Form>

                        <FormGroup>
                            <Label for="filmSelect">Select Film</Label>
                            <Input type="select" name="select" id="exampleSelect" onChange={({ target }) => {setTitle(target.value); 
                            setFilmObj(target.obj)}}>
                                {films.map((item) =>
                                    <option obj = {item} value={item.Title}>{item.Title}</option>)}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="showingTimes">Showing Times</Label>
                            <Input type="select" name="select" id="exampleSelect" onChange={({ target }) => {setTitle(target.value); 
                            setFilmObj(target.obj)}}>
                                {films.map((item) =>
                                    <option obj = {item} value={item.Showtimes.Times}>{item.Showtimes.Times}</option>)}
                            </Input>

                        </FormGroup>
                        <FormGroup>
                            <Label for="showingTimes">Showing Times</Label>
                            {filmObj.map((item) =>
                                <Badge color="warning" pill style={{ marginLeft: '15px' }}>
                                    <Link to="" style={{ color: 'black' }}>{item.Showtimes}</Link>
                                </Badge>)}

                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Name</Label>
                            <Input type="text" name="name" id="bookerName" placeholder="Name of Booker" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="seating">Seating</Label>
                            <Row>
                                <Col>Adult:</Col>
                                <Col>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Input>
                                </Col>
                            </Row>
                            {/* <Input type="text" name="name" id="bookerName" placeholder="Name of Booker" /> */}
                        </FormGroup>
                    </Form>

                </Col>
            </Row>
        </div>
    )

}

export default BookingsPage;