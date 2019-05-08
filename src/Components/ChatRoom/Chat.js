import React, { Component } from "react";
import io from "socket.io-client";
import { connect } from "react-redux";

import "./Chat.css";

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.user,
      message: "",
      messages: []
    };
    this.socket = io.connect("http://192.168.0.58:4000/");

    this.socket.on("RECEIVE_MESSAGE", function(data) {
      addMessage(data);
    });

    const addMessage = data => {
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
      console.log(this.state.messages);
    };

    this.sendMessage = e => {
      e.preventDefault();
      console.log(this.props);
      console.log();
      this.socket.emit("SEND_MESSAGE", {
        author: this.props.user.user.name,
        message: this.state.message
      });

      this.setState({ message: "" });
    };
  }

  render() {
    console.log(this.state.name);
    console.log(this.props.user.name);
    return (
      <div className="container">
        <div className="row">
          <div className="">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Be part of the Discussion</div>
                <hr />
                <div className="messages">
                  {this.state.messages.map(message => {
                    return (
                      <div>
                        {message.author}:{message.message}
                      </div>
                    );
                  })}
                </div>
                <div className="chat-foot">
                  {/* <input
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={ev =>
                      this.setState({ username: ev.target.value })
                    }
                    className="form-control"
                  />
                  <br /> */}
                  <input
                    type="text"
                    placeholder="Message"
                    className="form-control"
                    value={this.state.message}
                    onChange={ev => this.setState({ message: ev.target.value })}
                  />
                  <br />
                  <button onClick={this.sendMessage}>Send</button>
                </div>
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps)(Chat);
