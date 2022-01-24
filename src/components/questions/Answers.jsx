import he from "he";
import AnswerButton from "../AnswerButton";
import { useState, useEffect } from "react";

function Answers({ questions, validateAnswer }) {
  const shuffleAnswers = [
    questions.correct_answer,
    ...questions.incorrect_answers,
  ].sort(() => Math.random() - 0.5);

  return (
    <>
      {questions.correct_answer}
      {shuffleAnswers.map((answer, index) => (
        <AnswerButton
          onClick={() => validateAnswer(answer)}
          answer={answer}
          key={index}
        >
          {he.decode(`${answer}`)}
        </AnswerButton>
      ))}
    </>
  );
}

export default Answers;
