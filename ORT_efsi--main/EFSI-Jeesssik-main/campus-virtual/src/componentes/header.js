import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../img/logo.png"

const Header = () => {
    return ( 
        <Navbar bg="light">
            <img
                src={logo}
                width="135"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Navbar>
    );
}
 
export default Header;