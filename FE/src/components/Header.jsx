import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="h-200">
      <Navbar
        className="mb-auto ms-auto navbar-expand-md animate"
        data-bs-theme="dark"
        expand=""
      >
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="me-auto d-flex align-items-center"
          >
            <img src="../public/logo_small.png" height="50px" alt="" />
            <h1 className="m-0">BDoctors</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto animate">
              <Nav.Link as={NavLink} to="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/doctor/search" className="nav-link">
                Search
              </Nav.Link>
              <Nav.Link as={NavLink} to="/doctor/register" className="nav-link">
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
