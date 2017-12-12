import React, { Component } from "react";
import {Helmet} from "react-helmet";
import './style.css';
import globals from './globals';
class ChangePassword extends Component {

  render() {

    const pageWrapperThemeClass = globals.theme === 'light' ? 'LightLandingPageWrapper' : 'DarkLandingPageWrapper';
    const pageInnerThemeClass = globals.theme === 'light' ? 'LightLandingPageInnerWrapper' : 'DarkLandingPageInnerWrapper';
    const formGroupThemeClass = globals.theme === 'light' ? 'LightFormGroupWrapper' : 'DarkFormGroupWrapper';
    
    return (
      <div className={'landingPageWrapper container-fluid ' + pageWrapperThemeClass}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Change Password</title>
        </Helmet>
        <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
          <div className='signUpWrapper'>
            <div className='headerDescription addPaddTop'>
              Change Password
            </div>
            <div className='descriptionText'>
              Hello! Change your password
            </div>
            <form className={formGroupThemeClass}>
              <input type="password" placeholder='Enter new password' />
            </form>
            <form className={formGroupThemeClass}>
              <input type="password" placeholder='confirm new password' />
            </form>
            <form className={formGroupThemeClass +  ' hide'}>
              <input type="text" placeholder='otp' />
            </form>
            <div className='signInbtn'>
              <a><button>Reset password</button></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangePassword
