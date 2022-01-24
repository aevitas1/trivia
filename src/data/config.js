import { useState } from 'react';

const API_URL = 'https://opentdb.com/api.php?amount=10&';
const CATEGORY_URL = 'https://opentdb.com/api_category.php';



export function GrabData() {
    const [triviaQuestions, setTriviaQuestions] = useState([]);
    const [categories, setCategories] = useState([]);
    console.log(categories, 'from config')
    return { categories, setCategories, triviaQuestions, setTriviaQuestions };
}

export {
    API_URL,
    CATEGORY_URL,
}

// Category Lookup: Returns the entire list of categories and ids in the database.
//     https://opentdb.com/api_category.php

//     Global Question Count Lookup: Returns the number of ALL questions in the database.Total, Pending, Verified, and Rejected.
//     https://opentdb.com/api_count_global.php

// Using a Session Token:
// https://opentdb.com/api.php?amount=10&token=YOURTOKENHERE

// Retrieve a Session Token:
// https://opentdb.com/api_token.php?command=request

// Reset a Session Token:
// https://opentdb.com/api_token.php?command=reset&token=YOURTOKENHERE

// Response Codes

// The API appends a "Response Code" to each API Call to help tell developers what the API is doing.

//     Code 0: Success Returned results successfully.
//     Code 1: No Results Could not return results. The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)
//     Code 2: Invalid Parameter Contains an invalid parameter. Arguements passed in aren't valid. (Ex. Amount = Five)
//     Code 3: Token Not Found Session Token does not exist.
//     Code 4: Token Empty Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.
