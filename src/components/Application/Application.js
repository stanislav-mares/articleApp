import React from 'react';
import PropTypes from 'prop-types';

//components
import Article from 'components/Article/Article';
import Comments from 'components/Comments/Comments';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      article: {},
      comments: []
    };
  }

  componentDidMount() {
    this.getArticle();
    this.getComments();
  }

  componentWillUnmount() {
    clearTimeout(this.timerArticle);
    clearTimeout(this.timerComments);
    clearTimeout(this.getMoreComments);
  }

  //simulation of get article request
  getArticle = (callback) => {
    this.timerArticle = setTimeout(
      () => {
        this.setState({article: document.__article});
        console.log('article downloaded');
        typeof callback === 'function' && callback(document.__article);
      },
      250
    );
  }

  //simulation of  get comments request
  getComments = (callback) => {
    this.timerComments = setTimeout(
      () => {
        this.setState({comments: document.__comments});
        console.log('comments downloaded');
        typeof callback === 'function' && callback(document.__comments);
      },
      250
    );
  }

  //simulation of get more comments request
  getMoreComments = (callback) => {
    this.timerMoreComments = setTimeout(
      () => {
        this.setState({
          comments: [ ...this.state.comments, ...document.__moreComments]
        });
        console.log('more comments downloaded');
        typeof callback === 'function' && callback([ ...document.__moreComments ]);
      },
      250
    );
  }

  render() {

    return(
      <main>
        <Article { ...this.state.article } />
        {Object.keys(this.state.article).length > 0 &&
          <Comments comments={this.state.comments} />}
        {this.state.comments.length > 0 &&
          <button onClick={this.getMoreComments} type="button">more comments</button>}
      </main>
    );
  }
}

App.propTypes = {
  /*props*/
};
