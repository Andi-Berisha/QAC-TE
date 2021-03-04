'use strict';
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const AboutUs = () => {

    return(
        <div>
      <Card className="text-center" color="secondary" style={{ minHeight: '70vh', marginLeft:145, width: '60rem'}} >
        <CardBody>
          <CardTitle tag="h4" style={{ color: "white" }}>About the Team</CardTitle>
          <CardText style={{ color: "white" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
      
      <br/>

      <Button color="secondary" href="https://github.com/AUraihQA"  style={{marginLeft:75}}>Adi Github</Button>{' '}
      <Button color="secondary" href="https://github.com/AndiberishQA/"  style={{marginLeft:170}}>Andi Github</Button>{' '}
      <Button color="secondary" href="https://github.com/CelinaQA"  style={{marginLeft:230}}>Celina Github</Button>{' '}
      <Button color="secondary" href="https://github.com/calfonsoQA/"  style={{marginLeft:250}}>Claes Github</Button>{' '}
      <br/>
    </div>

    )
}

export default AboutUs; 