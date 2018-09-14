import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import ContactForm from './Components/ContactForm';
import Scroll from './Components/ScrollEvent';

class App extends Component {
  componentDidMount(){
    AOS.init();

  }
  render() {
    return (
      <Container fluid className="body">
        <Navbar color="dark" dark expand="md" className="sticky-top">
          <NavbarBrand href="/">CC!</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#aboutme">About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projectSection">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#skills">Sweet Stack</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/codingDCode">GitHub</NavLink>
              </NavItem>
            </Nav>
        </Navbar>

        <Row className="landingBack">
          <Col className="landingMain">Christopher <br /> Carrasco</Col>
        </Row>

        <Row id="aboutme" className="projectSection">
          <Col className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
            <Row className="box">
              <Col className="projectTitle">I'm Chris</Col>
            </Row>
            <Row>
              <Col className="project_description">
                <span style={{color: "red"}}>Full Stack-Developer</span> capable of building robust, agile, scalable applications. Background in sales so I am able to communicate with humans equally as well. <br />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row id="projectSection" className="projectSection">
          <Col className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
            <Col className="project_pg">
              <Row className="box"><Col className="projectTitle">React Native & Rails</Col></Row>
                <Col col-md-6 offset-md-1><div className="placeHolderleft" data-aos="fade-right aos-init aos-animate">
                  <img  src="data:image/png;base64,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"/>
                    </div>
                </Col>
                <Col col-md-6 offset-md-1 col-xs-6>
                  <p className="project_description">Designed from inception mobile friendly uses User Geo-location to display other users in your vicinity. After that you would be allowed to challenge other client side to a challenge. This would archive the outcome of said challenge and on users profile would conditionally render the rating. This would be visible to all.</p>
                  <a href="https://expo.io/appetize-simulator?url=https://expo.io/@ccarrasco/req-the-park-init-native">View Me!</a>
                </Col>
            </Col>
          </Col>
        </Row>

        <Row className="projectSection">
          <Col className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
            <Col className="project_pg">
              <Row className="box"><Col className="projectTitle">React & Express</Col></Row>
                <Col col-md-6 offset-md-1><i className="placeHolderRight fas fa-map-marked" data-aos="fade-up-right aos-init aos-animate"><img src="data:image/png;base64,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"/>
                  </i></Col>
                <Col col-md-6 offset-md-1 col-xs-6>
                  <p className="project_description">Here is an example of a collabrative effort excersing our git skills in order to build an application to assist users whom are soon traveling to favor and, store activities during their traveles. In this effort we utilized Google maps api in conjuction with an Express server & React client-side storing state depending on whom the user and where they choose to go</p>
                  <a href="https://github.com/CodingdCode/travel-app">View me!</a>
                </Col>
              </Col>
            </Col>
        </Row>

        <Row className="projectSection">
          <Col className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
            <Col className="project_pg">
              <Row className="box"><Col className="projectTitle">HTML & CSS</Col></Row>

              <Col col-md-6 offset-md-1><i className="placeHolderleft fas fa-map-marked" data-aos="fade-up-right aos-init aos-animate"><img src="data:image/png;base64,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" />
                </i></Col>
              <Col col-md-6 offset-md-1 col-xs-6>
                <p className="project_description">First project worked on as per the tech used. At its core the tech is solid. On display is collision-detection used as part of a classic pixelated-style race game where the user must avoid falling divs in order to rack the highest score possible within allotted time.</p>
                <a href="https://codingdcode.github.io/retro-racing/">View Me!</a>
              </Col>
            </Col>
          </Col>
        </Row>

        <Row id="skills" className="skillSets">
          <Col lg="4" md="4" sm="4" xs="12"><div className="skillIcons icons8-html-5"></div></Col>
          <Col lg="4" md="4" sm="4" xs="12"><div className="skillIcons icons8-react-native"></div></Col>
          <Col lg="4" md="4" sm="4" xs="12"><div className="skillIcons icons8-ruby-programming-language"></div></Col>
        </Row>
        <Row className="skillSets">
          <Col lg="4" md="4" sm="4" xs="12"><div className="skillIcons icons8-nodejs"></div></Col>
          <Col lg="4" md="4" sm="4" xs="12"><div className="skillIcons icons8-javascript"></div></Col>
          <Col lg="4" md="4" sm="4" xs="12"><div className="skillIcons icons8-postgresql"></div></Col>
        </Row>

        <Row id="contact" className="contactSection">
          <Col className="typewriter">
            <h5><b>Email:</b> CarrascoC81@Gmail.com <br /></h5>
            <h5><b>Phone:</b> 917.415.5637 <br /></h5>
            <h5><b>Based:</b> NYC, NY <br /></h5>
          </Col>
          <Col><ContactForm /></Col>
        </Row>

        <Container fluid className="footer">
          <Row>
            <Col xs ><a href="https://github.com/codingDCode"><div className="icons8-github"></div></a></Col>
            <Col xs ><a href="https://twitter.com/CC_is_"><div className="icons8-twitter"></div></a></Col>
            <Col xs ><a href="https://linkedin.com/in/c-carrasco"><div className="icons8-linkedin"></div></a></Col>
          </Row>
          <Row className="tradeMark">
            <Col>
              <h5>Made with &#10084;</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>&reg;Christopher Carrasco | 2018</h5>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default App;
