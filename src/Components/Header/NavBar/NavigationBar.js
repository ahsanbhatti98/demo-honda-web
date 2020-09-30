import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Logo from '../Logo/Logo'

function NavigationBar() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">
                <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Find Dealer</Nav.Link>
                    <Nav.Link href="#pricing">Online Booking</Nav.Link>
                    <NavDropdown title="Cars" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">CR-V</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">City</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Civic</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">More</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Find Dealer</Nav.Link>
                    <NavDropdown title="Services" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Spare Parts</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Delivery Status</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Free Airbag Inflators</NavDropdown.Item>

                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary" >Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavigationBar

