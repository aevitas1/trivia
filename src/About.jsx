import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <>
      <Col className="d-flex flex-column justify-content-center align-items-center py-5">
        <Row className="text-white text-center fw-light pt-3 mb-5">
          <p>Made by Stephan van der Meijden</p>
        </Row>
        <Row className="text-white text-center fw-light pt-3 mb-5">
          <Col>
            <p className="pb-2">Portfolio</p>
            <a
              rel="noreferrer"
              href="https://www.vandermeijden.design"
              target="_blank"
              className="h1"
            >
              <CgWebsite className="scaled" />
            </a>
          </Col>
          <Col>
            <p className="pb-2">Linkedin</p>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/stephan-vd-m/"
              target="_blank"
              className="h1"
            >
              <FaLinkedin className="scaled" />
            </a>
          </Col>
          <Col>
            <p className="pb-2">Github</p>
            <a
              rel="noreferrer"
              href="https://github.com/aevitas1"
              target="_blank"
              className="h1"
            >
              <FaGithubSquare className="scaled" />
            </a>
          </Col>
        </Row>
        <Row className="pt-3">
          <Link to="/">
            <Button>Back</Button>
          </Link>
        </Row>
      </Col>
    </>
  );
}

export default About;
