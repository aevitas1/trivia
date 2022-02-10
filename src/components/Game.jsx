import { useContext } from "react";
import TriviaContext from "../data/TriviaContext";
import Questions from "./questions/Questions";
import Answers from "./questions/Answers";
import TimerBar from "./questions/TimerBar";
import { Col, Spinner } from "react-bootstrap";

function Game() {
  const { questions, loading, parameters, questionNum, score } =
    useContext(TriviaContext);
  if (questions.length > 0) {
    return loading ? (
      <>
        <Col className="d-flex justify-content-center flex-column align-items-center align-content-center py-3">
          <h1 className="text-white text-center py-3">Loading...</h1>
          <Spinner animation="border" role="status" variant="light"></Spinner>
        </Col>
      </>
    ) : questionNum === Number(parameters.amount) ? (
      <div className="text-center text-white py-5">
        <h1>Game Ended</h1>
        <h3>Your score is {score}</h3>
      </div>
    ) : (
      <>
        <TimerBar />
        <Questions />
        <Answers />
      </>
    );
  } else {
    return null;
  }
}

export default Game;
