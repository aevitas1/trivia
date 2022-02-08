import { useContext } from "react";
import axios from "axios";
import { Button, Row, Col } from "react-bootstrap";
import { EndpointURL } from "../../data/EndpointURL";
import TriviaContext from "../../data/TriviaContext";

function Trivia() {
  const {
    parameters,
    showFilters,
    setQuestionNum,
    isLoading,
    setQuestions,
    setScore,
    resetTimer,
  } = useContext(TriviaContext);

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
      isLoading(false);
      resetTimer();
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
