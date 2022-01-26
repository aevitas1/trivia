import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../Button";

function Filters({ setParameters, setQuestions }) {
  const [categories, setCategories] = useState([]);
  const [loading, isLoading] = useState(false);
  const [filters, showFilters] = useState(false);

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

  const toggleFilters = (e) => {
    filters ? showFilters(false) : showFilters(true);
  };

  return loading ? (
    <>
      <h1>Loading...</h1>
    </>
  ) : (
    <div className="filter_container">
      <Button onClick={toggleFilters}>
        {filters ? "Hide Filters" : "Show Filters"}
      </Button>
      <div className={filters ? "filters_show" : "filters_hidden"}>
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

        <select className="" defaultValue={""} onChange={handleDifficulty}>
          <option value="" disabled>
            Select difficulty
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <div>
          <label htmlFor="types">Multiple choice</label>
          <input
            type="radio"
            name="types"
            value="multiple"
            onClick={handleType}
          />
          <label htmlFor="types">True / False</label>
          <input
            type="radio"
            name="types"
            value="boolean"
            onClick={handleType}
          />
          <label htmlFor="types">Both types</label>
          <input type="radio" name="types" value="" onClick={handleType} />
        </div>
      </div>
    </div>
  );
}

export default Filters;
