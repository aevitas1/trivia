import he from "he";
import AnswerButton from "../AnswerButton";

function Answers({ questions, validateAnswer }) {
  const shuffleAnswers = [
    questions.correct_answer,
    ...questions.incorrect_answers,
  ].sort(() => Math.random() - 0.5);

  return (
    <div className="answer_container">
      {shuffleAnswers.map((answer, index) => (
        <AnswerButton
          onClick={() => validateAnswer(answer)}
          answer={answer}
          key={index}
        >
          {he.decode(`${answer}`)}
        </AnswerButton>
      ))}
    </div>
  );
}

export default Answers;
