import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="">
      <Navbar.Brand as={Link} to="/">
        <h5>Mern App</h5>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/users">
          <h5>Users</h5>
        </Nav.Link>
        <Nav.Link as={Link} to="/register">
          Register
        </Nav.Link>
        <Nav.Link as={Link} to="/posts">
         Posts
        </Nav.Link>
        <Nav.Link as={Link} to="/addpost">
         New Post
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
