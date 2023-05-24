import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand='lg' fixed='top' color='white'>
      <Container>
        <Navbar.Brand href='#home'>Two Car Studios</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>
          <Nav>
            <Nav.Link href='Home'>Home</Nav.Link>
            <Nav.Link eventKey={2} href='About'>
              About
            </Nav.Link>
            <Nav.Link eventKey={3} href='Login'>
              Login
            </Nav.Link>
            <Nav.Link eventKey={4} href='Signup'>
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
