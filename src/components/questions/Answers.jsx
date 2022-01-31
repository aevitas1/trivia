import { useContext } from "react";
import he from "he";
import { Container, Row, Button, Col, Spinner } from "react-bootstrap";
import TriviaContext from "../../data/TriviaContext";

function Answers() {
  const {
    questions,
    setQuestionNum,
    questionNum,
    running,
    setProgress,
    setRunning,
    validateAnswer,
    loadingAnswers,
  } = useContext(TriviaContext);

  const handleNextQuestion = () => {
    setQuestionNum(questionNum + 1);
    setRunning(true);
    setProgress(100);
  };

  return loadingAnswers ? (
    <>
      {" "}
      <Col className="d-flex justify-content-center flex-column align-items-center align-content-center py-3">
        <h1 className="text-white text-center py-3">Loading...</h1>
        <Spinner animation="border" role="status" variant="light"></Spinner>
      </Col>
    </>
  ) : questions.length > 0 ? (
    <>
      <Container className="d-flex justify-content-center align-items-center align-content-center flex-wrap w-100 m-0 p-0">
        {questions[`${questionNum}`].answers.map((answer, index) => (
          <div
            onClick={() => validateAnswer(answer)}
            answer={answer}
            key={index}
            className={
              running === false
                ? answer === questions[`${questionNum}`].correct_answer
                  ? "btn btn-light m-1 py-5 d-flex justify-content-center align-items-center align-content-center text-center answer_btn border-5 border-success"
                  : "btn btn-light m-1 py-5 d-flex justify-content-center align-items-center align-content-center text-center answer_btn border-5 border-danger"
                : "btn btn-light m-1 py-5 d-flex justify-content-center align-items-center align-content-center text-center answer_btn"
            }
          >
            {he.decode(`${answer}`)}
          </div>
        ))}
      </Container>
      <Row
        className="p-3 d-flex justify-content-center align-items-center"
        lg={3}
      >
        <>
          <Button
            variant="danger"
            className="btn-lg"
            onClick={() => handleNextQuestion()}
          >
            Next Question
          </Button>
        </>
      </Row>
    </>
  ) : (
    <></>
  );
}

export default Answers;
