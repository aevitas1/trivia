import { useState } from 'react';

const API_URL = 'https://opentdb.com/api.php?';
const CATEGORY_URL = 'https://opentdb.com/api_category.php';

// https://opentdb.com/api.php?amount=20&category=12&difficulty=medium
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




// key is the object property and value is it's value. They are destructured, as Object.entries returns an array with these two items, for each property.


// const [ endpoint, setEndpoint ] = useState('https://opentdb.com/api.php?');
// const [ params, setParams ] = useState({
//   categories: [],
//   amount: 0,
//   difficulty: ''
// });

// There are better ways to do this in react, use an utility function or something to avoid mutating the state so often. It's fine for only a couple of properties though, and this is as an example anyway


// for ( const [ key, value ] of Object.entries(params) ) {
//   setEndpoint(previous => previous + `${key}=${value}&`);
// }


// Here, is where you want to choose whether to add to the endpoint or not based on some criteria. For example you could default these values to null and ignore them if they were never updated
// that second part I suggest you create a separate utility function that contains the logic to build your endpoint string.
// Your component shouldn't have to be responsible for computing any values

// Yes, for a couple of reasons:
// 1. Consider this project was much bigger and there were hundreds of proeprties. Looping over such an object would mutate the state that many times and that's just unnecessary. Even if you didn't mutate the state of the component, it'd be synchronous code that blocks any other updates. Again this computation should be  fine but try to pick up these type  of code smells. In other words, I gave you a bad example for you to improve :smile:
// 2. It could be that some other component later on could also benefit from the same logic. For example you are an admin creating new questions and the types of params to send to the api are different, but the logic to build the endpoint url is  still the same.
// And 3, you can write unit tests separately for this function alone. If it was defined inside the component this would be much harder to do.