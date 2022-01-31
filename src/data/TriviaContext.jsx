import { createContext, useState } from "react";

const TriviaContext = createContext();

export const TriviaProvider = ({ children }) => {
  //timer
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(100);
  //questions
  const [loading, isLoading] = useState(false);
  const [questionNum, setQuestionNum] = useState(0);
  const [questions, setQuestions] = useState([]);

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
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
};

export default TriviaContext;
