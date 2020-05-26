/*Actions are functions that trigger the reducers
This one will fetch the data*/
import { FETCH_ARTICLES } from "../actions/types";


/*This action js file takes over for the one that would go into the component itself
 Fetches the data as a respons object
.then translates the response object to JSON
.then accesses the state of the Component - an empty object - and adds them to it as a property, or object literal*/
export const fetchArticles = () => {
    return function(dispatch) { //dispatch is like a .resolve in a promise 
    fetch('./db.json')
    .then(res => res.json())
    .then(posts => 
        dispatch({
        type: FETCH_ARTICLES,
        payload: posts
    }))
}}