import React from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Nav, Navbar, Container} from "react-bootstrap";

const Header = () => {
    <header>
        <Navbar bg="dark" variante="dark" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <i className="fas fa-robot"></i> ChatBot
                    </Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
};

export default Header;