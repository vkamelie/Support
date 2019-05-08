import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { setUser } from "../../redux/userReducer";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      username: "",
      password: ""
    };
    this.login = this.login.bind(this);
  }

  login() {
    const loginPayload = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post("/api/login", loginPayload)
      .then(res => {
        this.props.setUser(res.data);
        console.log("user signed in");
      })
      .catch(error => console.log(error));
  }

  logout = () => {
    axios.get("/api/logout").then(() => {
      this.props.setUser(null);
    });
  };

  render() {
    console.log(this.props.user.user);
    return (
      <div className="main-login">
        <div>
          <form>
            <input
              type="text"
              placeholder="username"
              onChange={e => this.setState({ username: e.target.value })}
            />

            <input
              type="password"
              placeholder="password"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <Link to="/">
              <button type="button" onClick={() => this.login()}>
                Login!
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user: reduxState.user
  };
};

const mapDispatchToProps = {
  setUser: setUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
