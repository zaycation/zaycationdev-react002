import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaAngleDoubleDown } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const About = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>0.1 ~ About Me</h3>
        </Col>
      </Row>

      <Row>
        <Col>
          <p>
            Thanks for visiting my site! As you may know by now, my name is
            <strong> Isaiah Thomas</strong>. I am a frontend engineer currently
            residing right outside of Oakland, CA.
          </p>

          <p>
            I love to work with design and stylizing interfaces for mobile and
            desktop devices.{" "}
            <strong>My goal is to one day build something</strong> that users
            feel as if they simply can not live without. Or in other words,
            something <strong>universally useful</strong>.
          </p>

          <p>
            After gaining some certificates at freeCodeCamp, I continued to
            further my coding journey by attending the Full-Stack development
            course at Nucamp Bootcamp. Through my time with Nucamp, I was able
            to land a position with ScoutTax (a small startup in Southern
            California) working as a FrontEnd Engineer.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <HashLink smooth to="#experience" className="hashlink-active">
            <Button color="dark" block>
              <FaAngleDoubleDown />
            </Button>
          </HashLink>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
