import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" className="mb-4" style={{ height: "3.75 rem" }}>
      <Container>
        <h2>
          <Link to="/" className="link-light text-decoration-none">
            {" "}
            ChatApp{" "}
          </Link>
        </h2>
        <span className="text-warning"> Logged in as Melone</span>
        <Nav>
          <Stack direction="horizontal">
            <Link to="/login" className="link-light text-decoration-none mx-4">
              Login
            </Link>
            <Link to="/register" className="link-light text-decoration-none mx-4">
              Register
            </Link>
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
