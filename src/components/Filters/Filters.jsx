import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { Col, Row, Spinner } from "react-bootstrap";
import TriviaContext from "../../data/TriviaContext";

function Filters() {
  const [categories, setCategories] = useState([]);
  const [loading, isLoading] = useState(false);
  const { setParameters, setQuestions, showFilters, filters } =
    useContext(TriviaContext);
  //fetch all categoriess
  useEffect(() => {
    isLoading(true);
    axios.get("https://opentdb.com/api_category.php").then((res) => {
      const data = res.data.trivia_categories;
      setCategories(data);
      isLoading(false);
    });
  }, []);

  //category choice
  const handleCategory = (event) => {
    setParameters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
    console.log(event.target.value);
    setQuestions([]);
  };

  const handleAmount = (event) => {
    setParameters((prevState) => ({
      ...prevState,
      amount: event.target.value,
    }));
    console.log(event.target.value);
    setQuestions([]);
  };

  const handleDifficulty = (event) => {
    setParameters((prevState) => ({
      ...prevState,
      difficulty: event.target.value,
    }));
    console.log(event.target.value);
    setQuestions([]);
  };

  const handleType = (event) => {
    setParameters((prevState) => ({
      ...prevState,
      type: event.target.value,
    }));
    console.log(event.target.value);
    setQuestions([]);
  };

  return loading ? (
    <>
      <Col className="d-flex justify-content-center flex-column align-items-center align-content-center py-3">
        <h1 className="text-white text-center py-3">Loading...</h1>
        <Spinner animation="border" role="status" variant="light"></Spinner>
      </Col>
    </>
  ) : (
    <>
      <div className="d-flex justify-content-center">
        <Button
          variant="outline-light"
          onClick={() => showFilters(!filters)}
          aria-expanded={filters}
          aria-controls="collapse-filters"
          className="lg-4"
        >
          {filters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      <Col className="d-flex justify-content-center">
        <Collapse in={filters}>
          <Col className="px-3" style={{ maxWidth: "300px" }}>
            <Row className="pt-3 pb-2">
              <select name="select" defaultValue={""} onChange={handleCategory}>
                <option value="" disabled>
                  Select a category
                </option>
                {categories.map((item) => (
                  <option value={item.id} key={item.id} item={item}>
                    {item.name}
                  </option>
                ))}
              </select>
            </Row>

            <Row className="pt-1 pb-2">
              {" "}
              <select className="" defaultValue={""} onChange={handleAmount}>
                <option value="" disabled>
                  Select amount of questions
                </option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
            </Row>

            <Row className="pt-1 pb-2">
              <select defaultValue={""} onChange={handleDifficulty}>
                <option value="" disabled>
                  Select difficulty
                </option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </Row>

            <Row>
              <Col className="col-sm">
                <label
                  htmlFor="types"
                  className="form-check-label text-center text-white"
                >
                  Multiple choice
                </label>
                <Row className="justify-content-center">
                  <input
                    type="radio"
                    name="types"
                    value="multiple"
                    onClick={handleType}
                    className="p-2 form-check-input"
                  />
                </Row>
              </Col>
              <Col className="col-sm">
                <label
                  htmlFor="types"
                  className="form-check-label text-center text-white"
                >
                  True / False
                </label>
                <Row className="justify-content-center">
                  <input
                    type="radio"
                    name="types"
                    value="boolean"
                    onClick={handleType}
                    className="p-2 form-check-input"
                  />
                </Row>
              </Col>
              <Col className="col-sm">
                <label
                  htmlFor="types"
                  className="form-check-label text-center text-white"
                >
                  Mix of both
                </label>
                <Row className="justify-content-center">
                  <input
                    type="radio"
                    name="types"
                    value=""
                    onClick={handleType}
                    className="p-2 form-check-input"
                  />
                </Row>
              </Col>
            </Row>
          </Col>
        </Collapse>
      </Col>
    </>
  );
}

export default Filters;
