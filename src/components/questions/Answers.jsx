import { useContext } from "react";
import he from "he";
import { Container, Row, Button, Col } from "react-bootstrap";
import TriviaContext from "../../data/TriviaContext";

function Answers() {
  const {
    questions,
    setQuestionNum,
    questionNum,
    running,
    validateAnswer,
    resetTimer,
  } = useContext(TriviaContext);

  const handleNextQuestion = () => {
    setQuestionNum(questionNum + 1);
    resetTimer();
  };
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center align-content-center flex-wrap m-0 p-0">
        {questions[`${questionNum}`].answers.map((answer, index) => (
          <Col
            onClick={() => validateAnswer(answer)}
            answer={answer}
            key={index}
            lg={5}
            sm={12}
            xs={12}
            style={{ margin: "2px" }}
            className={
              running === false
                ? answer === questions[`${questionNum}`].correct_answer
                  ? "btn btn-light py-4 d-flex justify-content-center align-items-center align-content-center text-center answer_btn border-5 border-success"
                  : "btn btn-light py-4 d-flex justify-content-center align-items-center align-content-center text-center answer_btn border-5 border-danger"
                : "btn btn-light py-4 d-flex justify-content-center align-items-center align-content-center text-center answer_btn border-5"
            }
          >
            {he.decode(`${answer}`)}
          </Col>
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
            disabled={running === true ? true : false}
          >
            Next Question
          </Button>
        </>
      </Row>
    </>
  );
}

export default Answers;
