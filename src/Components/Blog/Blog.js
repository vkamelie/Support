import React, { Component } from "react";
import Care from "./Groups/topics/CareGiver";
import Liver from "./Groups/topics/Liver";
import Heart from "./Groups/topics/Heart";

import axios from "axios";
import "./Blog.css";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    this.getAll();
  }

  getAll = () => {
    axios.get("/api/blogs").then(res => {
      this.setState({ blogs: res.data });
    });
  };

  addBlog = post => {
    let newBlogs = [...this.state.blogs, post];
    this.setState({ blogs: newBlogs });
    axios.post("/api/blogs", newBlogs);
  };

  render() {
    return (
      <div className="main-blog">
        <div>
          <Care allBlogs={this.state.blogs} addBlog={this.addBlog} />
        </div>
        <div>
          <Liver allBlogs={this.state.blogs} />
        </div>
        <div>
          <Heart allBlogs={this.state.blogs} getAll={this.getAll} />
        </div>
      </div>
    );
  }
}
