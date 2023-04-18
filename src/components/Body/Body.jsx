import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function Body() {
  const {bodyModal, setBodyModal} = useContext(GlobalContext);

  return (
    <div>
      <Button variant="primary" onClick={() => setBodyModal({show: (true), payload: "Body"})} style={{margin: "32px 16px"}}>
        Open modal from body
      </Button>
      <Modal show={bodyModal.show} onHide={() => setBodyModal({show: false, payload: ""})}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are reading this text in a modal opened from: {bodyModal.payload}!</Modal.Body>
      </Modal>
    </div>
  );
}
