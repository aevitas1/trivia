import he from "he";
import Answer from "./Answers";
import { ProgressBar, Row } from "react-bootstrap";
import TimerBar from "../questions/TimerBar";

function Questions({ questions, validateAnswer, setQuestionNum, questionNum }) {
  const { progress } = TimerBar();

  return questions !== undefined ? (
    <>
      <Row className="d-flex justify-content-center pt-3">
        <ProgressBar
          className="timebar"
          now={progress * 10}
          variant="danger"
          data-content={Math.ceil(progress)}
        />
      </Row>
      <p
        className="pb-2 text-white h3 d-flex justify-content-center align-items-center"
        style={{ height: "220px" }}
      >
        {he.decode(`${questions.question}`)}
      </p>

      <Answer
        questions={questions}
        validateAnswer={validateAnswer}
        setQuestionNum={setQuestionNum}
        questionNum={questionNum}
      />
    </>
  ) : (
    ""
  );
}

export default Questions;
