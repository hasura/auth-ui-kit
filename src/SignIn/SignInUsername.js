import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import SocialLoginWrapper from '../SocialLogin/SocialLoginWrapper';
import { usernameSignIn, handleAuthResponse } from '../Common/api';
import SignUpMessage from '../SignUp/SignUpMessage';
import Back from '../Common/Back';
import ErrorMsg from '../Common/ErrorMsg';
import globals from '../Common/globals';
import '../style.css';
class SignInUsername extends Component {
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
    let submitBtnText = 'Login';
    if (this.state.isProgressing) {
      submitBtnText = (
        <span>
          <i className="fa fa-spinner fa-spin" /> Logging in..
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
          <title>Login with Username</title>
        </Helmet>
        <div className={'landingPageInnerWidth'}>
          <Back backUrl={'/ui'} />
          <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
            <div className="signUpWrapper">
              <div className={headerDescriptionClass}>Login</div>
              <div className="descriptionText">
                Hello! Login with your Username
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
                  usernameSignIn(this.username.value, this.password.value)
                    .then(resp => {
                      this.enterProgressing(false);
                      handleAuthResponse(resp, this.authRespCallback);
                    })
                    .catch(resp => {
                      this.enterProgressing(false);
                      this.setState({ response: resp });
                    });
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
                <div className="signInbtn">
                  <a>
                    <button type="submit">{submitBtnText}</button>
                  </a>
                </div>
              </form>
              <SocialLoginWrapper />
            </div>
          </div>
          <SignUpMessage location={this.props.location} />
        </div>
      </div>
    );
  }
}

export default SignInUsername;
