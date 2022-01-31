import { Link } from "react-router-dom";
import { Row, Button } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Row className="py-3">
        <footer className="bottom-0 start-0 py-3 w-100">
          {" "}
          <Link to="/about">
            <div className="d-flex justify-content-center align-items-center">
              {" "}
              <Button>About</Button>
            </div>
          </Link>
        </footer>
      </Row>
    </>
  );
}

export default Footer;
