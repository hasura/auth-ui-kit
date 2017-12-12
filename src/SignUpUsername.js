import React, { Component } from "react";
import {Helmet} from 'react-helmet';
import SocialLoginWrapper from './SocialLoginWrapper';
import SignInMessage from './SignInMessage';
import {usernameSignUp} from './api';
import globals from './globals';
import './style.css';
class SignUpUsername extends Component {

  render() {

    const pageWrapperThemeClass = globals.theme === 'light' ? 'LightLandingPageWrapper' : 'DarkLandingPageWrapper';
    const pageInnerThemeClass = globals.theme === 'light' ? 'LightLandingPageInnerWrapper' : 'DarkLandingPageInnerWrapper';
    const formGroupThemeClass = globals.theme === 'light' ? 'LightFormGroupWrapper' : 'DarkFormGroupWrapper';

    return (
      <div className={'landingPageWrapper container-fluid ' + pageWrapperThemeClass}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sign up with Username</title>
        </Helmet>
        <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
          <div className='signUpWrapper'>
            <div className='headerDescription'>
              Sign Up
            </div>
            <div className='descriptionText'>
              Hello! Sign up with your username
            </div>
            <form className={formGroupThemeClass} onSubmit={(e) => {
                e.preventDefault();
                if (this.password.value === this.confirm_password.value) {
                  usernameSignUp(this.username.value, this.password.value);
                } else {
                  alert("Passwords don't match. Try again");
                }
              }}>
              <div className='formInput'>
                <input type="text" placeholder='Username' ref={(input) => { this.username = input; }} />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Password' ref={(input) => { this.password = input; }} />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Confirm Password' ref={(input) => { this.confirm_password = input; }} />
              </div>
              <div className='signInbtn'>
                <a><button type="submit">Sign up</button></a>
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

export default SignUpUsername;
