import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signup extends Component {
  onSumbit = formProps => {
    // formProms is an obj with email, password
    // action of signup gets mapped to the props
    this.props.signup(formProps);
  };

  render() {
    // this is provided by redux form "higher order function"
    const { handleSubmit } = this.props;

    // "handleSubmit(this.onSumbit)", give "this.onSumbit" as the
    // callback function for handleSubmit()
    return (
      <form onSubmit={handleSubmit(this.onSumbit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name='email'
            type='text'
            component='input'
            autoComplete='none'
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name='password'
            type='password'
            component='input'
            autoComplete='none'
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign Up!</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

// compose allows one to apply multiple higherorder components
// to a single component with a better syntax
export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "signup" })
)(Signup);
