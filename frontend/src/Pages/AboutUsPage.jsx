'use strict';
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const AboutUs = () => {

  return (
    <>
      <div className='container'>
        <Card className="text-center" color="dark" style={{
          minHeight: '50vh', width: '50rem', margin: '0 auto', marginTop: '35px'
        }} >
          <CardBody>
            <CardTitle tag="h4" style={{ color: "white" }}><b>About Us</b></CardTitle>
            <CardText style={{ color: "white" }}><p>The team consists of four promising developers. All four sourced by QA Consulting in order to complete this project. After embarking on the training period at QA we were able to gain all the relevant skills to complete this website. The names of the team members are Adi Uraih, Andi Berisha, Celina Basa and Claes Alfonso. The individual githubs where you can view more of our work can be found below via the buttons. </p></CardText>
          </CardBody>
        </Card>

        <br />

        <div className='row'>
          <Button color="secondary" href="https://github.com/AUraihQA" style={{ margin: '45px', width: '100px', marginLeft: 'auto' }}>Adi's Github</Button>{' '}
          <Button color="secondary" href="https://github.com/AndiberishQA/" style={{ margin: '45px', width: '100px' }}>Andi's Github</Button>{' '}
          <Button color="secondary" href="https://github.com/CelinaQA" style={{ margin: '45px', width: '100px' }}>Celina's Github</Button>{' '}
          <Button color="secondary" href="https://github.com/calfonsoQA/" style={{ margin: '45px', width: '100px', marginRight: 'auto' }}>Claes's Github</Button>{' '}
        </div>

      </div>

    </>

  )
}

export default AboutUs;
