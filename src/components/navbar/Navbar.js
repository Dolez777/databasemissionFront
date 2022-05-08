import React, { Component} from "react";
import {Navbar,Nav,NavDropdown,Container, Form, Button} from 'react-bootstrap';

export default class NavbarComp extends Component {
    render () {
        return (
          <div>
            <Navbar bg="" expand="lg">
              <Container>
                <Navbar.Brand href="#home">Peli tietokanta sivu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link  href="/">Etusivu</Nav.Link>
                    <Nav.Link  href="/src/pages/AdminPage.jsx">Admin</Nav.Link>
                    <Nav.Link  href="/src/pages/login.jsx">Login</Nav.Link>
                    <NavDropdown title="Kategoriat" 
                    id="basic-nav-dropdown">
                     
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
  
                  </Nav>
                  
                </Navbar.Collapse>
                
              </Container>
              
            </Navbar>
            
          </div>
          
        );
    }
}
