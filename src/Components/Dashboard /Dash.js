import React, { Component } from "react";
import Chat from "../ChatRoom/Chat";
import Blog from "../Blog/Blog";
// import RoomChat from "../ChatRoom/RoomChat/RoomChat";
//import Res from "../Resources/Res";
//import SignUp from "../SignUp/SignUp";
//import Login from "../Login/Login";
import "./Dash.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Dash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user.user
    };
  }

  render() {
    console.log(this.props);

    return (
      <div className="dash">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Transplant Community</h1>
            <h3>We want to hear what you have to say.</h3>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
          </div>
        </div>
        <Chat />
        <Blog />
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    user: reduxState.user
  };
};

export default connect(mapStateToProps)(Dash);
