import { ProgressBar } from "react-bootstrap";
import { useEffect, useContext } from "react";
import TriviaContext from "../../data/TriviaContext";
import { Row } from "react-bootstrap";

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

  function progressColor() {
    let variant = "success";
    if (progress < 66) {
      variant = "warning";
    }
    if (progress < 33) {
      variant = "danger";
    }
    return variant;
  }
  useEffect(() => {
    if (progress < 0) {
      setRunning(false);
      clearInterval(interval);
    }
  }, [progress, setRunning]);

  return (
    <>
      <Row className="d-flex justify-content-center">
        <ProgressBar
          className="timebar"
          now={progress}
          variant={progressColor()}
          data-content={Math.ceil(progress / 10)}
        />
      </Row>
    </>
  );
}

export default TimerBar;
