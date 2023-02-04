import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Image from "react-bootstrap/Image";
const Header = () => {
  const { user, LogOut } = useContext(AuthContext);
  const handleLogOut = () => {
    LogOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-primary">
            Dragon News
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link to="/">All News</Nav.Link>
            <Nav.Link to="/">Pricing</Nav.Link>
            <NavDropdown title="Dropdown">
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <>
              {user?.uid ? (
                <>
                  <span className="mt-2">{user?.displayName}</span>
                  <Button
                    className="ms-2"
                    onClick={handleLogOut}
                    variant="light"
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" className="me-3">
                    <Button variant="light">LogIn</Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="light">Register</Button>
                  </Link>
                </>
              )}
            </>
            <Link to="/profile">
              {user?.photoURL ? (
                <Image
                  style={{ height: "33px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaUserCircle></FaUserCircle>
              )}
            </Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
<h1>This is Header</h1>;
