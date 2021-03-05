'use strict';
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const AboutUs = () => {

    return(
      <>
        <div>
      <Card className="text-center"  color="secondary" style={{ minHeight: '60vh', marginLeft:210, width: '50rem'}} >
        <CardBody>
          <CardTitle tag="h4" style={{ color: "white" }}><b>About Us</b></CardTitle>
          <CardText style={{ color: "white" }}><p>The team consists of four promising developers. All four sourced by QA Consulting in order to complete this project. After embarking on the training period at QA we were able to gain all the relevant skills to complete this website. The names of the team members are Adi Uraih, Andi Berisha, Celina Basa and Claes Alfonso. The individual githubs were you can view more of our work can be found below via the buttons. </p></CardText>
        </CardBody>
      </Card>
      
   <br/>

      <Button color="secondary" href="https://github.com/AUraihQA"  style={{marginLeft:75}}>Adi's Github</Button>{' '}
      <Button color="secondary" href="https://github.com/AndiberishQA/"  style={{marginLeft:170}}>Andi's Github</Button>{' '}
      <Button color="secondary" href="https://github.com/CelinaQA"  style={{marginLeft:230}}>Celina's Github</Button>{' '}
      <Button color="secondary" href="https://github.com/calfonsoQA/"  style={{marginLeft:250}}>Claes's Github</Button>{' '}
      
    </div>

    </>

    )
}

export default AboutUs; 