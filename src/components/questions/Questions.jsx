import { useContext, useReducer } from "react";
import he from "he";
import Answer from "./Answers";
import { Row, Col, Spinner } from "react-bootstrap";
import TriviaContext from "../../data/TriviaContext";
import TimeBarReducer, { ACTIONS } from "./TimeBarReducer";
import TimerBar from "./TimerBar";

function Questions({ validateAnswer }) {
  const { loading, questions, questionNum, progress } =
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
        <Answer validateAnswer={validateAnswer} />
      </>
    );
  } else {
    return null;
  }
}

export default Questions;
