import React, { Component } from "react";
import {Helmet} from "react-helmet";
import SocialLoginWrapper from './SocialLoginWrapper';
import SignInMessage from './SignInMessage';
import {emailSignUp} from './api';
import globals from './globals';
import './style.css';
class SignUpEmail extends Component {

  render() {

    const pageWrapperThemeClass = globals.theme === 'light' ? 'LightLandingPageWrapper' : 'DarkLandingPageWrapper';
    const pageInnerThemeClass = globals.theme === 'light' ? 'LightLandingPageInnerWrapper' : 'DarkLandingPageInnerWrapper';
    const formGroupThemeClass = globals.theme === 'light' ? 'LightFormGroupWrapper' : 'DarkFormGroupWrapper';

    return (
      <div className={'landingPageWrapper container-fluid ' + pageWrapperThemeClass}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sign up with Email</title>
        </Helmet>
        <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
          <div className='signUpWrapper'>
            <div className='headerDescription'>
              Sign Up
            </div>
            <div className='descriptionText'>
              Hello! Sign up with your email
            </div>
            <form className={formGroupThemeClass} onSubmit={(e) => {
                e.preventDefault();
                if (this.password.value === this.confirm_password.value) {
                  emailSignUp(this.email.value, this.password.value);
                } else {
                  alert("Passwords don't match. Try again");
                }
              }}>
              <div className='formInput'>
                <input type="email" placeholder='Enter Email' ref={(input) => { this.email = input; }} />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Password' ref={(input) => { this.password = input; }} />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Confirm Password' ref={(input) => { this.confirm_password = input; }} />
              </div>
              <div className='signInbtn'>
                <a><button type="submit">Register</button></a>
              </div>
            </form>
            <SocialLoginWrapper />
            <SignInMessage />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpEmail
