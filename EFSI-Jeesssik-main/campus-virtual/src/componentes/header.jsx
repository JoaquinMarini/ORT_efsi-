import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../img/logo.png"

const Header = () => {
    return ( 
        <Navbar bg="light">
            <div className="container">
                <img
                    src={logo}
                    width="135"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </div>           
        </Navbar>
    );
}
 
export default Header;