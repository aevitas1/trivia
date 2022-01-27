import he from "he";
import Answer from "./Answers";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import RenderTime from "./RenderTimer";
import { useState } from "react";

function Questions({
  questions,
  validateAnswer,
  playing,
  setPlaying,
  setQuestionNum,
  questionNum,
}) {
  const [key, setKey] = useState(0);
  return questions !== undefined ? (
    <>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={key}
          isPlaying={playing}
          duration={20}
          colors={["#228B22", "#FFBF00", "#F28C28", "#FF0000"]}
          colorsTime={[20, 16, 10, 0]}
          size={120}
          strokeWidth={12}
        >
          {RenderTime}
        </CountdownCircleTimer>
      </div>
      <p
        className="pb-2 text-white h3 d-flex justify-content-center align-items-center"
        style={{ height: "220px" }}
      >
        {he.decode(`${questions.question}`)}
      </p>
      <Answer
        questions={questions}
        validateAnswer={validateAnswer}
        setPlaying={setPlaying}
        playing={playing}
        setKey={setKey}
        setQuestionNum={setQuestionNum}
        questionNum={questionNum}
      />
    </>
  ) : (
    ""
  );
}

export default Questions;
