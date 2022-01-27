import Header from "./components/Header";
import Trivia from "./components/categories/Trivia";
import Filters from "./components/Filters/Filters";
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import { Container } from "react-bootstrap";

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
        <Container fluid='md' className="justify-content-center pt-3 pb-3">
          <Header />
          <Filters setParameters={setParameters} setQuestions={setQuestions} filters={filters} showFilters={showFilters} />
          <Trivia setParameters={setParameters} parameters={parameters} questions={questions} setQuestions={setQuestions} showFilters={showFilters} />
          {/* <Routes>
        <Route path='/about' element={<About />} />
        </Routes> */}
        </Container>
      </div>
      <Footer />
    </Router>

  );
}

export default App;
