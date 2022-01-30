import { useState, useEffect } from "react";

let interval = undefined;
function TimerBar() {
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(10);

  console.log(running);
  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => prev - 0.1);
      }, 100);
    } else {
      clearInterval(interval);
    }
  }, [running]);

  useEffect(() => {
    if (progress < 0) {
      setRunning(false);
      clearInterval(interval);
    }
  }, [progress]);

  return { running, setRunning, progress };
}

export default TimerBar;
