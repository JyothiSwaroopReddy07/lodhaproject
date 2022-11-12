import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './LoginNavBar.css';
import Dropdown from '../DropDown/Dropdown';
import { setSourceMapRange } from 'typescript';
import {useGlobalContext} from '/src/context/StateContext'

function LoginNavBar() {
    const [Menu, setMenu] = useState(false);
    const { setIsAuthenticated , setUser}= useGlobalContext();

    const changes = () => {
        window.localStorage.setItem("user",null);
        window.localStorage.setItem("isAuthenticated", false);
        setIsAuthenticated(false);
        setUser(null);
        let str= window.location.href;
        while(str[str.length-1]!=='/'){
            str.pop();
        }
        console.log("window", str, window.localStorage.getItem("user"), window.localStorage.getItem("isAuthenticated"));
        window.location.replace(str);
    }
    return (
        <div id="nav-container">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <a>
                            <img id="MeridianLogo" src="/src/assests/lodhalogo.svg" alt="logo" />
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto NavClass">
                        </Nav>
                        <Nav>
                            <Nav.Link id="Menu" onClick={() => { setMenu(!Menu) }}>Menu</Nav.Link>
                            <NavDropdown
                                id="LoginDropdown"
                                title="Account"
                                menuVariant="dark"
                            >
                                <div className="ProfileDiv" style={{display:"flex"}}>
                                    <img src="/src/assests/profile.png" style={{paddingLeft: "5px",height:"30px", width: "30px"}}></img>
                                    <NavDropdown.Item href="/UserProfile" className='loginDropDownMenu'>PROFILE</NavDropdown.Item>
                                </div>
                                <NavDropdown.Divider />
                                <div className='ProfileDiv' style={{display:"flex"}}>
                                <img src="/src/assests/logout.png" style={{paddingLeft: "5px",height:"30px", width: "30px"}}></img>
                                <NavDropdown.Item onClick={()=>{changes();}} className='loginDropDownMenu'>
                                    LOGOUT
                                </NavDropdown.Item>
                                </div>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {Menu && <Dropdown />}
        </div>
    );
}

export default LoginNavBar;