import React, { Component } from "react";
import {Helmet} from "react-helmet";
import './style.css';
import SignUpMessage from './SignUpMessage';
import globals from './globals';
class ForgotPassword extends Component {

  render() {
    
    const pageWrapperThemeClass = globals.theme === 'light' ? 'LightLandingPageWrapper' : 'DarkLandingPageWrapper';
    const pageInnerThemeClass = globals.theme === 'light' ? 'LightLandingPageInnerWrapper' : 'DarkLandingPageInnerWrapper';
    const formGroupThemeClass = globals.theme === 'light' ? 'LightFormGroupWrapper' : 'DarkFormGroupWrapper';

    return (
      <div className={'landingPageWrapper container-fluid ' + pageWrapperThemeClass}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Forgot Password</title>
        </Helmet>
        <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
          <div className='signUpWrapper'>
            <div className='headerDescription'>
              Forgot Password
            </div>
            <div className='descriptionText'>
              Hello! Submit your username to reset your password
            </div>
            <form className={formGroupThemeClass}>
              <div className='formInput'>
                <input type="email" placeholder='Enter username' />
              </div>
              <div className='formInput'>
                <input type="text" placeholder='otp' />
              </div>
              <div className='signInbtn'>
                <a><button>Submit</button></a>
              </div>
            </form>
            <SignUpMessage />
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword
