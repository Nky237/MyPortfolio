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
        <Navbar.Brand href="/" className='font-extrabold'>JHENNA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-center '>
    
          <Nav  >
          <Nav.Link href="/" className='text-white mt-2 '>Home</Nav.Link>
            <Nav.Link href="/About" className='text-white mt-2'>About</Nav.Link>
            <Nav.Link href="/Contact" className='text-white mt-2'>Contacts</Nav.Link>
            <Nav.Link href="/Projects" className='text-white mt-2'> Projects</Nav.Link>
            <Nav.Link href="/Service" className='text-white mt-2'>Services</Nav.Link>
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