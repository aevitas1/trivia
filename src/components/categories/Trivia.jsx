import { useState } from "react";
import axios from "axios";
import { Button, Row, Col } from "react-bootstrap";
import Questions from "../questions/Questions";
import { EndpointURL } from "../../data/EndpointURL";

function Trivia({ parameters, questions, setQuestions, showFilters }) {
  const [questionNum, setQuestionNum] = useState(0);
  const [score, setScore] = useState(0);

  const FetchQuestions = () => {
    const endpoint = EndpointURL({ parameters });
    axios.get(`${endpoint}`).then((res) => {
      setQuestions(() => res.data.results);
      setQuestionNum(0);
      setScore(0);
      showFilters(false);
    });
  };

  // Validate Answers
  const questionNumber = questionNum;
  const validateAnswer = (answer) => {
    if (answer === questions[questionNumber].correct_answer) {
      setQuestionNum(questionNum + 1);
      setScore(score + 1);
    } else {
      setQuestionNum(questionNum + 1);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <Col lg={6} md={6} className="d-flex flex-column">
        <Row lg={2} className="justify-content-center">
          <Button
            variant="danger"
            onClick={() => FetchQuestions()}
            className="m-3"
          >
            Get Questions
          </Button>
        </Row>

        <Row className="text-center">
          {JSON.stringify(questionNum) === parameters.amount ? (
            <h1>Your score = {score}</h1>
          ) : (
            <div>
              <h3>
                {questions.length !== 0 &&
                  `Question ${questionNum + 1}/${parameters.amount}`}
              </h3>
              <div>
                {" "}
                <Questions
                  questions={questions[questionNumber]}
                  validateAnswer={validateAnswer}
                />
              </div>
            </div>
          )}
        </Row>
      </Col>
    </div>
  );
}

export default Trivia;
