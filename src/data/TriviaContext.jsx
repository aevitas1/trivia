import { createContext, useState } from "react";

const TriviaContext = createContext();

export const TriviaProvider = ({ children }) => {
  // timer
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(100);
  const [timing, setTiming] = useState(100);
  // reset timer
  function resetTimer() {
    setRunning(true);
    setTiming(100);
    setProgress(100);
  }
  // stop timer
  function stopTimer() {
    setRunning(false);
  }
  // filters
  const [parameters, setParameters] = useState({
    category: "",
    amount: "5",
    difficulty: "",
    type: "",
  });
  const [filters, showFilters] = useState(false);
  // questions
  const [loading, isLoading] = useState(false);
  const [questionNum, setQuestionNum] = useState(0);
  const [questions, setQuestions] = useState([]);
  // answers
  const [score, setScore] = useState(0);
  // Validate Answers
  const validateAnswer = (answer) => {
    if (running === true) {
      if (answer === questions[questionNum].correct_answer) {
        setScore(score + 1);
        stopTimer();
      } else {
        stopTimer();
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
        parameters,
        setParameters,
        filters,
        showFilters,
        resetTimer,
        stopTimer,
        timing,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
};

export default TriviaContext;
