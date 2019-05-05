import React, { Component } from "react";
import Chat from "../ChatRoom/Chat";
//import Blog from "../Blog/Blog";
// import RoomChat from "../ChatRoom/RoomChat/RoomChat";
//import Res from "../Resources/Res";
import SignUp from "../SignUp/SignUp";
//import Login from "../Login/Login";
import "./Dash.css";
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
        <div className="no_user">{!this.state ? <SignUp /> : <Chat />}</div>
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
