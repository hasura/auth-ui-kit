import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../style.css';
import SignUpMessage from '../SignUp/SignUpMessage';
import Back from '../Common/Back';
import ErrorMsg from '../Common/ErrorMsg';
import globals from '../Common/globals';
import { emailForgotPassword } from '../Common/api';
class ForgotPasswordEmail extends Component {
  state = {
    isProgressing: false,
    response: null,
  };

  enterProgressing = status => {
    this.setState({ isProgressing: status });
  };

  authRespCallback = resp => {
    this.setState({ response: resp });
  };

  render() {
    const pageWrapperThemeClass =
      globals.theme === 'light'
        ? 'LightLandingPageWrapper'
        : 'DarkLandingPageWrapper';
    const pageInnerThemeClass =
      globals.theme === 'light'
        ? 'LightLandingPageInnerWrapper'
        : 'DarkLandingPageInnerWrapper';
    const formGroupThemeClass =
      globals.theme === 'light'
        ? 'LightFormGroupWrapper'
        : 'DarkFormGroupWrapper';
    const headerDescriptionClass =
      globals.theme === 'light'
        ? 'lightHeaderDescription'
        : 'darkHeaderDescription';
    let submitBtnText = 'Send Email';
    if (this.state.isProgressing) {
      submitBtnText = (
        <span>
          <i className="fa fa-spinner fa-spin" /> Sending Email..
        </span>
      );
    }
    return (
      <div
        className={
          'displayFlex landingPageWrapper container-fluid ' +
          pageWrapperThemeClass
        }
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Forgot Password</title>
        </Helmet>
        <div className={'landingPageInnerWidth'}>
          <Back backUrl={'/ui/login/email'} />
          <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
            <div className="signUpWrapper">
              <div className={headerDescriptionClass}>Forgot Password</div>
              <div className="descriptionText">
                Hello! Submit your email to reset your password
              </div>
              <ErrorMsg response={this.state.response} />
              <form
                className={formGroupThemeClass}
                onChange={() => {
                  this.setState({ response: null });
                }}
                onSubmit={e => {
                  e.preventDefault();
                  if (this.email.value !== '') {
                    this.enterProgressing(true);
                    emailForgotPassword(this.email.value)
                      .then(resp => {
                        this.enterProgressing(false);
                        alert('Email Sent. Please check your inbox');
                      })
                      .catch(resp => {
                        this.enterProgressing(false);
                        this.setState({ response: resp });
                      });
                  } else {
                    alert('Enter an email id to send a forgot password email');
                  }
                }}
              >
                <div className="formInput">
                  <label className="formLabel">Email ID</label>
                  <input
                    type="email"
                    ref={input => {
                      this.email = input;
                    }}
                  />
                </div>
                <div className="signInbtn">
                  <a>
                    <button type="submit">{submitBtnText}</button>
                  </a>
                </div>
              </form>
            </div>
          </div>
          <SignUpMessage location={this.props.location} />
        </div>
      </div>
    );
  }
}

export default ForgotPasswordEmail;
