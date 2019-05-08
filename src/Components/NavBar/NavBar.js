import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./NavBar.css";

import { setBlog } from "../../redux/blogReducer";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      navToggle: false
    };
  }
  // componentDidMount() {
  //   this.getAll();
  // }

  // getAll = () => {
  //   axios.get("/api/blogs").then(blogs => {
  //     this.props.setBlog(blogs.data);
  //     console.log(blogs, "nav blogs");
  //   });
  // };

  render() {
    //let { navToggle } = this.state;
    //let { signedInUser } = this.props.user;

    return (
      <div className="navbar">
        <nav>
          <div className="logo">
            <h4>Transplant Support</h4>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resources">Resources </Link>
            </li>
            <li>
              <Link to="/forum">Forum</Link>
            </li>
            <li>
              <Link to="/chat">Chat Room</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>

          <div className="burger">
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user: reduxState.user,
    blogs: reduxState.blogs
  };
};

const mapDispatchToProps = {
  setBlog: setBlog
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
