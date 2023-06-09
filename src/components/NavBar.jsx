import React from "react";
import styles from "../styles/NavBar.module.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../assets/logo.ico";

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink className={styles.NavLink} to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="logo" height="45" />
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink className={styles.NavLink} to="/">
                            <i className="fas fa-home"></i>Home
                        </NavLink>
                        <NavLink className={styles.NavLink} to="/signin">
                            <i className="fas fa-sign-in-alt"></i>Sign in
                        </NavLink>
                        <NavLink className={styles.NavLink} to="signup">
                            <i className="fas fa-user-plus"></i>Sign up
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
