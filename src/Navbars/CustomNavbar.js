import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.scss";
import logo from "./logo.png";
import blog from "./blog.png";
import contact from "./contact.png";
import pay from "./pay.png";

function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home" className="navbar-brand">
        <img src={logo} alt="Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="navbar-nav">
          <Nav.Link href="#contact" className="nav-link">
            <img src={contact} alt="Contact" className="icon contact-icon" />
          </Nav.Link>
          <Nav.Link href="#blog" className="nav-link">
            <img src={blog} alt="Blog" className="icon blog-icon" />
          </Nav.Link>
          <Nav.Link href="#pay" className="nav-link">
            <img src={pay} alt="Pay" className="icon pay-icon" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
