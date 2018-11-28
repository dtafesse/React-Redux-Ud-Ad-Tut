import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions/index";

class CommentBox extends Component {
  state = {
    comment: ""
  };

  // bound array function, dont have to bind this
  handleChange = event => {
    this.setState({
      comment: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // Call an action creator called - saveComment
    this.props.saveComment(this.state.comment);

    this.setState({ comment: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className='fetch-comments' onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

// first arugment is reserved for the mapStateToProps Function,
// in this case, this component does not need access to the state
// second arugment - wire up all action creators

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
export default connect(
  null,
  actions
)(CommentBox);
