import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import { useGlobalContext } from '../Context/StateContext';
import Dropdown from './Dropdown.jsx';

function Header() {

  const { setMenu, Menu } = useGlobalContext();

  return (
    <div id="nav-container">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <a>
              <img id="logo" src="/src/assests/lodhalogo.svg" alt="logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link id="Menu" onClick={() => { setMenu(!Menu) }}>Menu</Nav.Link>
              <Nav.Link id="User" href="/User"> Login</Nav.Link>
              <Nav.Link id="register" href="/Register"> Sign Up</Nav.Link>
              {/*<Nav.Link id="Admin" href="/Admin">Admin Login</Nav.Link>
              <Nav.Link id="itsupport" href="/ItSupport">IT-Support Login</Nav.Link>*/}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {Menu && <Dropdown />}
    </div>
  );
}

export default Header;