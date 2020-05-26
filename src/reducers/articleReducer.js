/*This collects the actions that can change the state of the articles.
For now, there is only one action. Which gets the article data from the db*/
import { FETCH_ARTICLES } from "../actions/types";

const preloadedState = {
    items: [] //post is coming from the action and from the action comes the fetch request
}

/*Reducers are funcitons
    In this case we are making the function that is going to take in the preloaded state,
     and then change the state based on the action it gets
    We achieve this by putting in switch statement */
    
export default function(state = preloadedState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}