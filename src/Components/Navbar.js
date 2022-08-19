import React, {useState} from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Projects from '../Pages/Projects'
import Service from '../Pages/Service'
import '../App.css'
import {GiHamburgerMenu} from 'react-icons/gi'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  

const Navbar = () => {
    const [showLink, setShowLink] = useState(false)

  return (
    <Router>
        <div className='flex float-right Navy'>
        
        <ul className='flex justify-end linky' id={showLink ? "hidden" : " " }>
            <li className='mx-8'>
                <Link to={'/'}>Home</Link>
            </li>
            <li className='mx-8'>
                <Link to={'/About'}>About Me</Link>
            </li>
            <li className='mx-8'>
                <Link to={'/Service'}>Srvices</Link>
            </li>
            <li className='mx-8'>
                <Link to={'/Projects'}>Projects</Link>
            </li>
            <li className='mx-8'>
                <Link to={'/Contact'}>Contact Me</Link>
            </li>
        </ul>
        < GiHamburgerMenu className='ham' onClick={() => setShowLink(!showLink)} />
        </div>
      
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/About" element={<About />} />
            <Route  path="/Service" element={<Service />} />
            <Route  path="/Projects" element={<Projects />} />
            <Route  path="/Contact" element={<Contact />} />
        </Routes>
    </Router>
  )
}

export default Navbar