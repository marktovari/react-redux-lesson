import React, { Component } from 'react';

export class Article extends Component {
    render() {
        return (
            <div className = "articlebox">
                {/* <div>
                    <Image />
                </div> */}
                <div>
                    <p className="title">{this.props.article.title}</p>
                    <p className="articlebody">{this.props.article.body}</p>
                </div>
            </div>
        )
    }
}

export default Article