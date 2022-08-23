import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home'
import Contact from './Pages/Contact';
import Projects from './Pages/Projects'
import Service from './Pages/Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footy from './Components/Footy'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const App = () => {
  return (
    <div>
      <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">JHENNA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contacts</Nav.Link>
            <Nav.Link href="/Projects"> Projects</Nav.Link>
            <Nav.Link href="/Service">Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Service" element={<Service />} />
        
      </Routes>
      </Router>

      <Footy />
    </div>
  )
}

export default App