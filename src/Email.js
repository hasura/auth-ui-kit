import React, { Component } from "react";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
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
          <title>Login with Email</title>
        </Helmet>
        <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
          <div className='signUpWrapper'>
            <div className='headerDescription'>
              Login
            </div>
            <div className='descriptionText'>
              Hello! Login with Email
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
                <Link to={{pathname: '/ui/forgot-password', search: this.props.location.search}}> Forgot Password?</Link>
              </div>
              <div className='signInbtn'>
                <a><button type='submit'>Login</button></a>
              </div>
            </form>
            <SocialLoginWrapper />
            <SignUpMessage location={this.props.location} />
          </div>
        </div>
      </div>
    );
  }
}

export default Email
