import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../redux/userReducer";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      username: "",
      password: "",
      name: ""
    };
  }

  signUp() {
    const signupPayload = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name
    };
    console.log(signupPayload);
    axios.post("/api/signup", signupPayload).then(res => {
      this.props.setUser(res.data);
      console.log("user signed up");
    });
  }

  render() {
    const { username, password, name } = this.state;
    console.log(username, password, name);
    return (
      <div className="main-form">
        <div>
          <form>
            <h1>Join Our Community!</h1>
            <input
              type="text"
              placeholder="Username"
              onChange={event =>
                this.setState({ username: event.target.value })
              }
            />

            <input
              type="text"
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
            />

            <input
              type="text"
              placeholder="Name"
              onChange={e => this.setState({ name: e.target.value })}
            />

            <button type="button" onClick={() => this.signUp()}>
              Sign Up
            </button>
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
)(SignUp);
