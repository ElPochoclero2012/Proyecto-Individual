import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useCart } from "react-use-cart";
import { useContext } from 'react';
import { userContext } from '../provider/userContext';
import logo from './assets/logo.png';

function NavBar() {

  const user = useContext(userContext);

  const { totalItems } = useCart();

  const [filter, setFilter] = useState("")

  const logOut = (e) => {
    localStorage.clear();
    user.setUser(null);
  }

  return (
    <>
    <Navbar bg="info" expand="xl" className="Navbar">
      <Container fluid>
        <Link to="/"><Navbar.Brand><img src={logo} alt="Logo" width="30" height="30"/>La Dispute</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="SearchBar">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) =>{
                setFilter(e.target.value);
              }}
            />
            <Link to={"/Search/" + filter}><Button variant="info">Search</Button></Link>
          </Form>
            <Link to="/Cart"><Button variant="info" className="NavButton"><Badge pill bg="success">{totalItems === 0 ? <></> : totalItems}</Badge><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
          </Button></Link>

          {user.user ? (<>
            <div>Hi, {user.user.username}!</div>
            <Link to="./" onClick={logOut}><Button variant="info" className="NavButton">Log out</Button></Link></>
          ) : (
            <Link to="/Login"><Button variant="info" className="NavButton"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
            </svg>
            </Button></Link>
          )}


          <NavDropdown title="Catalogue" className="NavButton">
                <NavDropdown.Item>
                  <Link to="/Tshirt">T-shirts</Link>
                </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Sweatshirts">SweatShirts</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Hoodies">Hoodies</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Flags">Flags</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Vinyl">Vinyl</Link>
              </NavDropdown.Item>
            </NavDropdown>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar