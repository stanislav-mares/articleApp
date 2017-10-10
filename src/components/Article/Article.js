import React from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {

  return(
      <div>
        <h2>Article:</h2>
        {props.text && (props.text.length > 0) ? <p>{props.text}</p> : 'No text'}
        {props.author && (props.author.length > 0) ?
          <h4>{`${props.author}, ${new Date(props.date).toLocaleString()}`}</h4> : 'No author'}
        <hr />
      </div>
    );
}

Article.propTypes = {
  text: PropTypes.string,
  autor: PropTypes.string,
  date: PropTypes.string
};

export default Article;
