import React, { Component } from "react";
import {Helmet} from "react-helmet";
import SocialLoginWrapper from './SocialLoginWrapper';
import SignUpMessage from './SignUpMessage';
import Back from './Back';
import {
  mobilePasswordSignIn,
  mobilePasswordVerify,
  resendMobilePasswordOtp,
  sendForgotPasswordOTP,
  resetMobilePassword
} from './api';
import globals from './globals';

import './style.css';

class Mobile extends Component {
  constructor() {
    super();
    this.state = {};
    this.state.isNotVerified = false;
    this.state.enableForgotPassword = false;
    this.state.mobile_number = '';
    this.state.country_code = '';
  }
  toggleForgotPassword() {
    this.setState({ ...this.state, enableForgotPassword: !this.state.enableForgotPassword });
  }
  handleLogin(e) {
    e.preventDefault();
    mobilePasswordSignIn(this.mobile.value, this.password.value, this.country_code.value)
    .catch((resp) => {
      if ( resp.code === "not_verified" ) {
        this.setState({ ...this.state, mobile_number: this.mobile.value, country_code: this.country_code.value, isNotVerified: true });
      }
      alert("Login failed: " + JSON.stringify(resp));
    });
  }
  handleVerification(e) {
    e.preventDefault(e);
    mobilePasswordVerify(this.state.mobile_number, this.state.country_code, this.otp.value);
  }
  resendMobilePasswordOtp(e) {
    e.preventDefault();
    resendMobilePasswordOtp(this.state.mobile_number, this.state.country_code)
    .then( ( resp) => {
      alert('OTP sent to mobile with number ' + this.state.mobile_number + ' again');
    })
    .catch( ( resp ) => {
      alert('Error sending otp again');
    });
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
          <title>Login with Mobile</title>
        </Helmet>
        { !this.state.enableForgotPassword ? (
          <div className={'landingPageInnerWidth'}>
            <Back />
            <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
              <div className='signUpWrapper'>
                <div className={headerDescriptionClass}>
                  Login
                </div>
                <div className='descriptionText'>
                  Hello! Login with your mobile number
                </div>
                <form className={formGroupThemeClass}>
                { !this.state.isNotVerified ? (
                  <div>
                    <div key="1001" className='formInput'>
                      <div className='countryInput'>
                        <label className='formLabel'>
                          Country Code
                        </label>
                        <input type="text" value='+91' ref={(input) => { this.country_code = input; }} />
                        {/* <i className="fa fa-caret-down" aria-hidden="true"></i> */}
                      </div>
                      <div className='mobileInput'>
                        <label className='formLabel'>
                          Mobile Number
                        </label>
                        <input type="text" ref={(input) => { this.mobile = input; }} />
                      </div>
                    </div>
                    <div className='formInput'>
                      <label className='formLabel'>
                        Password
                      </label>
                      <input type="password" ref={(input) => { this.password = input; }} />
                    </div>
                    <div className='linkDescription forgotPassword descriptionText'>
                      <a onClick={ this.toggleForgotPassword.bind(this) }>Forgot Password?</a>
                    </div>
                  </div>
                ) : (
                  <div key="1000" className='formInput'>
                    <input type="text" placeholder='otp' ref={ (input) => { this.otp = input }} />
                    <div className="">
                      Looks like you haven{'\''}t verified your mobile number. Please verify your mobile by clicking on the send otp link below.<br/>
                      <a href="" onClick={ this.resendMobilePasswordOtp.bind(this) }>
                        Send OTP
                      </a>
                    </div>
                  </div>
                )}
                <div className='signInbtn'>
                  { !this.state.isNotVerified ? (
                    <a>
                      <button data-button-id="signup" onClick={ this.handleLogin.bind(this) }>
                      Login
                      </button>
                    </a>
                  ) : (
                    <a>
                      <button data-button-id="verify-mobile" onClick={ this.handleVerification.bind(this) }>
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
        ) : (
          <ForgotPassword location={this.props.location} toggleForgotPassword={ this.toggleForgotPassword.bind(this) }/>
        )}
      </div>
    );
  }
}

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {};
    this.state.forgotPasswordInitiated = false;
    this.state.mobile_number = '';
    this.state.country_code = '';
  }
  sendForgotPasswordOTP(e) {
    e.preventDefault();
    sendForgotPasswordOTP(this.mobile.value, this.country_code.value)
    .then(( resp ) => {
      this.setState({ ...this.state, mobile_number: this.mobile.value, country_code: this.country_code.value, forgotPasswordInitiated: true });
      return;
    })
    .catch(( resp ) => {
      alert("Error sending otp: " + JSON.stringify(resp));
      return Promise.reject();
    });
  }
  resetMobilePassword(e) {
    e.preventDefault();
    if ( this.forgot_password.value === this.confirm_password.value ) {
      return resetMobilePassword(this.state.mobile_number, this.state.country_code, this.forgot_otp.value, this.forgot_password.value)
    }
    alert('Password doesn\'t match');
  }
  render() {
    const pageInnerThemeClass = globals.theme === 'light' ? 'LightLandingPageInnerWrapper' : 'DarkLandingPageInnerWrapper';
    const formGroupThemeClass = globals.theme === 'light' ? 'LightFormGroupWrapper' : 'DarkFormGroupWrapper';
    return (
      <div className={'landingPageInnerWidth'}>
        <Back/>
        <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
          <div className="signUpWrapper">
            <div className="go_back" onClick={ this.props.toggleForgotPassword }>
              Go back
            </div>
            <div className={headerDescriptionClass}>
              Forgot password ?
            </div>
            <div className='descriptionText'>
              Enter your registered mobile number to get an OTP to reset your password
            </div>
            <form className={formGroupThemeClass}>
              { !this.state.forgotPasswordInitiated ? (
                <div>
                  <div key="1002" className='formInput'>
                    <div className='countryInput'>
                      <label className='formLabel'>
                        Country Code
                      </label>
                      <input type="text" value='+91' ref={(input) => { this.country_code = input; }} />
                      {/* <i className="fa fa-caret-down" aria-hidden="true"></i> */}
                    </div>
                    <div className='mobileInput'>
                      <label className='formLabel'>
                        Enter mobile number
                      </label>
                      <input type="text" ref={(input) => { this.mobile = input; }} />
                    </div>

                  </div>
                </div>
              ) : (
                <div>
                  <div key="1003" className='formInput'>
                    <input type="text" placeholder='OTP' ref={(input) => { this.forgot_otp = input; }} />
                  </div>
                  <div className='formInput'>
                    <input type="password" placeholder='Password' ref={(input) => { this.forgot_password = input; }} />
                  </div>
                  <div className='formInput'>
                    <input type="password" placeholder='Confirm Password' ref={(input) => { this.confirm_password = input; }} />
                  </div>
                </div>
              )}
              <div className='signInbtn'>
                { !this.state.forgotPasswordInitiated? (
                  <a>
                    <button data-button-id="send-otp" onClick={ this.sendForgotPasswordOTP.bind(this) }>
                      Send OTP
                    </button>
                  </a>
                ) : (
                  <a>
                    <button data-button-id="reset-mobile" onClick={ this.resetMobilePassword.bind(this) }>
                      Reset Password
                    </button>
                  </a>
                ) }
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Mobile
