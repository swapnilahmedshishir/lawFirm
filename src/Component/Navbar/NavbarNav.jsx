// import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { FaPhone ,FaWhatsapp } from "react-icons/fa6";
import Nav from 'react-bootstrap/Nav';
import {NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './style.css'

function NavbarNav() {
  return (
   <Navbar collapseOnSelect expand="lg" className="navbar_style">
    <Container  className='navbar_container'>
    <Navbar.Brand href="/home">Logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" >
        <NavLink to="/home" className='nav_text'>Home</NavLink>
        <NavDropdown title="Practice Area" id="collapsible-nav-dropdown" className='nav_text dropdown_menu_text'>
              <NavLink className='dropdown-item' to="/pactice/Commercial Law in Bangladesh">Commercial Law in Bangladesh</NavLink>
              <NavLink className='dropdown-item' to="/pactice/Banking & Financial Matters">
              Banking & Financial Matters
              </NavLink>
              <NavLink className='dropdown-item' to="/pactice/Intellectual Property">Intellectual Property </NavLink>
              <NavLink className='dropdown-item' to="/pactice/Corporate & Foreign Direct Investments">Corporate & Foreign Direct Investments</NavLink>
              <NavLink className='dropdown-item' to="/pactice/Business Setup">Business Setup</NavLink>
              <NavLink className='dropdown-item' to="/pactice/Litigation Services-Litigations Lawyer in Bangladesh">Litigation Services – Litigations Lawyer in Bangladesh </NavLink>
              <NavLink  className='dropdown-item' to="/pactice/Property valuation in Bangladesh-Property Vetting">Property valuation in Bangladesh – Property Vetting</NavLink>
              <NavLink className='dropdown-item' to="/pactice/Telecommunication and Broadcasting Law in Bangladesh ">Telecommunication and Broadcasting Law in Bangladesh </NavLink>
              <NavLink className='dropdown-item' to="/pactice/Labor and Employment">Labor and Employment </NavLink>
              <NavLink className='dropdown-item' to="/pactice/Alternative Dispute Resolutions">Alternative Dispute Resolutions</NavLink>
              <NavLink className='dropdown-item' to="/pactice/Family Law in Bangladesh">Family Law in Bangladesh</NavLink>
              <NavLink className='dropdown-item' to="/pactice/Taxation">
              Taxation
              </NavLink>
            </NavDropdown>
            <NavLink to="/our-team" className='nav_text'>Our Team</NavLink>
            <NavLink to="/gallery" className='nav_text'>Gallery</NavLink>
            <NavLink to="/blog" className='nav_text'>Blog</NavLink>
            <NavLink to="/contact" className='nav_text'>contact</NavLink>
    </Nav>
    <Nav className=''>
            <h5 className='contact_text'><FaPhone /> 01602555023</h5>
            <h5 className='contact_text'><FaWhatsapp /> 01602555023  </h5>
          </Nav>
    </Navbar.Collapse>
    </Container>
   </Navbar>
  )
}

export default NavbarNav