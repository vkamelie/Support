import React, { Component } from "react";

class CommentList extends Component {
  constructor() {
    super();
  }

  render() {
    const commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return <div className="commentList">{commentNodes}</div>;
  }
}

export default CommentList;
