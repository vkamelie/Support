import React from "react";
import "./topics.css";

const Liver = props => {
  const { allBlogs } = props;
  const blogsList = allBlogs.map(blog => {
    return blog.category === "Liver" ? (
      <div key={blog.post_id}>
        <div>{blog.author}</div>
        <div>{blog.post_title}</div>
        <div>{blog.post_text}</div>
      </div>
    ) : null;
  });

  return (
    <div className="main">
      <div className="head">Care Giver Support </div>
      {blogsList}
    </div>
  );
};

export default Liver;
