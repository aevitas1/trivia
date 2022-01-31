import Header from "./components/Header";
import Trivia from "./components/categories/Trivia";
import Filters from "./components/Filters/Filters";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import { Container } from "react-bootstrap";
import About from "./About";
import { TriviaProvider } from './data/TriviaContext'


function App() {
  const [parameters, setParameters] = useState({
    category: "",
    amount: "5",
    difficulty: "",
    type: "",
  });
  const [filters, showFilters] = useState(false);


  return (
    <Router>
      <div className="main-container">
        <Container fluid='md' className="justify-content-center">
          <Header />
          <Routes>
            <Route path='/' element={
              <>
                <TriviaProvider>
                  <Filters setParameters={setParameters} filters={filters} showFilters={showFilters} />
                  <Trivia setParameters={setParameters} parameters={parameters} showFilters={showFilters} />
                </TriviaProvider>
              </>} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
