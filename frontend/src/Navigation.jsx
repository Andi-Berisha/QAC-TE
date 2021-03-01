'use strict';
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { Link, } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Container, Row, Col } from 'reactstrap';


const Navigation = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
        <div className="container">

            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">QAC</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Link to="/whatsOn" style={{ color: "white" }}>What's On</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/screens" style={{ color: "white" }}>Screens</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/discussionBoard" style={{ color: "white" }}>Discussion Board</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/openingTimes" style={{ color: "white" }}>Opening Times</Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            <div className="container">
    <MDBFooter color="blue" className="font-small pt-4 mt-4" >
      <MDBContainer fluid className="text-center text-md-left" fixed="bottom">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>

    </div>

            {/* <Container>
                <Row fixed="bottom">
                    <Col>
                    Film classification system
                    </Col>
                    <Col>
                    Socials
                    </Col>
                    <Col>
                    About us
                    </Col>
                    <Col>
                    Contact us
                    </Col>
                </Row>
                </Container>  */}

            </div>
            
            {/* <div className= "container" id="footer">

            <Navbar fixed="bottom" color="dark" dark expand="md" style={{ textAlign: "center" }}>
                <NavbarBrand href="/"></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Link to="/whatsOn" style={{ color: "white" }}></Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/screens" style={{ color: "white" }}></Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/discussionBoard" style={{ color: "white" }}>Film Classification System</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/openingTimes" style={{ color: "white" }}></Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/openingTimes" style={{ color: "white" }}>Socials</Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar> */}

            {/* </div>  */}

            </>        
      )
    }


export default Navigation;