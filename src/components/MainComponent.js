/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Tooltip,
  Collapse,
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { FaAngleDoubleDown } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const SkillsToggler = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="text-center">
      <Button color="dark" onClick={toggle} style={{ marginBottom: "1rem" }}>
        Expand for Skills
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardHeader>Notable Skills</CardHeader>
          <CardBody>
            VanillaJS | Node.js | Discord.js | React / React Native | JSON |
            C | Objective-C | Swift/SwiftUI | HTML/CSS/SASS | MongoDB | AWS | Heroku
            Photoshop | and more!
          </CardBody>
        </Card>
      </Collapse>
      <br />
    </div>
  );
};

const EmailModal = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <HashLink smooth to="#contact" className="hashlink-active-email">
        <Button outline color="secondary">
          {/* add the following to above button as param to toggle modal onClick={toggle} */}
          Get in Contact
        </Button>
      </HashLink>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Email to zaycation.dev</ModalHeader>
        <ModalBody>
          <Form>
            <Row form>
              <Col>
                <FormGroup>
                  <Label for="clientName">Name</Label>
                  <Input
                    type="name"
                    name="name"
                    id="clientName"
                    placeholder="John Doe..."
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col>
                <FormGroup>
                  <Label for="clientEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="clientEmail"
                    placeholder="youremailhere@gmail.com"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col>
                <FormGroup>
                  <Label for="clientMessage">Your Message</Label>
                  <Input
                    type="message"
                    name="message"
                    id="clientMessage"
                    placeholder="Example: Hey you're awesome keep it up!"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup check>
              <Input type="checkbox" name="check" id="subscriptionCheck" />
              <Label for="subscriptionCheck" check>
                Subscribe for seasonal project updates
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
          <Button color="success" onClick={toggle}>
            Send Email
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const Main = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <div className="text-center">
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <br />
            <h5>Welcome, I'm</h5>
            <h1>
              <strong>Isaiah Thomas</strong>
            </h1>

            <h4>A full-stack software engineer from the Bay Area, CA</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              I love working with front-end code and designing user interfaces.
              I'm a hard worker that is always open to learn something new.
            </p>
            <div>
              <SkillsToggler />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <EmailModal />
          </Col>
          <Col xs="6">
            <a
              href="https://docs.google.com/document/d/1tb_bFmMtFTfNJIjAd3Fti2o3CptmdIwY62NxJ-H9wGY/edit?usp=sharing"
              target="_blank"
              className="hashlink-active"
            >
              <Button id="resume-button" outline color="info">
                Grab My Resume
              </Button>{" "}
            </a>
            <Tooltip
              placement="bottom"
              isOpen={tooltipOpen}
              target="resume-button"
              toggle={toggle}
            >
              Download as a PDF
            </Tooltip>
          </Col>
        </Row>
        <Row>
          <Col>
            <HashLink smooth to="#about" className="hashlink-active">
              <Button color="dark">
                <FaAngleDoubleDown />
              </Button>
            </HashLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
