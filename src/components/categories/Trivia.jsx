import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Row, Col } from "react-bootstrap";
import Questions from "../questions/Questions";
import { EndpointURL } from "../../data/EndpointURL";
import { Link } from "react-router-dom";
import TimerBar from "../questions/TimerBar";

function Trivia({ parameters, questions, setQuestions, showFilters }) {
  const [questionNum, setQuestionNum] = useState(0);
  const [score, setScore] = useState(0);
  const { setRunning } = TimerBar();

  const FetchQuestions = () => {
    const endpoint = EndpointURL({ parameters });
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
      setRunning(true);
      showFilters(false);
    });
  };
  // Validate Answers
  const questionNumber = questionNum;
  const validateAnswer = (answer) => {
    if (answer === questions[questionNumber].correct_answer) {
      setScore(score + 1);
      setQuestionNum(questionNum + 1);
    } else {
      setQuestionNum(questionNum + 1);
    }
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
        <Row className="text-center qa_container">
          {JSON.stringify(questionNum) === parameters.amount ? (
            <>
              <Col className="d-flex justify-content-center align-items-center align-content-center flex-column text-white">
                <h2 className="p-5">Game Ended</h2>
                <h4>Your score is {score}</h4>
              </Col>
            </>
          ) : (
            <div>
              <p className="pt-3 text-white h5">
                {questions.length !== 0 &&
                  `Question ${questionNum + 1}/${parameters.amount}`}
              </p>
              <div>
                <Questions
                  questions={questions[questionNumber]}
                  validateAnswer={validateAnswer}
                  setQuestionNum={setQuestionNum}
                  questionNum={questionNum}
                />
              </div>
            </div>
          )}
        </Row>

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
      </Col>
    </div>
  );
}

export default Trivia;
