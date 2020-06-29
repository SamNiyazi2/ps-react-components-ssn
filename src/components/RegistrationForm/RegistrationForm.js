
// 06/29/2020 01:39 am - SSN - [20200629-0124] - [001] - M08 - Organisms

// Copied from downloaded file


import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import PasswordInput from '../PasswordInput';

/** Registration form with built-in validation. */
class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      errors: {},
      submitted: false,
    };
  }

  onChange = (event) => {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  // Returns a number from 0 to 100 that represents password quality.
  // For simplicity, just returning % of min length entered.
  // Could enhance with checks for number, special char, unique characters, etc.
  passwordQuality(password) {
    if (!password) return null;
    if (password.length >= this.props.minPasswordLength) return 100;
    const percentOfMinLength = parseInt(password.length / this.props.minPasswordLength * 100, 10);
    return percentOfMinLength;
  }

  validate({ email, password, confirmPassword }) {
    const errors = {};
    const { minPasswordLength } = this.props;

    if (!email) errors.email = 'Email required.';
    if (password.length < minPasswordLength) errors.password = `Password must be at least ${minPasswordLength} characters.`;

    if (confirmPassword && password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    this.setState({ errors });
    const formIsValid = Object.getOwnPropertyNames(errors).length === 0;
    return formIsValid;
  }

  onSubmit = () => {
    const { user } = this.state;
    const formIsValid = this.validate(user);

    
    const errors = {};


    if (formIsValid) {

      let returnValue = this.props.onSubmit(user);
      console.log('RegistratoinForm: onSumit');
      console.log('returnValue [', returnValue, ']');


      let confirmationMessage = "NotSet-1101";


      switch (returnValue) {

        case -1:
          errors.email = "Invalid user name or password";
          break;

        case -2:
          errors.email = "Invalid user name or password"; // Email not found
          break;

        case 1:
          confirmationMessage = "Welcome back " + user.email;
          break;

        case 2:
          confirmationMessage = "Thanks for registering!";
          break;


        default:
          errors.email = "Unknown error [" + returnValue + "]";

      }

      if (returnValue > 0) {
        this.setState({ submitted: true, confirmationMessage: confirmationMessage });
      }

    }
    
    if (errors) {
      this.setState({ errors });
    }

  }


  render() {
    const { errors, submitted } = this.state;
    const { email, password, confirmPassword } = this.state.user;

    return (
      submitted ?
        // <h2>{this.props.confirmationMessage}</h2> :
        <h2>{this.state.confirmationMessage}</h2> :
        <div>
          <TextInput
            htmlId="registration-form-email"
            name="email"
            onChange={this.onChange}
            label="Email"
            value={email}
            error={errors.email}
            required />

          <PasswordInput
            htmlId="registration-form-password"
            name="password"
            label="Password"
            value={password}
            onChange={this.onChange}
            quality={this.passwordQuality(password)}
            showVisibilityToggle
            maxLength={50}
            error={errors.password} />



          <PasswordInput
            htmlId="registration-form-confirm-password"
            name="confirmPassword"
            label="Confirm password"
            onChange={this.onChange}
            quality={this.passwordQuality(confirmPassword)}
            showVisibilityToggle
            maxLength={50}
            error={errors.confirmPassword} />

          <input type="submit" value="Register" onClick={this.onSubmit} />
        </div>
    )
  }
}

RegistrationForm.propTypes = {
  // /** Message displayed upon successful submission */
  // confirmationMessage: PropTypes.string,

  /** Called when form is submitted */
  onSubmit: PropTypes.func.isRequired,

  /** Minimum password length */
  minPasswordLength: PropTypes.number
}

RegistrationForm.defaultProps = {
  // confirmationMessage: "Thanks for registering!",
  minPasswordLength: 8
};

export default RegistrationForm;
