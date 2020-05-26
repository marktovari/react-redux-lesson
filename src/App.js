import React, { Component } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import Opening from './components/Opening';
import About from './components/About'
import More from './components/More'

//Redux
import { Provider } from "react-redux";
import store from "./store"

class App extends Component {
  render() {
    return(
      /*We add the Provider component and the property "store"
      Which is essentially component drilling the Provider in the main App.js
      except the provider will oversee the states of all the Components within*/
        <Provider store={store}>
          <Opening/>
          <ArticleList/>
          <More/>
          <About/>
        </Provider>
    )
  };
}

export default App;
