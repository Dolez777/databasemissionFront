import React, { Component} from "react";
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';

export default class NavbarComp extends Component {
    render () {
        return (
          <div>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home">Hieno pelisivu!!!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Pelit</Nav.Link>
                    <Nav.Link href="#link">Genret</Nav.Link>
                    <NavDropdown title="Kategoriat" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
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
