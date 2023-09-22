import { Card, CardBody, Container, Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import Base from "../component/Base";
import { useState } from "react";
import { RadioButton, RadioGroup, ReversedRadioButton } from "react-radio-buttons";

const Signup = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    sex: ""
  });
  const [error, SetError] = useState({
    error: {},
    isError: false
  })

  function submitform(event) {
    event.preventDefault();
    console.log(data);
  }
  function handlechange(event, field) {
    setData((previousItem) => {
      return { ...previousItem, [field]: event.target.value }
    });

  }
  return (
    <div>
      <Base />
      <Container>


        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="info" outline="dark">
              <CardBody>
                <h3> Fill Details for Signup</h3>
                <Form onSubmit={submitform}>
                  <FormGroup>
                    <Label for="Username">
                      UserName
                    </Label>
                    <Input
                      placeholder="Enter the Name "
                      onChange={(e) => handlechange(e, 'name')}
                      name="name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">
                      Email
                    </Label>
                    <Input
                      id="Email"
                      name="email"
                      placeholder="Enter the Email Address"
                      type="email"
                      onChange={(e) => handlechange(e, 'email')}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="Password">
                      Password
                    </Label>
                    <Input
                      id="RePassword"
                      name="password"
                      placeholder="Enter Unique password"
                      type="password"
                      onChange={(e) => handlechange(e, 'password')}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">
                      Password
                    </Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="ReEnter Password"
                      type="password"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="Age">
                      Age
                    </Label>
                    <Input
                      id="Age"
                      placeholder="Age"
                      type="date"
                      onChange={(e) => handlechange(e, 'age')}
                    />
                  </FormGroup>
                  <FormGroup tag="fieldset">
                    <legend>
                      Sex
                    </legend>
                    <FormGroup check>
                      <Input
                        name="radio1"
                        type="radio"
                        value="female"
                        onChange={(e) => handlechange(e, 'sex')}
                      />
                      {' '}
                      <Label check>
                        Female
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input
                        name="radio1"
                        type="radio"
                        onChange={(e) => handlechange(e, 'sex')}
                      />
                      {' '}
                      <Label check>
                        Male
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  <div className="text-center">
                    <Button color="dark" >
                      Submit
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Signup;