import { ProgressBar } from "react-bootstrap";
import { useEffect, useContext } from "react";
import TriviaContext from "../../data/TriviaContext";

let interval = undefined;
function TimerBar() {
  const { running, progress, setRunning, setProgress, timing } =
    useContext(TriviaContext);
  useEffect(() => {
    clearInterval(interval);
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => prev - 1);
      }, timing);
    } else {
      clearInterval(interval);
    }
  }, [running, setProgress, timing]);

  useEffect(() => {
    if (progress < 0) {
      setRunning(false);
      clearInterval(interval);
    }
  }, [progress, setRunning]);

  return (
    <>
      <ProgressBar
        className="timebar"
        now={progress}
        variant="danger"
        data-content={Math.ceil(progress / 10)}
      />
    </>
  );
}

export default TimerBar;
