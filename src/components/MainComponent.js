import React, { useState } from "react";
import { Container, Row, Col, Button, Tooltip } from "reactstrap";

const Main = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <Container>
      <Row>
        <Col>
          <h5>-welcome, I'm</h5>
          <h2>Isaiah Thomas</h2>

          <h3>I'm a full-stack software engineer from the Bay Area (CA)</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            I love working with front-end code and designing user interfaces.
            I'm a hard worker that is always open to learn something new.
          </p>
          <p>
            <strong>Notable Skills:</strong> Vanilla JS | Node.js | discord.js |
            react.js | react native | json | c | objective-c | swift/swiftui |
            html/css/sass | mongodb | aws | photoshop | and more!
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <Button id="git-button" outline color="secondary">
            Get in Touch
          </Button>{" "}
          <Tooltip
            placement="bottom"
            isOpen={tooltipOpen}
            target="git-button"
            toggle={toggle}
          >
            Shoot me an email
          </Tooltip>
        </Col>
        <Col xs="6">
          <Button id="resume-button" outline color="info">
            Grab my Resume
          </Button>{" "}
          <Tooltip
            placement="bottom"
            isOpen={tooltipOpen}
            target="resume-button"
            toggle={toggle}
          >
            Shoot me an email
          </Tooltip>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
