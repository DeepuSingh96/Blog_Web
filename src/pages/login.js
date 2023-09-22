import { Button, Card, CardBody, Col, Container, Form, Row,Label,FormGroup,Input } from "reactstrap";
import Base from "../component/Base";

const Login = () => {
    return (
        <div>
            <Base />
            <Container>
                <Row>
                    <Col sm={{offset:3,size:6}}>
                        <Card>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Email
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="email"
                                            placeholder="Enter the Email Address"
                                            type="email"
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
                                        />
                                    </FormGroup>
                                    <div className="text-center">
                                    <Button color="dark" >Submit</Button>
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

export default Login;