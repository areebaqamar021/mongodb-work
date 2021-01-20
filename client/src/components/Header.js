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
          <h5>Register</h5>
        </Nav.Link>
        <Nav.Link as={Link} to="/posts">
         <h5>Posts</h5>
        </Nav.Link>
        <Nav.Link as={Link} to="/addpost">
         <h5>New Post</h5>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
