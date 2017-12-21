import React, { Component } from "react";
import {Helmet} from "react-helmet";
import './style.css';
import SignUpMessage from './SignUpMessage';
import Back from './Back';
import globals from './globals';
import {emailForgotPassword} from './api';
class ForgotPasswordEmail extends Component {

  render() {

    const pageWrapperThemeClass = globals.theme === 'light' ? 'LightLandingPageWrapper' : 'DarkLandingPageWrapper';
    const pageInnerThemeClass = globals.theme === 'light' ? 'LightLandingPageInnerWrapper' : 'DarkLandingPageInnerWrapper';
    const formGroupThemeClass = globals.theme === 'light' ? 'LightFormGroupWrapper' : 'DarkFormGroupWrapper';
    const headerDescriptionClass = globals.theme === 'light' ? 'lightHeaderDescription' : 'darkHeaderDescription';
    return (
      <div className={'displayFlex landingPageWrapper container-fluid ' + pageWrapperThemeClass}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Forgot Password</title>
        </Helmet>
        <div className={'landingPageInnerWidth'}>
          <Back />
          <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
            <div className='signUpWrapper'>
              <div className={headerDescriptionClass}>
                Forgot Password
              </div>
              <div className='descriptionText'>
                Hello! Submit your email to reset your password
              </div>
              <form className={formGroupThemeClass} onSubmit={(e) => {
                  e.preventDefault();
                  if (this.email.value !== '') {
                    emailForgotPassword(this.email.value);
                  } else {
                    alert("Enter an email id to send a forgot password email");
                  }
                }}>
                <div className='formInput'>
                  <label className='formLabel'>
                    Email ID
                  </label>
                  <input type="email" ref={(input) => { this.email = input; }} />
                </div>
                <div className='signInbtn'>
                  <a><button type='submit'>Submit</button></a>
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

export default ForgotPasswordEmail
