import { createContext, useState } from "react";

const TimerBarContext = createContext();

export const TimerBarProvider = ({ children }) => {
  //Time bar
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(100);

  return (
    <TimerBarContext.Provider
      value={{ running, setRunning, progress, setProgress }}
    >
      {children}
    </TimerBarContext.Provider>
  );
};

export default TimerBarContext;
