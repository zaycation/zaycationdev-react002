import React from "react";
import {
  Container,
  Row,
  Col,
  CardGroup,
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  CardFooter,
  Button,
} from "reactstrap";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";

const DirectBtns = () => {
  return (
    <div className="direct-buttons">
      <Button outline color="dark" size="lg" block>
        <FaPhone />
      </Button>
      <Button outline color="dark" size="lg" block>
        <FaMailBulk />
      </Button>
    </div>
  );
};

const SocialBtns = () => {
  return (
    <div className="social-buttons">
      <Button outline color="dark" block size="lg">
        <FaGithub />
      </Button>
      <Button outline color="dark" block size="lg">
        <FaLinkedin />
      </Button>
      <Button outline color="dark" block size="lg">
        <FaTwitter />
      </Button>
      <Button outline color="dark" block size="lg">
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
      </Container>
    </div>
  );
};

export default Contact;
