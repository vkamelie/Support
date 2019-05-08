import React, { Component } from "react";
import Care from "./Groups/topics/CareGiver";
import Liver from "./Groups/topics/Liver";
import Heart from "./Groups/topics/Heart";
import AddPost from "./Groups/topics/AddPost";
import axios from "axios";
import Kidney from "./Groups/topics/Kidney";
// import { connect } from "react-redux";
// import { setBlog } from "../../redux/blogReducer";

import "./Blog.css";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      comments: []
    };
  }

  componentDidMount() {
    this.getAll();
  }

  getAll = () => {
    axios.get("/api/blogs").then(blogs => {
      this.setState({ blogs: blogs.data });
    });
  };

  addBlog = (title, content, cat) => {
    let obj = {
      title,
      content,
      cat
    };
    axios
      .post("/api/blogs", obj)
      .then(res => {
        this.setState({ blogs: res.data });
      })
      .catch(function(error) {
        console.log(error);
      });

    //   updatePost = (id, content) => {
    //     axios.put(`/api/blogs/${id}/${content}`).then(res => {
    //       console.log(res.data);
    //       this.setState({ blogs: res.data });
    //     });
    //   };
    // };
  };
  render() {
    return (
      <div className="main-blog">
        <div>
          <Kidney
            allBlogs={this.state.blogs}
            addBlog={this.addBlog}
            getAll={this.getAll}
            update={this.updatePost}
          />
          <AddPost addBlog={this.addBlog} allBlogs={this.state.blogs} />
        </div>
        <div>
          <Care
            allBlogs={this.state.blogs}
            addBlog={this.addBlog}
            getAll={this.getAll}
            update={this.updatePost}
          />
          <AddPost addBlog={this.addBlog} allBlogs={this.state.blogs} />
        </div>
        <div>
          <Liver
            allBlogs={this.state.blogs}
            addBlog={this.addBlog}
            getAll={this.getAll}
            postDelete={this.postDelete}
          />
          <AddPost addBlog={this.addBlog} allBlogs={this.state.blogs} />
        </div>
        <div>
          <Heart allBlogs={this.state.blogs} getAll={this.getAll} />
        </div>
      </div>
    );
  }
}
export default Blog;
// const mapStateToProps = reduxState => {
//   return {
//     blogs: reduxState.blogs
//   };
// };

// const mapDispatchToProps = {
//   setBlog: setBlog
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Blog);
