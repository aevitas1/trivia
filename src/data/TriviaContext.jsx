import { createContext, useState } from "react";

const TriviaContext = createContext();

export const TriviaProvider = ({ children }) => {
  // timer
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(100);
  // questions
  const [loading, isLoading] = useState(false);
  const [questionNum, setQuestionNum] = useState(0);
  const [questions, setQuestions] = useState([]);
  // answers
  const [score, setScore] = useState(0);
  const [loadingAnswers, setLoadingAnswers] = useState(false);

  // Validate Answers
  const validateAnswer = (answer) => {
    if (running === true) {
      if (answer === questions[questionNum].correct_answer) {
        setScore(score + 1);
        setRunning(false);
        console.log("right");
      } else {
        setRunning(false);
        console.log("wrong");
      }
    }
  };

  return (
    <TriviaContext.Provider
      value={{
        loading,
        isLoading,
        questionNum,
        setQuestionNum,
        questions,
        setQuestions,
        running,
        setRunning,
        progress,
        setProgress,
        validateAnswer,
        score,
        setScore,
        loadingAnswers,
        setLoadingAnswers,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
};

export default TriviaContext;
