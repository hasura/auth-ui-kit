import React, { Component } from "react";
import {Helmet} from "react-helmet";
import SocialLoginWrapper from './SocialLoginWrapper';
import SignUpMessage from './SignUpMessage';

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
      alert('Error sending otp again');
    });
  }
  handleSignup(e) {
    console.log('Handle Signup called');
    console.log('Activating verification');
    
    mobileOtpSignUp(this.mobile_number.value, this.country_code.value)
    .then((resp) => {
      alert('Succeeded');
      this.setState({ ...this.state, mobile_number: this.mobile_number.value, country_code: this.country_code.value, isFirstStepCompleted: true});
    })
    .catch(( resp) => {
      alert('Failed');
    });
  }
  handleLogin() {
    mobileOtpLogin(this.state.mobile_number, this.state.country_code, this.otp.value);
  }
  render() {
    this.mobile_number = null;
    this.country_code = null;
    return (
      <div className='landingPageWrapper container-fluid'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sign in with Mobile OTP</title>
        </Helmet>
        <div className='landingPageInnerWrapper'>
          <div className='signUpWrapper'>
            <div className='headerDescription'>
              Sign In
            </div>
            <div className='descriptionText'>
              Hello! Sign in with your mobile OTP
            </div>
            <form className='formGroupWrapper' onSubmit={ (e) => {
              e.preventDefault();
            }}>
              { !this.state.isFirstStepCompleted ? (
                <div className='formInput'>
                  <input className='countryInput' type="text" placeholder='Country code' ref={ (input) => { this.country_code = input }} />
                  <input className='mobileInput' type="text" placeholder='Enter mobile number' ref={ (input) => { this.mobile_number= input }} />
                </div>
              ) : (
                <div className='formInput'>
                  <input type="text" placeholder='otp' ref={ (input) => { this.otp = input }} />
                  <div className="">
                    Haven't received OTP yet?
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
                      Login
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
            <SignUpMessage />
          </div>
        </div>
      </div>
    );
  }
}

export default MobileOtp
