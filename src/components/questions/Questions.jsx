import { useContext } from "react";
import he from "he";
import TriviaContext from "../../data/TriviaContext";
import { Row } from "react-bootstrap";

function Questions() {
  const { questions, questionNum, progress } = useContext(TriviaContext);
  return (
    <>
      <Row
        className="m-auto pt-2 pb-3"
        style={{ minHeight: "240px" }}
        lg={8}
        sm={12}
        xs={12}
      >
        <p
          className={
            progress < 0
              ? "pb-2 text-white opacity-75 h4 d-flex justify-content-center pt-4"
              : "pb-2 text-white h4 d-flex justify-content-center pt-4"
          }
        >
          {he.decode(`${questions[`${questionNum}`].question}`)}
        </p>

        <h3 className="text-white text-center">
          {progress < 0 ? "Time's up" : ""}
        </h3>
      </Row>
    </>
  );
}

export default Questions;
