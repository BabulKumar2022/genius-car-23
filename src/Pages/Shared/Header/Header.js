import React from 'react'
import './Header.css'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import logo from '../../../images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import { signOut } from 'firebase/auth'
const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignOut = () =>{
    signOut(auth);
    navigate('/login')
  }
  return (
    <div>
       <Navbar  collapseOnSelect expand="lg" fixed='top' className="bg-primary">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img src={logo} height="40px" alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="home#experts">Experts</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            {
              user && <>
              <Nav.Link as={Link} to="orders">Orders</Nav.Link>
              <Nav.Link as={Link} to="addService">AddService</Nav.Link>
              <Nav.Link as={Link} to="manege">Manege</Nav.Link>
              </>
            }
            {
              user ?
                <button onClick={handleSignOut}> <span className='sign-btn'>Sign out</span> </button> 

                
              :
            <Nav.Link as={Link} to="login"> Login</Nav.Link>
            }
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header