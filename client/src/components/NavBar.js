import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt="logo"
          src="https://cdn-images-1.medium.com/max/1200/1*Qb6G2Cm7A7DKywWC8vob4A.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        BDB Bank
      </Navbar.Brand>
      <Nav.Link href="#support" className="">
        Support
      </Nav.Link>
      <Nav.Link href="#logout">Logout</Nav.Link>
    </Navbar>
  );
};

export default NavBar;
