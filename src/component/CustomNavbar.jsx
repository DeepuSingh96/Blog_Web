import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import {NavLink as ReactLink} from 'react-router-dom';
function CustomNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar 
        color="dark"
        dark
        container="fluid"
      >
        <NavbarBrand tag={ReactLink}  to="/" >
        <img
        alt="logo"
        src="/logo512.png"
        style={{
          height: 40,
          width: 40
        }}
        
      />
        FinancialTimes
        </NavbarBrand>
        <NavbarToggler onClick={toggle}  Navbar />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            
            <NavItem>
              <NavLink tag={ReactLink}  to="/about" >About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink}  to="/login" >Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink}  to="/signup" >  Signup</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Services</DropdownItem>
                <DropdownItem>Contact Us</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>International</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;