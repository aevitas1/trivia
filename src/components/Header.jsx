import Image from "react-bootstrap/Image";
import TriviaLogo from "../images/trivia.png";
import { Row, Col } from "react-bootstrap";

function Header() {
  return (
    <Row className="justify-content-center pt-5 pb-3">
      <Col className="img_container">
        <Image src={TriviaLogo} className="pb-3 img-max" />
        <p className="font-weight-bold">
          Powered by{" "}
          <a
            style={{ textDecoration: "underline" }}
            rel="noreferrer"
            target="_blank"
            href="https://opentdb.com/"
          >
            Open Trivia DB
          </a>
        </p>
      </Col>
    </Row>
  );
}

export default Header;
