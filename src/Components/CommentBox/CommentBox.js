import React, { Component } from "react";
import CommentList from "./CommentList/CommentList";
import CommentForm from "./CommentForm";

class CommentBox extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="commentBox">
        <h1>WHOOOO COMMENT BOX</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}

export default CommentBox;
