import React, { Component } from "react";
import {Helmet} from "react-helmet";
import { NavLink } from "react-router-dom";
import {emailSignIn} from './api';
import SocialLoginWrapper from './SocialLoginWrapper';
import SignUpMessage from './SignUpMessage';
import globals from './globals';
import './style.css';
class Email extends Component {

  render() {

    const pageWrapperThemeClass = globals.theme === 'light' ? 'LightLandingPageWrapper' : 'DarkLandingPageWrapper';
    const pageInnerThemeClass = globals.theme === 'light' ? 'LightLandingPageInnerWrapper' : 'DarkLandingPageInnerWrapper';
    const formGroupThemeClass = globals.theme === 'light' ? 'LightFormGroupWrapper' : 'DarkFormGroupWrapper';
  
    return (
      <div className={'landingPageWrapper container-fluid ' + pageWrapperThemeClass}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sign in with Email</title>
        </Helmet>
        <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
          <div className='signUpWrapper'>
            <div className='headerDescription'>
              Sign In
            </div>
            <div className='descriptionText'>
              Hello! Sign in with your email
            </div>
            <form className={formGroupThemeClass} onSubmit={(e) => {
                e.preventDefault();
                emailSignIn(this.email.value, this.password.value);
              }}>
              <div className='formInput'>
                <input type="email" placeholder='Email' ref={(input) => { this.email = input; }} />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Password' ref={(input) => { this.password = input; }} />
              </div>
              <div className='linkDescription forgotPassword descriptionText'>
                <NavLink to='/ui/forgot-password'> Forgot Password?</NavLink>
              </div>
              <div className='signInbtn'>
                <a><button type='submit'>Sign In</button></a>
              </div>
            </form>
            <SocialLoginWrapper />
            <SignUpMessage />
          </div>
        </div>
      </div>
    );
  }
}

export default Email
