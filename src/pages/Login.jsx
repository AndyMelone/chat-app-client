import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";

const Login = () => {
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
              <h2> Login</h2>
              <Form.Control type="email" placeholder="Email" />
              <Form.Control type="password" placeholder="Password" />
              <Button varaiant="primary" type="submit">
                Login
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

export default Login;
