import React from 'react';
import PropTypes from 'prop-types';

import dateSort from 'SharedFunc/SharedFunc';

const Comments = (props) => {

  //sorting comments
  let sortedComments = dateSort(props.comments);

  //creating list of comments
  const comments = sortedComments.map((comment, i) => {
    return(
      <li key={i}>
        <p>{comment.text}</p>
        <h4>{`${comment.author}, ${new Date(comment.date).toLocaleString()}`}</h4>
      </li>
    );
  });

  return(
    <div>
      <h3>Comments:</h3>
      <ul>
        {comments}
      </ul>
    </div>
  );
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      text: PropTypes.string,
      date: PropTypes.string
    })
  ),
};

export default Comments;
