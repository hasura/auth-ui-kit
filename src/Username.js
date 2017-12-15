import React, { Component } from "react";
import {Helmet} from 'react-helmet';
import SocialLoginWrapper from './SocialLoginWrapper';
import {usernameSignIn} from './api';
import SignUpMessage from './SignUpMessage';
import globals from './globals';
import './style.css';
class Username extends Component {

  render() {

    const pageWrapperThemeClass = globals.theme === 'light' ? 'LightLandingPageWrapper' : 'DarkLandingPageWrapper';
    const pageInnerThemeClass = globals.theme === 'light' ? 'LightLandingPageInnerWrapper' : 'DarkLandingPageInnerWrapper';
    const formGroupThemeClass = globals.theme === 'light' ? 'LightFormGroupWrapper' : 'DarkFormGroupWrapper';

    return (
      <div className={'landingPageWrapper container-fluid ' + pageWrapperThemeClass}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Login with Username</title>
        </Helmet>
        <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
          <div className='signUpWrapper'>
            <div className='headerDescription'>
              Login
            </div>
            <div className='descriptionText'>
              Hello! Login with Username
            </div>
            <form className={formGroupThemeClass} onSubmit={(e) => {
                e.preventDefault();
                usernameSignIn(this.username.value, this.password.value);
              }}>
              <div className='formInput'>
                <input type="text" placeholder='Username' ref={(input) => { this.username = input; }} />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Password' ref={(input) => { this.password = input; }} />
              </div>
              <div className='signInbtn'>
                <a><button type="submit">Login</button></a>
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

export default Username
