import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import SocialLoginWrapper from './SocialLoginWrapper';
import SignInMessage from './SignInMessage';
import Back from './Back';
import ErrorMsg from './ErrorMsg';
import { usernameSignUp, handleAuthResponse } from './api';
import globals from './globals';
import './style.css';
class SignUpUsername extends Component {
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
    let submitBtnText = 'Sign up';
    if (this.state.isProgressing) {
      submitBtnText = (
        <span>
          <i className="fa fa-spinner fa-spin" /> Signing up..
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
          <title>Sign Up with Username</title>
        </Helmet>
        <div className={'landingPageInnerWidth'}>
          <Back backUrl={'/ui/signup'} />
          <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
            <div className="signUpWrapper">
              <div className={headerDescriptionClass}>Sign Up</div>
              <div className="descriptionText">
                Hello! Sign Up with your username
              </div>
              <ErrorMsg response={this.state.response} />
              <form
                className={formGroupThemeClass}
                onChange={() => {
                  this.setState({ response: null });
                }}
                onSubmit={e => {
                  e.preventDefault();
                  this.enterProgressing(true);
                  if (this.password.value === this.confirm_password.value) {
                    usernameSignUp(this.username.value, this.password.value)
                      .then(resp => {
                        this.enterProgressing(false);
                        handleAuthResponse(resp, this.authRespCallback);
                      })
                      .catch(resp => {
                        this.enterProgressing(false);
                        this.setState({ response: resp });
                      });
                  } else {
                    alert("Passwords don't match. Try again");
                  }
                }}
              >
                <div className="formInput">
                  <label className="formLabel">Username</label>
                  <input
                    type="text"
                    ref={input => {
                      this.username = input;
                    }}
                  />
                </div>
                <div className="formInput">
                  <label className="formLabel">Password</label>
                  <input
                    type="password"
                    ref={input => {
                      this.password = input;
                    }}
                  />
                </div>
                <div className="formInput">
                  <label className="formLabel">Confirm Password</label>
                  <input
                    type="password"
                    ref={input => {
                      this.confirm_password = input;
                    }}
                  />
                </div>
                <div className="signInbtn">
                  <a>
                    <button type="submit">{submitBtnText}</button>
                  </a>
                </div>
              </form>
              <SocialLoginWrapper />
            </div>
          </div>
          <SignInMessage location={this.props.location} />
        </div>
      </div>
    );
  }
}

export default SignUpUsername;
