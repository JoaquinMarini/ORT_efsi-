import React from 'react';
import { Navbar} from 'react-bootstrap';
import logo from "../img/logo.png"

const Header = () => {
    return ( 
        <>
            <Navbar bg="light" className='navbar'>
                <div className="container">
                    <img
                        src={logo}
                        width="135"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                            <svg class="bi bi-person-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"
                                clip-rule="evenodd" />
                            </svg>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                            <svg class="bi bi-list" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                d="M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                                clip-rule="evenodd" />
                            </svg>
                            </a>
                        </li>
                    </ul>
                </div>           
            </Navbar>
            <br></br>
        </>
    );
}
 
export default Header;