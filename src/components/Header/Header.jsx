import { Navbar, Container, Button } from "react-bootstrap";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function Header() {
    const {bodyModal, setBodyModal} = useContext(GlobalContext);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Button onClick={() => setBodyModal({show: true, payload: "Header"})}>Open modal from header</Button>
        </Container>
      </Navbar>
    </div>
  );
}
