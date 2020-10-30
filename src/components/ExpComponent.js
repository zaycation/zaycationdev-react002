import React, { useState } from "react";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardHeader,
  Button,
} from "reactstrap";
import classnames from "classnames";
import { FaAngleDoubleDown } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Tab1 = () => {
  return (
    <div>
      <Row>
        <Col>
          <div>
            <br />
            <Card>
              <CardBody>
                <CardTitle>
                  <strong>Nucamp Coding Bootcamp (Oakland, CA)</strong>
                </CardTitle>
                <CardText>
                  22 Week Full-Stack Engineering Course | Over 500+ Hours
                  Invested | Mentor for new cohorts
                </CardText>
                <CardText>
                  <small className="text-muted">Graduated in 2020</small>
                </CardText>
              </CardBody>
              <CardImg
                top
                width="100%"
                src="https://media-exp1.licdn.com/dms/image/C4E1BAQGPt--X3yTPTw/company-background_10000/0?e=2159024400&v=beta&t=ykDB_PWdtvMD032YSjdL64QAJR6si8rYqNbXS_hfGto"
                alt="Card image cap"
              />
            </Card>
            <br />
            <Card>
              <CardBody>
                <CardTitle>
                  <strong>freeCodeCamp (Remote Learning)</strong>
                </CardTitle>
                <CardText>
                  300+ Hours Invested | Multiple Certifications
                </CardText>
                <CardText>
                  <small className="text-muted">Completed in 2018</small>
                </CardText>
              </CardBody>

              <CardImg
                top
                width="100%"
                src="https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png"
                alt="Card image cap"
              />
            </Card>
            <br />
            <Card>
              <CardBody>
                <CardTitle>
                  <strong>James Logan High School (Union City, CA)</strong>
                </CardTitle>
                <CardText>
                  HS Diploma | 3.5 GPA | Film Club + Computer Science Club
                </CardText>
                <CardText>
                  <small className="text-muted">Graduated in 2016</small>
                </CardText>
              </CardBody>

              <CardImg
                bottom
                width="100%"
                src="https://images.squarespace-cdn.com/content/v1/51f0158fe4b08d0b403cc47e/1380750324871-7WTEWROQPSWIL0U4UNEX/ke17ZwdGBToddI8pDm48kNxFG8wi6z6dnFpBbu-d3pAUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc4lqbUw3Yqfkdb1Y5hVwFKjCZQsL_NnFg9mFCndrsVmsqpN10H6nMSLRRMzjAB6cL/PAC2-Big.jpg"
                alt="Card image cap"
              />
            </Card>
            <br />
          </div>
        </Col>
      </Row>
    </div>
  );
};

const Tab2 = () => {
  return (
    <div>
      <Row>
        <Col>
          <div>
            <br />
            <Card>
              <CardHeader>
                <strong>Scout Tax (Lancaster, CA)</strong>
              </CardHeader>
              <CardBody>
                <CardTitle>
                  <strong>Corporate Developer</strong>
                </CardTitle>
                <CardText>
                  Design for various media types including web pages, display
                  advertisements, brochures, invitations, presentations, sales
                  and marketing collateral and more. Prepare production-ready
                  artwork files, review and approve digital proofs/physical
                  samples. Coordinate with vendors on estimates, file prep, and
                  delivery as needed. Actively participate in brainstorming and
                  weekly team meetings. Maintain brand standards across design
                  projects. Assist with all branding projects as needed
                </CardText>
                <CardText>
                  <small className="text-muted">
                    Current Job (Started in 2020)
                  </small>
                </CardText>
              </CardBody>
              <CardImg
                top
                width="100%"
                src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://scouttax.com/wp-content/uploads/2020/01/Scout-Tax-Logo-Nav-dark-.png"
                alt="Card image cap"
              />
            </Card>
            <br />
            <Card>
              <CardHeader>
                <strong>CED (San Francisco, CA)</strong>
              </CardHeader>
              <CardBody>
                <CardTitle>
                  <strong>Project Manager</strong>
                </CardTitle>
                <CardText>
                  Consistently and efficiently managed millions of dollars in
                  projects daily. Constantly taking on new jobs and lines of
                  work to create profitable outcomes for the business. Ensured
                  customers remained exceptionally satisfied with all jobs.
                  Utilized unique problem-solving skills to overcome challenges
                  that occurred.
                </CardText>
                <CardText>
                  <small className="text-muted">2019 - 2020</small>
                </CardText>
              </CardBody>
              <CardImg
                top
                width="100%"
                src="https://www.unitedtranzactions.com/templates/ced/CEDMASTERnwdiv.jpg"
                alt="Card image cap"
              />
            </Card>
            <br />
            <Card>
              <CardHeader>
                <strong>Magnum Drywall (Fremont, CA)</strong>
              </CardHeader>
              <CardBody>
                <CardTitle>
                  <strong>Payroll Admin</strong>
                </CardTitle>
                <CardText>
                  Concisely managed weekly in-house payroll for approximately
                  1000 employees and processed all on-boarding documents for new
                  hires. Assisted with many other tasks within the accounting
                  department whenever necessary.
                </CardText>
                <CardText>
                  <small className="text-muted">2019</small>
                </CardText>
              </CardBody>
              <CardImg
                top
                width="100%"
                src="https://i.imgur.com/VTKCc5r.jpg"
                alt="Card image cap"
              />
            </Card>
            <br />
            <Card>
              <CardHeader>
                <strong>Chick-fil-A (Fremont, CA)</strong>
              </CardHeader>
              <CardBody>
                <CardTitle>
                  <strong>Operations Manager</strong>
                </CardTitle>
                <CardText>
                  Learned how to run an entire store front as well as conduct
                  inventory, food cost, labor reports, hire & onboard new
                  employees, and conduct weekly food safety audits. Daily, I
                  used critical thinking skills to solve workplace related
                  problems. Here, I enhanced my human relations skills as well
                  as enforced a concise ethics code throughout the workplace.
                </CardText>
                <CardText>
                  <small className="text-muted">2015 - 2019</small>
                </CardText>
              </CardBody>

              <CardImg
                bottom
                width="100%"
                src="https://softwareengineeringdaily.com/wp-content/uploads/2018/12/Chick-Fil-A.png"
                alt="Card image cap"
              />
            </Card>
            <br />
          </div>
        </Col>
      </Row>
    </div>
  );
};

const Tab3 = () => {
  return (
    <div>
      <Row>
        <Col>
          <div>
            <br />
            <Card>
              <CardHeader>More Volunteer Work</CardHeader>
              <CardBody>
                <CardText>
                  Coming very soon.... I am currently working on a few voluntary
                  projects that will be posted fairly soon.
                </CardText>
              </CardBody>
            </Card>
            <br />
            <Card>
              <CardHeader>Youth Leadership Corps Volunteer </CardHeader>
              <CardBody>
                <CardTitle>
                  <strong>Outward Bound (San Francisco, CA)</strong>
                </CardTitle>
                <CardText>
                  Lead in a youth leadership volunteer team. Once a month two of
                  our team members would plan and execute a group service
                  project around the San Francisco Bay Area. This was a great
                  experience because it helped teach us leadership skills,
                  professional emailing skills, public speaking skills, and also
                  respect and humbleness for the city we live in.
                </CardText>
                <CardText>
                  <small className="text-muted">2015-2016</small>
                </CardText>
              </CardBody>
              <CardImg
                top
                width="100%"
                src="https://allvectorlogo.com/img/2016/09/outward-bound-logo.png"
                alt="Card image cap"
              />
            </Card>
            <br />
          </div>
        </Col>
      </Row>
    </div>
  );
};

const ExpTabs = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Education
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Work History
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Voluntary Work
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <Tab1 />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <Tab2 />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <Tab3 />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

const Experience = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3>0.2 ~ Experience + Education</h3>
          </Col>
        </Row>

        <Row>
          <Col>
            <ExpTabs />
          </Col>
        </Row>

        <Row>
          <Col>
            <HashLink smooth to="#portfolio" className="hashlink-active">
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
    </div>
  );
};

export default Experience;
