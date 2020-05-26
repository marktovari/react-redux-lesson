So here is how Redux works in a nutshell.

//BASICS
1. We have our COMPONENT.
2. The Component sends an ACTION off.
3. REDUCER rebuilds the STORE based on which ACTION triggered it
4. The App,js takes in the exported STORE as a prop.


//BASICS EXPLAINED
1. We have our COMPONENT.
    - Peacefully sitting in the App.js, surrounded by the <Provider> metacompnent
2. The Component sends an ACTION off.
    - Someone pushes a button, a key, submits a change, et cetera
    - this.props.ACTIONfunction()
    - returns some important object literals, first the type of the action
        type: action_type
    - also the data if any 
        payload: posts    
    (note that you can rename the object literals as anything that you think you can recognize later)
3. REDUCER rebuilds the STORE based on which ACTION triggered it
    - The reduce creates a preloadedState, and empty array
        items: [] (can be named as anything)
    - The reducer is a huge switch statement that
        calls in on the "action.type" in the step above as condition
        then returns the state and passes in the payload from the action above
4. The App,js takes in the exported STORE as a prop.
    - We pass it in as a prop to the <Provider> metacompnent
    - then in the article it is just DOM manipulation


//AD HOC (the way we did it in this specific case)
1. We have our COMPONENT.
    - ArticleList Peacefully sitting in the App.js, surrounded by the <Provider> metacompnent
2. The Component sends an ACTION off.
    - used componentDidMount(), so it automatically starts without the reader having to do anything
    - the action itself is just a fetch request taking stuff from the database
        type: action_type
        payload: posts
    - important to note that it will call the fetched data "posts". This is how the component will refer to it later
3. REDUCER rebuilds the STORE based on which ACTION triggered it
    - The reduce creates a preloadedState, and empty array
        items: []
    - The reducer is a huge switch statement that
        calls in on the "action.type" in the step above as condition
        then returns the state and passes in the payload from the action above
        ...state
        items: action.payload
4. The App.js takes in the exported STORE as a prop.
    - We pass it in as a prop to the <Provider> metacompnent
    - the ArticleList component displays it as posts
        posts.title
        posts.articlebody