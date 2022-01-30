import he from "he";
import { Container, Row, Button } from "react-bootstrap";

function Answers({ questions, validateAnswer, setQuestionNum, questionNum }) {
  const handleNextQuestion = () => {
    setQuestionNum(questionNum + 1);
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center align-content-center flex-wrap w-100 m-0 p-0">
        {questions.answers.map((answer, index) => (
          <div
            onClick={() => validateAnswer(answer)}
            answer={answer}
            key={index}
            className={
              "btn btn-light m-1 py-5 d-flex justify-content-center align-items-center align-content-center text-center answer_btn border-5 border-transparent"
              // ? answer === questions.correct_answer
              //   ? "btn btn-light m-1 py-5 d-flex justify-content-center align-items-center align-content-center text-center answer_btn border-5 border-success"
              //   : "btn btn-light m-1 py-5 d-flex justify-content-center align-items-center align-content-center text-center answer_btn border-5 border-danger"
              // : "btn btn-light m-1 py-5 d-flex justify-content-center align-items-center align-content-center text-center answer_btn border-5 border-transparent"
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
  );
}

export default Answers;
