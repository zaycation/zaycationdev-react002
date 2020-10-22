import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
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
} from "reactstrap";

const SitewideNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Row>
        <Col>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">zaycation.dev</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="//">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Experience</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Portfolio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Contact</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Socials
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>GitHub</DropdownItem>
                    <DropdownItem>LinkedIn</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Twitter</DropdownItem>
                    <DropdownItem>Discord</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default SitewideNavbar;
