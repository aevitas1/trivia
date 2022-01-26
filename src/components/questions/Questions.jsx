import he from "he";
import Answer from "./Answers";

function Questions({ questions, validateAnswer }) {
  return questions !== undefined ? (
    <>
      <div>{he.decode(`${questions.question}`)}</div>
      <Answer questions={questions} validateAnswer={validateAnswer} />
    </>
  ) : (
    ""
  );
}

export default Questions;
