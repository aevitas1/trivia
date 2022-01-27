import Header from "./components/Header";
import Trivia from "./components/categories/Trivia";
import Filters from "./components/Filters/Filters";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import { Container } from "react-bootstrap";
import About from "./About";

function App() {
  const [parameters, setParameters] = useState({
    category: "",
    amount: "5",
    difficulty: "",
    type: "",
  });
  const [questions, setQuestions] = useState([]);
  const [filters, showFilters] = useState(false);


  return (
    <Router>
      <div className="main-container">
        <Container fluid='md' className="justify-content-center">
          <Header />
          <Routes>
            <Route path='/' element={
              <>
                <Filters setParameters={setParameters} setQuestions={setQuestions} filters={filters} showFilters={showFilters} />
                <Trivia setParameters={setParameters} parameters={parameters} questions={questions} setQuestions={setQuestions} showFilters={showFilters} />
              </>} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Container>
      </div>
    </Router>

  );
}

export default App;
