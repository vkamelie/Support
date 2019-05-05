import React, { Component } from "react";
import "./topics.css";

// import { connect } from "react-redux";
//import axios from "axios";

class Heart extends Component {
  render() {
    console.log(this.props);

    const { allBlogs } = this.props;
    const blogsList = allBlogs.map(blog => {
      return blog.category === "Heart" ? (
        <div key={blog.post_id}>
          <div>{blog.author}</div>
          <div>{blog.post_title}</div>
          <div>{blog.post_text}</div>
        </div>
      ) : null;
    });

    return (
      <div className="main">
        <div className="head">Heart Support Group</div>

        {blogsList}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     blog: state.blog.blogs
//   };
// }

export default Heart;
