import { ProgressBar } from "react-bootstrap";
import TimeBarReducer from "./TimeBarReducer";

function TimerBar() {
  const { state, initialState } = TimeBarReducer();

  return (
    <>
      <ProgressBar
        className="timebar"
        now={state.progress * 10}
        variant="danger"
        data-content={Math.ceil(state.progress)}
      />
    </>
  );
}
// let interval = undefined;
// function TimerBar() {
//   const { running, setRunning, progress, setProgress } =
//     useContext(TriviaContext);

//   useEffect(() => {
//     if (running) {
//       interval = setInterval(() => {
//         setProgress((prev) => prev - 1);
//       }, 100);
//     } else {
//       clearInterval(interval);
//     }
//   }, [running]);

//   useEffect(() => {
//     if (progress < 0) {
//       setRunning(false);
//       clearInterval(interval);
//     }
//   }, [progress]);

//   return (
//     <>
//       <ProgressBar
//         className="timebar"
//         now={progress}
//         variant="danger"
//         data-content={Math.ceil(progress / 10)}
//       />
//     </>
//   );
// }

export default TimerBar;
