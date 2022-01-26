import Header from "./components/Header";
import Trivia from "./components/categories/Trivia";
import Filters from "./components/Filters/Filters";
import { useState } from 'react'

function App() {
  const [parameters, setParameters] = useState({
    category: "",
    amount: "5",
    difficulty: "",
    type: "",
  });
  const [questions, setQuestions] = useState([]);
  console.log(questions)

  return (
    <div className="main_wrapper">
      <Header />
      <Filters setParameters={setParameters} setQuestions={setQuestions} />
      <Trivia setParameters={setParameters} parameters={parameters} questions={questions} setQuestions={setQuestions} />

    </div>
  );
}

export default App;
