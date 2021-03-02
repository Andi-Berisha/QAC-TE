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


const Navigation = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
        

            <Navbar color="" dark expand="md">
            <div className="container">
                <NavbarBrand href="/" ><img src="https://i.imgur.com/ZNczDfU.png" height='50px' width='83px' /></NavbarBrand>
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
                </div>
            </Navbar>

           

            
            

            </>        
      )
    }


export default Navigation;