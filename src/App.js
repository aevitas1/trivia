import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TriviaProvider } from './data/TriviaContext'
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Trivia from "./components/categories/Trivia";
import Filters from "./components/Filters/Filters";
import Game from './components/Game';
import About from "./About";
import Footer from "./components/Footer";

function App() {

  return (
    <Router>
      <Container fluid="md" className="justify-content-center main-container p-0 m-0">
        <Container className="inner-wrapper">
          <Header />
          <Routes>
            <Route path='/' element={
              <>
                <TriviaProvider>
                  <Filters />
                  <Trivia />
                  <Game />
                </TriviaProvider>
              </>} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </Container>
      </Container>

    </Router>
  );
}

export default App;
