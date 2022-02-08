import { useContext } from "react";
import he from "he";
import TriviaContext from "../../data/TriviaContext";

function Questions() {
  const { questions, questionNum, progress } = useContext(TriviaContext);
  return (
    <>
      <p
        className="pb-2 text-white h3 d-flex justify-content-center align-items-center"
        style={{ height: "220px" }}
      >
        {he.decode(`${questions[`${questionNum}`].question}`)}
      </p>
      {progress < 0 ? <h3 className="text-white">Too late...</h3> : ""}
    </>
  );
}

export default Questions;
