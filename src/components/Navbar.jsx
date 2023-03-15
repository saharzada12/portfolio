import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarBootstrap() {
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#454042" }}>
      <Container>
        <Navbar.Brand href="#home">sahar's portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="links">
              Home
            </Nav.Link>
            <Nav.Link href="#skills" className="links">
              Skills
            </Nav.Link>
            <Nav.Link href="#work" className="links">
              Work
            </Nav.Link>
            <Nav.Link href="#contact" className="links">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBootstrap;
