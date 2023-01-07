import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from './../hooks/useAuth';

function LayoutNavbar() {
  const {user} = useAuth()
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React Router Dom</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbarLayout">
            <Link className="link__navbar" to="/">Asosiy sahifa</Link>
            <Link className="link__navbar" to="about">About</Link> 
            <Link className="link__navbar" to="blog">Blog</Link>
            <Link className="link__navbar" to="contact">Contact</Link>
            <Link className="link__navbar" to="login">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LayoutNavbar;
