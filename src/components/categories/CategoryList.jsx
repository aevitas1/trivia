// import CategoryItem from "./CategoryItem";
import { useState, useEffect } from "react";
// import { CATEGORY_URL, API_URL } from "../../data/config";
import axios from "axios";
import Button from "../Button";
import Questions from "../questions/Questions";
import { EndpointURL } from "../../data/EndpointURL";

export function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [loading, isLoading] = useState(false);
  const [questionNum, setQuestionNum] = useState(0);
  const [score, setScore] = useState(0);
  const CATEGORY_URL = "https://opentdb.com/api_category.php";

  const [parameters, setParameters] = useState({
    category: null,
    amount: null,
    difficulty: null,
  });

  //fetch all categoriess
  useEffect(() => {
    isLoading(true);
    axios.get(`${CATEGORY_URL}`).then((res) => {
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

  console.log(parameters);
  //fetch questions
  const FetchQuestions = () => {
    const endpoint = EndpointURL({ parameters });
    console.log(endpoint);
    axios.get(`${endpoint}`).then((res) => {
      setQuestions(res.data.results);
      setQuestionNum(0);
      setScore(0);
    });
    // if (selectedCategory === "") {
    //   axios.get(`${API_URL}amount=${selectedAmount}`).then((res) => {
    //     setQuestions(res.data.results);
    //     setQuestionNum(0);
    //     setScore(0);
    //     console.log(questions);
    //   }, []);
    // } else {
    //   axios
    //     .get(`${API_URL}amount=${selectedAmount}&category=${selectedCategory}`)
    //     .then((res) => {
    //       setQuestions(res.data.results);
    //       setQuestionNum(0);
    //       setScore(0);
    //       console.log(questions);
    //     }, []);
    // }
  };
  console.log(questions);

  // Validate Answers
  const questionNumber = questionNum;
  const validateAnswer = (answer) => {
    if (answer === questions[questionNumber].correct_answer) {
      console.log("right");
      setQuestionNum(questionNum + 1);
      setScore(score + 1);
    } else {
      console.log("wrong");
      setQuestionNum(questionNum + 1);
    }
  };

  return loading ? (
    <>
      <h1>Loading...</h1>
    </>
  ) : (
    <>
      <div>
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
      </div>
      <Button onClick={() => FetchQuestions()}>Get Questions</Button>

      {questionNum === parameters.amount ? (
        <h1>Limit reached</h1>
      ) : (
        <div>
          <h3>
            {questions.length !== 0 &&
              `Question ${questionNum}/${parameters.amount}`}
          </h3>
          <Questions
            questions={questions[questionNumber]}
            validateAnswer={validateAnswer}
          />
        </div>
      )}
    </>
  );
}
