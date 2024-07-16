import React from "react";
import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const links=[
    {
        name: "Home",
        href: "./home",
    },
    {
        name: "Préstamos",
        href: "./prestamo",
    },
    {
        name: "Contacto",
        href: "./contacto",
    },
    {
        name: "Biología",
        href: "./biologia",
    },
    {
        name: "Algebra",
        href: "./algebra",
    },
    {
        name: "Historia",
        href: "./historia",
    },
    {
        name: "Algebra",
        href: "./algebra",
    },
    {
        name: "Psicología",
        href: "./psicologia",
    },
    {
        name: "Rentados",
        href: "./rentados",
    }
]

function NavBar(){
//const NavBar =() => {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><h2>Librería de la Universidad de la Internet</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Préstamos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/prestamo">En renta</NavDropdown.Item>
              <NavDropdown.Item href="/rentados">Solicitar otra vez</NavDropdown.Item>
            </NavDropdown>          
            <NavDropdown title="Categoria" id="basic-nav-dropdown">
              <NavDropdown.Item href="/algebra">Álgebra</NavDropdown.Item>
              <NavDropdown.Item href="/biologia">Biología</NavDropdown.Item>
              <NavDropdown.Item href="/historia">Historia</NavDropdown.Item>
              <NavDropdown.Item href="/psicologia">Psicología</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contacto">contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

    /*    return( 
    <div>
        {links.map((x) => (<Link to ={x.href}>{x.name}</Link>))}
    </div>
    );
*/
}

export default NavBar;
