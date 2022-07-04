import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Crypto from '../../assets/image/crypto.png';

function NavbarPage() {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          {' '}
          <img alt="" src={Crypto} width="30" height="30" className="d-inline-block align-top me-1" />
          <span className="kTxt">K O I N</span> CRYPTO
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"></Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default NavbarPage;
