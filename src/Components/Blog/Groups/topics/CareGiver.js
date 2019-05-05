import React from "react";
import "./topics.css";
import AddPost from "./AddPost";

const Care = props => {
  const { allBlogs } = props;
  const blogsList = allBlogs.map(blog => {
    return blog.category === "Care Giver" ? (
      <div key={blog.post_id} id="whole-post">
        <div> Post by: {blog.author}</div>
        <div>{blog.post_title}</div>
        <div>{blog.post_text}</div>
      </div>
    ) : null;
  });

  return (
    <div className="main">
      <div className="head">Care Giver Support </div>
      {blogsList}

      <AddPost addBlog={props.addBlog} />
    </div>
  );
};

export default Care;
