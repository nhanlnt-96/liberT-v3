import "./Header.scss";
import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import Logo from "../../assets/imgs/logo.png";
import {headerMenu} from "../../configs";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="header">
      <Container fluid={"xxl"}>
        <Navbar.Brand href="#home" className="header-logo">
          <img src={Logo} alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="header-toggle"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto header-menu">
            {
              headerMenu.map((val, index) => (
                <Nav.Link key={index} href={val.path} className="header-menu__item">{val.label}</Nav.Link>
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;