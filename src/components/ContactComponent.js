import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const DirectBtns = () => {
  return (
    <div className="direct-buttons">
      <Button
        outline
        color="dark"
        size="lg"
        block
        onClick={() => window.open("tel:773-420-8593", "_blank")}
      >
        <FaPhone />
      </Button>
      <Button
        outline
        color="dark"
        size="lg"
        block
        onClick={() =>
          window.open(
            "mailto:isaiahthomas098@gmail.com?subject=Inquiry from zaycation.dev site",
            "_blank"
          )
        }
      >
        <FaMailBulk />
      </Button>
    </div>
  );
};

const SocialBtns = () => {
  return (
    <div className="social-buttons">
      <Button
        outline
        color="dark"
        block
        size="lg"
        onClick={() => window.open("https://github.com/zaycation", "_blank")}
      >
        <FaGithub />
      </Button>
      <Button
        outline
        color="dark"
        block
        size="lg"
        onClick={() =>
          window.open("https://www.linkedin.com/in/isaiahthomas098/", "_blank")
        }
      >
        <FaLinkedin />
      </Button>
      <Button
        outline
        color="dark"
        block
        size="lg"
        onClick={() =>
          window.open("https://twitter.com/zaycationdev", "_blank")
        }
      >
        <FaTwitter />
      </Button>
      <Button
        outline
        color="dark"
        block
        size="lg"
        onClick={() => window.open("https://discord.gg/jVvcaU", "_blank")}
      >
        <FaDiscord />
      </Button>
    </div>
  );
};

const Contact = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3>0.5 ~ Contact</h3>
          </Col>
        </Row>

        <Row>
          <Col>
            <h5>Direct</h5>
            <p>
              Click one of the following buttons to either write me a quick
              email or give me a phone call (shooting a text may prompt a
              quicker response)
            </p>
            <DirectBtns />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h5>Social Media</h5>
            <p>
              Click one of the following buttons to view my corresponding social
              media pages
            </p>
            <SocialBtns />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <HashLink smooth to="#main" className="hashlink-active">
              <Button color="dark" block>
                <FaArrowCircleUp />
              </Button>
            </HashLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
