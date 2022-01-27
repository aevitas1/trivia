import { Row, Col } from "react-bootstrap";

function Header() {
  return (
    <Row className="justify-content-center pt-5 pb-3">
      <Col className="img_container">
        <Row className="d-flex justify-content-center pb-2">
          <p
            className="bg-danger rounded-circle text-center d-flex justify-content-center align-items-center h2 mx-1"
            style={{ width: "3rem", height: "3rem" }}
          >
            Q
          </p>

          <p
            className="bg-white rounded-circle text-center d-flex justify-content-center align-items-center h2 mx-1"
            style={{ width: "3rem", height: "3rem" }}
          >
            U
          </p>

          <p
            className="bg-warning rounded-circle text-center d-flex justify-content-center align-items-center h2 mx-1"
            style={{ width: "3rem", height: "3rem" }}
          >
            I
          </p>

          <p
            className="bg-dark text-white rounded-circle text-center d-flex justify-content-center align-items-center h2 mx-1"
            style={{ width: "3rem", height: "3rem" }}
          >
            Z
          </p>

          <p
            className="bg-success rounded-circle text-center d-flex justify-content-center align-items-center h2 mx-1"
            style={{ width: "3rem", height: "3rem" }}
          >
            Z
          </p>
        </Row>
        <p className="fw-normal py-2 text-white">
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
