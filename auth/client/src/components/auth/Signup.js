import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class Signup extends Component {
  onSumbit = formProps => {
    console.log(formProps);
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
        <button>Sign Up!</button>
      </form>
    );
  }
}

export default reduxForm({ form: "signup" })(Signup);
