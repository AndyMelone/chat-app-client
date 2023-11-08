import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";

const Register = () => {
  return (
    <>
      <Form>
        <Row
          style={{
            justifyContent: "center",
            paddingTop: "10%",
            height: "100vh",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <h2> Register</h2>
              <Form.Control type="text" placeholder="name" />
              <Form.Control type="email" placeholder="Email" />
              <Form.Control type="password" placeholder="Password" />
              <Button varaiant="primary" type="submit">
                Register
              </Button>

              <Alert variant="danger">
                <p>An error occured</p>
              </Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Register;
