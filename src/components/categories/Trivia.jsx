import { useContext } from "react";
import axios from "axios";
import { Button, Row, Col } from "react-bootstrap";
import Questions from "../questions/Questions";
import { EndpointURL } from "../../data/EndpointURL";
import { Link } from "react-router-dom";
import TriviaContext from "../../data/TriviaContext";
import TimeBarReducer, { ACTIONS } from "../questions/TimeBarReducer";

function Trivia({ parameters, showFilters }) {
  const { state, dispatch } = TimeBarReducer();
  const startTimer = () => dispatch({ type: ACTIONS.START });
  const {
    setQuestionNum,
    isLoading,
    setQuestions,
    setRunning,
    setProgress,
    setScore,
  } = useContext(TriviaContext);

  console.log(state.isRunning);
  const FetchQuestions = () => {
    const endpoint = EndpointURL({ parameters });
    isLoading(true);
    axios.get(`${endpoint}`).then((res) => {
      const shuffledAnswers = res.data.results.map((question) => ({
        ...question,
        answers: [question.correct_answer, ...question.incorrect_answers].sort(
          () => Math.random() - 0.5
        ),
      }));
      setQuestions(shuffledAnswers);
      setQuestionNum(0);
      setScore(0);
      showFilters(false);
      setRunning(true);
      setProgress(100);
      isLoading(false);
      startTimer();
    });
  };

  return (
    <div className="d-flex justify-content-center">
      <Col className="d-flex flex-column justify-content-center align-items-center align-content-center">
        <Row>
          <Button
            variant="danger"
            onClick={() => FetchQuestions()}
            className="m-3"
            style={{ width: "200px" }}
          >
            Get Questions
          </Button>
        </Row>
      </Col>
    </div>
  );
}

export default Trivia;
