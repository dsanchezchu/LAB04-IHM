import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import styles from '../styles.css';
const Header = () => {
  return (
    <header className="navbar navbar-expand-lg color-primario">
      <div className="container-fluid">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="text-light">
              Cotiza tu PC Ya!!
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="d-flex align-items-center">
                <Link className="text-light text-decoration-none" to="/">
                  Inicio
                </Link>
                <Nav.Link href="#link" className="text-light">
                  Link
                </Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
