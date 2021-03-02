import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
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
                  <a href="#">Film Classification</a>
                </MDBCol>
                <MDBCol>
                  <a href="#!">Socials</a>
                </MDBCol>
                <MDBCol>
                  <a href="#!">About Us</a>
                </MDBCol>
                <MDBCol>
                  <a href="#!">Contact Us</a>
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