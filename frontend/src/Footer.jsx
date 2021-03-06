import React from "react";
import { MDBCol, MDBContainer } from "mdbreact";
import {

  Navbar

} from 'reactstrap';

const Footer = () => {
  return (
    <>
      <Navbar fixed="bottom" color="dark" dark expand="md">
        <div className="container">
          <MDBContainer fluid className="text-center ">

            <MDBCol>
              <a href="/FilmClassifications" style={{ color: "white" }}>Film Classification</a>
            </MDBCol>
            <MDBCol>
              <a href="/localAttractions" style={{ color: "white" }}>Local Attractions</a>
            </MDBCol>
            <MDBCol>
              <a href="/aboutUs" style={{ color: "white" }}>About Us</a>
            </MDBCol>
            <MDBCol>
              <a href="/contactUs" style={{ color: "white" }}>Contact Us</a>
            </MDBCol>

          </MDBContainer>
          <div className="footer-copyright text-center py-3">
          </div>
 
  

        </div>
      </Navbar>
    </>
  );
}

export default Footer;