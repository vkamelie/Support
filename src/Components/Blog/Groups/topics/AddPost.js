import React, { Component } from "react";
// import { connect } from "react-redux";
// import { setUser } from "../../../redux/userReducer";
import "./AddPost.css";
import { connect } from "react-redux";
import { setBlog } from "../../../../redux/blogReducer";
//import axios from "axios";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      title: "",
      content: "",
      cat: "Heart"
    };
  }

  addTitle = v => {
    this.setState({ title: v });
  };

  addContent = v => {
    this.setState({ content: v });
  };

  addCat = v => {
    this.setState({ cat: v });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, content, cat } = this.state;
    console.log(title, content, cat, "this one rn");
    this.props.addBlog(title, content, cat);
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const { author, title, content, cat } = this.state;
  //   console.log(
  //     "author:",
  //     author,
  //     "title:",
  //     title,
  //     "content:",
  //     content,
  //     "cat:",
  //     cat
  //   );
  //   axios.post("/api/blogs", author, title, content, cat).then(res => {
  //     this.props.setBlog(res.data);
  //     console.log("post added");
  //   });
  // };

  // addBlog = (author, title, content, cat) => {
  //   let obj = {
  //     author,
  //     title,
  //     content,
  //     cat
  //   };
  //   axios
  //     .post("/api/blogs", obj)
  //     .then(res => {
  //       this.props.setBlog({ blogs: res.data });
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // };
  render() {
    console.log(this.state);
    return (
      <div className="add_post">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Add a Topic"
              onChange={e => this.setState({ title: e.target.value })}
            />
          </div>
          <div>
            <textarea
              name="content"
              id="content"
              onChange={e => this.setState({ content: e.target.value })}
            />
          </div>
          <label>Pick a Catogory</label>

          <select
            name="cat"
            id="cat"
            onChange={e => this.setState({ cat: e.target.value })}
          >
            <option value="Heart">Heart</option>
            <option value="Liver">Liver</option>
            <option value="Care Giver">Care Giver</option>
          </select>

          <button type="submit">Add Post</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
    user: state.user
  };
};

const mapDispatchToProps = {
  setBlog: setBlog
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPost);
