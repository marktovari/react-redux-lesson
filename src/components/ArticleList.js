import React, { Component } from 'react'
import { fetchArticles } from '../actions/articleAction'
import { connect } from 'react-redux'

export class ArticleList extends Component {
  /*Lifecycle method componentDidMount goes off after comonent mounted.*/

  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    /*We create a variable, which takes the property in the state of the component,
    and uses .map() to create a new array from the.
    Using JSX, it puts every member of the the array into html */
    const postItems = this.props.posts.map(post => (
      <div key={post.id} className="articlebox">
        <p className="title">{post.title}</p>
        <p className="articlebody">{post.articlebody}</p>
      </div>
    ));
    return (
      <div>
        {postItems}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  /*We use articles because this is what's define in the rootReducer*/
  posts: state.posts.items //the articles here are the same as the ones in the state.
});

/*Connecting the element to the store, we need to export it in a special way */
export default connect(mapStateToProps, { fetchArticles })(ArticleList);