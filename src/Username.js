import React, { Component } from "react";
import {Helmet} from 'react-helmet';
import SocialLoginWrapper from './SocialLoginWrapper';
import {usernameSignIn} from './api';
import SignUpMessage from './SignUpMessage';
import Back from './Back';
import globals from './globals';
import './style.css';
class Username extends Component {

  render() {

    const pageWrapperThemeClass = globals.theme === 'light' ? 'LightLandingPageWrapper' : 'DarkLandingPageWrapper';
    const pageInnerThemeClass = globals.theme === 'light' ? 'LightLandingPageInnerWrapper' : 'DarkLandingPageInnerWrapper';
    const formGroupThemeClass = globals.theme === 'light' ? 'LightFormGroupWrapper' : 'DarkFormGroupWrapper';

    return (
      <div className={'displayFlex landingPageWrapper container-fluid ' + pageWrapperThemeClass}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Login with Username</title>
        </Helmet>
        <div className={'landingPageInnerWidth'}>
          <Back />
          <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
            <div className='signUpWrapper'>
              <div className='headerDescription'>
                Login
              </div>
              <div className='descriptionText'>
                Hello! Login with your Username
              </div>
              <form className={formGroupThemeClass} onSubmit={(e) => {
                  e.preventDefault();
                  usernameSignIn(this.username.value, this.password.value);
                }}>
                <div className='formInput'>
                  <label className='formLabel'>
                    Username
                  </label>
                  <input type="text" ref={(input) => { this.username = input; }} />
                </div>
                <div className='formInput'>
                  <label className='formLabel'>
                    Password
                  </label>
                  <input type="password" ref={(input) => { this.password = input; }} />
                </div>
                <div className='signInbtn'>
                  <a><button type="submit">Login</button></a>
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

export default Username
