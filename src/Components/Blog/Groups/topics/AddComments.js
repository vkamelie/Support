import React, { Component } from "react";
import { addComment } from "../../../../redux/commentReducer";
import { connect } from "react-redux";
import axios from "axios";

class AddComment extends Component {
  constructor() {
    super();
    this.state = {
      comment: []
    };
  }

  postComment = v => {
    this.setState({ comment: v });
  };

  commentAdd() {
    const com = {
      comment: this.state.comment
    };
    axios.post("/api/comments", com).then(res => {
      this.props.addComment(res.data);
      console.log("comment added");
    });
  }

  render() {
    return (
      <div className="comment-form">
        <input
          type="text"
          onChange={e => this.setState({ comment: e.target.value })}
        />
        <button type="submit" onClick={() => this.commentAdd()}>
          Add Comment
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

const mapDispatchToProps = {
  addComment: addComment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComment);
