import React, { Component } from "react";
import "./topics.css";
import axios from "axios";

//import AddComments from "../topics/AddComments";

class Heart extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  postDelete = id => {
    axios.delete(`/api/blogs/${id}`).then(() => {
      this.props.getAll();
    });
  };

  render() {
    const { allBlogs } = this.props;

    let heartBlogs = allBlogs
      .filter(blog => blog.category === "Heart")
      .map(e => {
        return (
          <div key={e.post_id} className="main_post">
            <div className="title">Topic: {e.post_title}</div>
            <br />
            <div className="text">{e.post_text}</div>
            <br />
            <div> Posted By : {e.author}</div>
            <div>
              <button
                onClick={() => {
                  this.postDelete(e.post_id);
                }}
              >
                Delete
              </button>
              <div />
            </div>
          </div>
        );
      });

    return (
      <div className="main_post">
        <div className="post_header">Heart Giver Support </div>

        {heartBlogs}
      </div>
    );
  }
}
export default Heart;
