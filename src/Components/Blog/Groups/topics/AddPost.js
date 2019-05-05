import React, { Component } from "react";
// import { connect } from "react-redux";
// import { setUser } from "../../../redux/userReducer";
import "./AddPost.css";
import axios from "axios";

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

  addBlog = () => {
    const { author, title, content, cat } = this.state;
    const payload = {
      author,
      title,
      content,
      cat
    };
    axios.post("/api/blogs", payload);
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  addTitle = v => {
    this.setState({ title: v });
  };

  addContent = v => {
    this.setState({ content: v });
  };

  addCat = v => {
    this.setState({ cat: v });
  };

  render() {
    console.log(this.state);
    return (
      <div className="post_div">
        <form onSubmit={e => e.preventDefault()}>
          <div>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="title"
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

          <button type="submit" onClick={this.addBlog}>
            Add Post
          </button>
        </form>
      </div>
    );
  }
}

export default AddPost;
