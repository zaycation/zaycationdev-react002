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
                  <NavLink href="/components/">Experience</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/zaycation">GitHub</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.linkedin.com/in/isaiahthomas098/">
                    LinkedIn
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Contact
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Twitter</DropdownItem>
                    <DropdownItem>Discord</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Email</DropdownItem>
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
