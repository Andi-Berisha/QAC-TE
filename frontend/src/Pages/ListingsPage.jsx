'use strict';

import { useState } from 'react'
// import CardFront from './CardFront';
// import CardBack from './CardBack';
import films from '../Resources/films.json';
import { Button, Form, Input, Row, Col, Badge } from 'reactstrap';
import { Link, } from 'react-router-dom';

// import {
//     Card, CardImg, CardText, CardBody, CardDeck,
//     CardTitle, CardSubtitle, Button
// } from 'reactstrap';

const Listings = () => {

    const [query, setQuery] = useState(``);

    const handleQuery = e => {
        // console.log(e.target.value);
        setQuery(e.target.value);
    }

    return (
        <>

            <div className="container" style={{ marginTop: '20px' }}>
                <Form>
                    <Row form>
                        <Col md={4}>
                            <Input placeholder="Search movie title" type="text" onChange={event => setQuery(event.target.value)} />
                        </Col>
                        <Col md={8}>
                            <Button type="submit" >Search</Button>
                        </Col>
                    </Row>
                </Form>
                <hr style={{ backgroundColor: 'gray', marginTop: '30px' }} />


                {films.filter((val) => {
                    if (query == "") {
                        return val
                    } else if (val.Title.toLowerCase().includes(query.toLowerCase())) {
                        return val
                    }


                }).map((movie) => (
                    <>
                        <div class="media" style={{ margin: '50px' }}>
                            <img width="200px" src={movie.Poster} class="align-self-center mr-3" alt="..." />
                            <div class="media-body" style={{ color: 'white' }}>

                                <h4 class="mt-0">
                                    {movie.Title}
                                    <Badge color="warning" pill style={{ marginLeft: '15px' }}>
                                        <Link to="/filmClassification" style={{ color: 'black' }}>{movie.Rating}</Link>
                                    </Badge>
                                </h4>

                                <p><em>{movie.Summary}</em></p>
                                <p><small>Actors: {movie.Actors}</small></p>
                                <p><small>Directors: {movie.Directors}</small></p>

                                <Button >
                                    <Link to={{ pathname: `/bookings/${movie.Title}` }} style={{ color: 'white' }}>Book Now</Link>
                                </Button>

                            </div>
                        </div>
                        <hr style={{ backgroundColor: 'gray' }} />
                    </>

                ))}

                {/* <ReactCardFlip
                isFlipped={this.state.isFlipped}
                flipDirection="horizontal">
                <CardFront
                    movie={this.props.movie}
                    frontKey={this.props.movie.id}
                    handleClick={this.handleClick} />
                <CardBack
                    movie={this.props.movie}
                    backKey={this.props.movie.id}
                    handleClick={this.handleClick} />
            </ReactCardFlip> */}
            </div>
        </>
    )
}

export default Listings;