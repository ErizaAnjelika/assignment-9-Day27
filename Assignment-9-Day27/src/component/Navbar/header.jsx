/* eslint-disable react/prop-types */
import './navbar.css';
// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header({ navLogo, navList, navIcon }) {
  return (
    <div>
      <Navbar
        expand="lg"
        className="fixed-top navbar-wraper shadow"
      >
        <Container>
          <Navbar.Brand>
            <div className="navbar-brand navbar-logo">
              {navLogo.map((item, index) => (
                <div
                  to="{item}"
                  key={index}
                >
                  {index === 0 ? (
                    <img
                      src={item}
                      alt={'Logo'}
                    />
                  ) : (
                    <h2>{item}</h2>
                  )}
                </div>
              ))}
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center w-100 navbar-list">
              {navList.map((item) => (
                <Nav.Link key={item}>{item}</Nav.Link>
              ))}
            </Nav>
            <Nav className="me-auto justify-content-end navbar-icon">
              <Nav.Item className="d-flex">
                {navIcon.map((item) => (
                  <Nav.Link key={item}>
                    <img
                      src={item}
                      alt={'Logo'}
                    />
                  </Nav.Link>
                ))}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
