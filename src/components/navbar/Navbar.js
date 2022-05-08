import React, { Component} from "react";
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';

export default class NavbarComp extends Component {
    render () {
        return (
          <div>
            <Navbar bg="" expand="lg">
              <Container>
                <Navbar.Brand href="#home">Hieno pelisivu!!!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Etusivu</Nav.Link>
                    <Nav.Link href="#link">jotain</Nav.Link>
                    <NavDropdown title="Kategoriat" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                      Kauhupelit
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                      FPS
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                      Strategiapelit
                      </NavDropdown.Item>
                      
                      <NavDropdown.Item href="#action/3.4">
                      Ajopelit
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                      Roolipelit
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                      Tappelupelit
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                      MMO
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                      Seikkailupelit
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/signup">Register</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        );
    }
}