import React, { Component } from "react";

import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

class ContactForm extends React.Component {
  render()  {
    return(
      <Form className="contactCard" action="mailto:CarrascoC81@Gmail.com" method="post" enctype="text/plain">
        <Row>
          <Col><img src="https://png.icons8.com/dusk/96/000000/secured-letter.png"/></Col>
          <Col>SUGGESTIONS <br /> CONCERNS <br /> HIRE ME! <br /> CONTRACT ME! </Col>
        </Row>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail2" placeholder="Your Email" />
          </Col>
        </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>Text Area</Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" placeholder="Message Box"/>
            </Col>
        </FormGroup>
        <Button outline color="success">Shoot !</Button>{' '}
      </Form>
    )
  }
}

export default ContactForm;
