/*The root reducer will combine the other reducers so it can be passed in as a single function into the store */
import { combineReducers } from 'redux';
import articleReducer from './articleReducer'

export default combineReducers({
    posts: articleReducer
});