'use strict';
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row
} from 'reactstrap';

const AboutUs = () => {

    return(
      <>
        <div className="container">
          <Row>
            <Col>
      <Card className="text-center"  color="secondary" style={{ minHeight: '60vh', width: '70rem'}} >
        <CardBody>
          <CardTitle tag="h4" style={{ color: "white" }}><b>About Us</b></CardTitle>
          <CardText style={{ color: "white" }}><p>The team consists of four promising developers. All four sourced by QA Consulting in order to complete this project. After embarking on the training period at QA we were able to gain all the relevant skills to complete this website. The names of the team members are Adi Uraih, Andi Berisha, Celina Basa and Claes Alfonso. The individual githubs were you can view more of our work can be found below via the buttons. </p></CardText>
        </CardBody>
      </Card>
      </Col>
      </Row>
      
   <br/>

   <Row>
      <Col>
      <Button color="secondary" href="https://github.com/AUraihQA"  >Adi's Github</Button>
      </Col>
      <Col>
      <Button color="secondary" href="https://github.com/AndiberishQA/"  >Andi's Github</Button>
      </Col>
      <Col>
      <Button color="secondary" href="https://github.com/CelinaQA"  >Celina's Github</Button>
      </Col>
      <Col>
      <Button color="secondary" href="https://github.com/calfonsoQA/"  >Claes's Github</Button>
      </Col>
      
      </Row>
    </div>

    </>

    )
}

export default AboutUs; 