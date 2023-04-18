import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import { Card, Button } from "react-bootstrap";

export function Footer() {
    const {bodyModal, setBodyModal} = useContext(GlobalContext);
  return (
    <div>
      <Card>
        <Card.Footer>
          <small className="text-muted">
            <Button  onClick={() => setBodyModal({show: true, payload: "Footer"})}>Open modal from footer</Button>
          </small>
        </Card.Footer>
      </Card>
    </div>
  );
}   
