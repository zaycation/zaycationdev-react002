/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  CardText,
  CardHeader,
  CardBody,
  CardGroup,
} from "reactstrap";
import GitHubCalendar from "react-github-calendar";
import { FaAngleDoubleDown } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const PortfolioCards = () => {
  return (
    <div>
      <CardGroup>
        <Card inverse color="dark">
          <CardHeader>
            <strong>Hades Discord Bot</strong>
          </CardHeader>
          <CardBody>
            <CardTitle className="card-subheading">
              Written in JavaScript (discord.js)
            </CardTitle>
            <CardText className="card-text">
              Hades [Ἁιδης] is a darknet and crypto bot. This bot handles basic
              moderation tasks within a server with additional commands coming
              very soon!
            </CardText>
            <Button>View Source</Button>
          </CardBody>
        </Card>
        <Card inverse color="secondary">
          <CardHeader>
            <strong>Fancy Text Maker</strong>
          </CardHeader>
          <CardBody>
            <CardTitle className="card-subheading">
              Written in Swift/SwiftUI
            </CardTitle>
            <CardText className="card-text">
              Fancy Text Maker is a very simple swift app that allows users to
              create custom text with unique font and color options!
            </CardText>
            <Button color="dark">View Source</Button>
          </CardBody>
        </Card>
        <Card inverse color="dark">
          <CardHeader>
            <strong>GTA Player 005</strong>
          </CardHeader>
          <CardBody>
            <CardTitle className="card-subheading">
              Written in Swift/SwiftUI
            </CardTitle>
            <CardText className="card-text">
              GTA Player is an awesome application that allows users to stream
              any GTA Radio station in real time directly from their phones.
            </CardText>
            <Button>View Source</Button>
          </CardBody>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card inverse color="secondary">
          <CardHeader>
            <strong>BlendedStyles UI Mockup</strong>
          </CardHeader>
          <CardBody>
            <CardTitle className="card-subheading">
              Written in HTML/CSS (Bootstrap)
            </CardTitle>
            <CardText className="card-text">
              Simple UI Mockup using Bootstrap for my local black-owned
              barber-shop. Inspired by greatness and beautifully built based on
              other popular websites.
            </CardText>
            <Button color="dark">View Source</Button>
          </CardBody>
        </Card>
        <Card inverse color="dark">
          <CardHeader>
            <strong>AptHunter v0.0.3</strong>
          </CardHeader>
          <CardBody>
            <CardTitle className="card-subheading">
              Written in React Native (JavaScript)
            </CardTitle>
            <CardText className="card-text">
              AptHunter is an elegantly designed mobile app that helps users
              find local housing for rent/lease/etc. This app has not been
              published just yet.
            </CardText>
            <Button color="secondary">View Source</Button>
          </CardBody>
        </Card>
        <Card inverse color="secondary">
          <CardHeader>
            <strong>Hades Lander v0.0.2</strong>
          </CardHeader>
          <CardBody>
            <CardTitle className="card-subheading">
              Written in React (JavaScript)
            </CardTitle>
            <CardText className="card-text">
              Simple landing page for Hades Discord Bot users. Additional
              control panel functionality coming extremely soon.
            </CardText>
            <Button color="dark">View Source</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
};

const Portfolio = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3>0.3 ~ Portfolio</h3>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h5>Why should you hire me?</h5>
            <p>
              You should hire me as your engineer because not only do I have a
              phenomenal work ethic, but I am often willing to go above and
              beyond to get any task done. Because I am human, I do not know
              everything. With that being said, nothing will stop me from
              extensive research and doing whatever it takes to solve any
              problem that presents itself.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h5>Github Highlights</h5>
            <div>
              <GitHubCalendar username="zaycation" />
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <h5>Featured Projects</h5>
            <p>
              All projects shown below are open-source. Please
              <a href="https://discord.gg/jVvcaU" target="_blank">
                {" "}
                join our discord server{" "}
              </a>
              if you are interested in making contributions or would like to add
              any suggestions/feedback.
            </p>
            <PortfolioCards />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <HashLink smooth to="#contact" className="hashlink-active">
              <Button color="dark" block>
                <FaAngleDoubleDown />
              </Button>
            </HashLink>
          </Col>
        </Row>
      </Container>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Portfolio;
