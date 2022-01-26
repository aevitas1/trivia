import { useState } from "react";
import axios from "axios";
import Button from "../Button";
import Questions from "../questions/Questions";
import { EndpointURL } from "../../data/EndpointURL";

function Trivia({ parameters, questions, setQuestions }) {
  const [questionNum, setQuestionNum] = useState(0);
  const [score, setScore] = useState(0);

  const FetchQuestions = () => {
    const endpoint = EndpointURL({ parameters });
    axios.get(`${endpoint}`).then((res) => {
      setQuestions(() => res.data.results);
      setQuestionNum(0);
      setScore(0);
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
    <>
      <Button onClick={() => FetchQuestions()}>Get Questions</Button>

      {questionNum == parameters.amount ? (
        <h1>Your score = {score}</h1>
      ) : (
        <div className="question_container">
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
    </>
  );
}

export default Trivia;
