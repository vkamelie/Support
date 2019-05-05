import React, { Component } from "react";
import { connect } from "react-redux";

class AddHeartPost extends Component {
  state = {
    author: null,
    title: "",
    content: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Add Post to Heart</h5>
          <div>
            <input onChange={this.handleChange} />
            <label>Project Title</label>
          </div>
          <div>
            <textarea onChange={this.handleChange} />
            <label>Project Content</label>
          </div>
          <div>
            <button>Create</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    author: reduxState.user
  };
};
export default connect(mapStateToProps)(AddHeartPost);
