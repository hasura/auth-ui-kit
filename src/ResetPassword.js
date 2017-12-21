import React, { Component } from "react";
import {Helmet} from "react-helmet";
import {resetPassword} from './api';
import Back from './Back';
import './style.css';
import globals from './globals';
class ResetPassword extends Component {

  render() {

    const pageWrapperThemeClass = globals.theme === 'light' ? 'LightLandingPageWrapper' : 'DarkLandingPageWrapper';
    const pageInnerThemeClass = globals.theme === 'light' ? 'LightLandingPageInnerWrapper' : 'DarkLandingPageInnerWrapper';
    const formGroupThemeClass = globals.theme === 'light' ? 'LightFormGroupWrapper' : 'DarkFormGroupWrapper';

    // read token sent in the email
    const currentSearchParams = window.location.search;
    const token = currentSearchParams.split('?token=')[1];

    return (
      <div className={'displayFlex landingPageWrapper container-fluid ' + pageWrapperThemeClass}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Reset Password</title>
        </Helmet>
        <div className={'landingPageInnerWidth'}>
          <Back />
          <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
            <div className='signUpWrapper'>
              <div className='headerDescription addPaddTop'>
                Reset Password
              </div>
              <div className='descriptionText'>
                Hello! Reset your password
              </div>
              <form className={formGroupThemeClass} onSubmit={(e) => {
                  e.preventDefault();
                  if (this.password.value === this.confirmPassword.value) {
                    resetPassword(token, this.password.value);
                  } else {
                    alert('Passwords don\'t match');
                  }
                }}>
                <div className='formInput'>
                  <label className='formLabel'>
                    Enter new password
                  </label>
                  <input type="password" ref={(input) => { this.password = input; }} />
                </div>
                <div className='formInput'>
                  <label className='formLabel'>
                    Confirm new password
                  </label>
                  <input type="password" ref={(input) => { this.confirmPassword = input; }} />
                </div>
                <div className='signInbtn'>
                  <a><button type="submit">Reset Password</button></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword
