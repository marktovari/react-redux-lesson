/*Store has all the states of all the components. It is the heart of redux */
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

/*createStore takes in a (reducer, [preloadedState], [enhancer])
reducer is something that accepts an accumulation of values and gives back a new accumulation. 
    In this case the properties of the states.
[enchancer] are third-party capabilities of the store*/
const preloadedState = {};
/*We are using applyMiddleware(...middleware) and defining middleware as an array, so we can use multiple enhancers if need be*/
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*We are using a rootReducer however, that reduces all the other reducers into a single function, so the 
[preloadedState] is quite obviously the default state before any reducer does anything to it.*/
/*composeEnhancers does the same thing as the rootReducer, but for enhancers. As it puts the enhaners all in a single function*/
const store = createStore(
    rootReducer, 
    preloadedState,
    composeEnhancers(
        applyMiddleware(...middleware))
    )

export default store;