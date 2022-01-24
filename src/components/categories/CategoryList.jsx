// import CategoryItem from "./CategoryItem";
import { useState, useEffect } from "react";
import { CATEGORY_URL, API_URL } from "../../data/config";
import axios from "axios";
import Button from "../Button";
import Questions from "../questions/Questions";

export function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [loading, isLoading] = useState(false);
  const [loadingQuestion, isLoadingQuestion] = useState(false);
  const [questionNum, setQuestionNum] = useState(0);
  const [score, setScore] = useState(0);

  let selectedCategory = "";
  let selectedQuestionAmount = 5;

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
  const handleCategoryChange = (event) => {
    selectedCategory = event.target.value;
  };

  const handleAmount = (event) => {
    selectedQuestionAmount = event.target.value;
  };

  //fetch questions
  const FetchQuestions = () => {
    isLoadingQuestion(true);
    if (selectedCategory === "") {
      axios.get(`${API_URL}amount=${selectedQuestionAmount}`).then((res) => {
        setQuestions(res.data.results);
        setQuestionNum(0);
        setScore(0);
      }, []);
    } else {
      axios
        .get(
          `${API_URL}amount=${selectedQuestionAmount}&category=${selectedCategory}`
        )
        .then((res) => {
          setQuestions(res.data.results);
          setQuestionNum(0);
          setScore(0);
        }, []);
    }
    isLoadingQuestion(false);
    console.log(loadingQuestion);
  };

  // Validate Answers
  const questionNumber = questionNum;
  const validateAnswer = (answer) => {
    if (answer === answer.correct_answer) {
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
        <select name="select" defaultValue={""} onChange={handleCategoryChange}>
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((item) => (
            <option value={item.id} key={item.id} item={item}>
              {item.name}
            </option>
          ))}
        </select>

        <select name="" id="" defaultValue={"5"} onChange={handleAmount}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>

        <select>
          <option value="">Easy</option>
          <option value="">Medium</option>
          <option value="">Hard</option>
        </select>
      </div>
      <Button onClick={() => FetchQuestions()}>Get Questions</Button>

      {isLoadingQuestion === true ? (
        ""
      ) : (
        <>
          {score}
          <Questions
            questions={questions[questionNumber]}
            validateAnswer={validateAnswer}
          />
        </>
      )}
    </>
  );
}
