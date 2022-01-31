import { useContext } from "react";
import he from "he";
import { Row, Col, Spinner } from "react-bootstrap";
import TriviaContext from "../../data/TriviaContext";
import TimerBar from "./TimerBar";

function Questions({ parameters }) {
  const { loading, questions, questionNum, progress, score } =
    useContext(TriviaContext);

  if (questions.length > 0) {
    return loading ? (
      <>
        {" "}
        <Col className="d-flex justify-content-center flex-column align-items-center align-content-center py-3">
          <h1 className="text-white text-center py-3">Loading...</h1>
          <Spinner animation="border" role="status" variant="light"></Spinner>
        </Col>
      </>
    ) : questionNum === parameters.amount ? (
      <>
        <Col className="d-flex justify-content-center align-items-center align-content-center flex-column text-white">
          <h2 className="p-5">Game Ended</h2>
          <h4>Your score is {score}</h4>
        </Col>
      </>
    ) : (
      <>
        <Row className="d-flex justify-content-center pt-3">
          <TimerBar />
        </Row>
        <p
          className="pb-2 text-white h3 d-flex justify-content-center align-items-center"
          style={{ height: "220px" }}
        >
          {he.decode(`${questions[`${questionNum}`].question}`)}
        </p>
        {progress < 0 ? <h3 className="text-white">Too late...</h3> : ""}
      </>
    );
  } else {
    return null;
  }
}

export default Questions;
