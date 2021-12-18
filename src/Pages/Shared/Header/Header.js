import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import "./Header.css";
const Header = () => {
    const { user, logOut, admin, donnerStatus } = useAuth();

    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className="navTitle">
                        BGC BLOOD BANK
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 navHed"
                            style={{ maxHeight: "350px" }}
                            navbarScroll
                        >
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                            <Link to="/donnerList" className="nav-link">
                                Donner List
                            </Link>
                            <a href="#requestBlood" className="nav-link">
                                Request Blood
                            </a>

                            {/* <NavDropdown
                                title="Link"
                                id="navbarScrollingDropdown"
                            >
                                <NavDropdown.Item href="#action3">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav className="me-2 navHed">
                            {user?.email && donnerStatus !== "accepted" && (
                                <Link to="/donnerRequest" className="nav-link">
                                    Become A Donner
                                </Link>
                            )}
                            {user?.email && (
                                <Link to="/dashboard" className="nav-link">
                                    Dashboard
                                </Link>
                            )}
                            {user?.email ? (
                                <button
                                    onClick={logOut}
                                    className="btn btn-warning text-white"
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
