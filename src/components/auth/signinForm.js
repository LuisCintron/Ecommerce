import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput } from '../formFields';

class SignInForm extends Component {
  render() {
    const { className } = this.props;
    return (
      <form className={`${className} sign-in-form`}>
        <Field className='sign-in-form_email'
          type='email' title='Email' placeholder='Email' name='email' component={FormInput} />
        <Field className='sign-in-form_email'
          type='password' title='Password' placeholder='Password' name='email' component={FormInput} />
      </form>
    )
  }
}

SignInForm = reduxForm({
  form: 'SignInForm'
})(SignInForm);

export default SignInForm;