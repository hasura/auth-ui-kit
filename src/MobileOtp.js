import React, { Component } from "react";
import {Helmet} from "react-helmet";
import SocialLoginWrapper from './SocialLoginWrapper';
import SignUpMessage from './SignUpMessage';
import Back from './Back';
import globals from './globals';

import './style.css';

import { mobileOtpSignUp, resendMobileOtp, mobileOtpLogin} from './api';

class MobileOtp extends Component {
  constructor() {
    super();
    this.state = {};
    this.state.isFirstStepCompleted = false;
    this.state.mobile_number = '';
    this.state.country_code = '';
  }
  resendMobileOtp(e) {
    e.preventDefault();
    resendMobileOtp(this.state.mobile_number, this.state.country_code)
    .then( ( resp) => {
      alert('OTP sent to mobile with number ' + this.state.mobile_number + ' again');
    })
    .catch( ( resp ) => {
      alert('Error sending OTP: ' + JSON.stringify(resp));
    });
  }
  handleSignup(e) {

    mobileOtpSignUp(this.mobile_number.value, this.country_code.value)
    .then((resp) => {
      alert('OTP sent to your mobile number');
      this.setState({ ...this.state, mobile_number: this.mobile_number.value, country_code: this.country_code.value, isFirstStepCompleted: true});
    })
    .catch(( resp) => {
      alert('Error sending OTP: ' + JSON.stringify(resp));
    });
  }
  handleLogin() {
    mobileOtpLogin(this.state.mobile_number, this.state.country_code, this.otp.value);
  }
  render() {

    const pageWrapperThemeClass = globals.theme === 'light' ? 'LightLandingPageWrapper' : 'DarkLandingPageWrapper';
    const pageInnerThemeClass = globals.theme === 'light' ? 'LightLandingPageInnerWrapper' : 'DarkLandingPageInnerWrapper';
    const formGroupThemeClass = globals.theme === 'light' ? 'LightFormGroupWrapper' : 'DarkFormGroupWrapper';
    const headerDescriptionClass = globals.theme === 'light' ? 'lightHeaderDescription' : 'darkHeaderDescription';
    return (
      <div className={'displayFlex landingPageWrapper container-fluid ' + pageWrapperThemeClass}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Login with Mobile/OTP</title>
        </Helmet>
        <div className={'landingPageInnerWidth'}>
          <Back />
          <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
            <div className='signUpWrapper'>
              <div className={headerDescriptionClass}>
                Login
              </div>
              <div className='descriptionText'>
                Hello! Login with your mobile OTP
              </div>
              <form className={formGroupThemeClass} onSubmit={ (e) => {
                e.preventDefault();
              }}>
                { !this.state.isFirstStepCompleted ? (
                  <div key="9" className='formInput'>
                    <div className='countryInput'>
                      <label className='formLabel'>
                        Country Code
                      </label>
                      <input type="text" ref={ (input) => { this.country_code = input }} />
                      {/* <i className="fa fa-caret-down" aria-hidden="true"></i> */}
                    </div>
                    <div className='mobileInput'>
                      <label className='formLabel'>
                        Mobile Number
                      </label>
                      <input type="text" ref={ (input) => { this.mobile_number= input }} />
                    </div>
                  </div>
                ) : (
                  <div key="10" className='formInput'>
                    <input type="text" placeholder='otp' ref={ (input) => { this.otp = input }} />
                    <div className="">
                      Haven{'\''}t received OTP yet?
                      <a href="" onClick={ this.resendMobileOtp.bind(this) }>
                        Resend
                      </a>
                    </div>
                  </div>
                )}
                <div className='signInbtn'>
                  { !this.state.isFirstStepCompleted ? (
                    <a>
                      <button data-button-id="login" onClick={ this.handleSignup.bind(this) }>
                        Send OTP
                      </button>
                    </a>
                  ) : (
                    <a>
                      <button data-button-id="verify-mobile" onClick={ this.handleLogin.bind(this) }>
                        Verify Mobile
                      </button>
                    </a>
                  ) }
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

export default MobileOtp
