import he from "he";
import { Container, Row, Button } from "react-bootstrap";

function Answers({
  questions,
  validateAnswer,
  setPlaying,
  playing,
  setKey,
  setQuestionNum,
  questionNum,
}) {
  const shuffleAnswers = [
    questions.correct_answer,
    ...questions.incorrect_answers,
  ].sort(() => Math.random() - 0.5);

  const handleNextQuestion = () => {
    setQuestionNum(questionNum + 1);
    setKey((prevKey) => prevKey + 1);
    setPlaying(true);
  };
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center align-content-center flex-wrap w-100 m-0 p-0">
        {shuffleAnswers.map((answer, index) => (
          <div
            onClick={() => validateAnswer(answer)}
            answer={answer}
            key={index}
            className={
              playing === false
                ? answer === questions.correct_answer
                  ? "btn btn-light m-1 py-5 d-flex justify-content-center align-items-center align-content-center text-center answer_btn border-5 border-success"
                  : "btn btn-light m-1 py-5 d-flex justify-content-center align-items-center align-content-center text-center answer_btn border-5 border-danger"
                : "btn btn-light m-1 py-5 d-flex justify-content-center align-items-center align-content-center text-center answer_btn "
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
        {playing === false ? (
          <>
            <Button
              variant="danger"
              className="btn-lg"
              onClick={() => handleNextQuestion()}
            >
              Next Question
            </Button>
          </>
        ) : (
          ""
        )}
      </Row>
    </>
  );
}

export default Answers;
