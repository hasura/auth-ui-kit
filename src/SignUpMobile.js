import React, { Component } from "react";
import {Helmet} from "react-helmet";
import SocialLoginWrapper from './SocialLoginWrapper';
import SignInMessage from './SignInMessage';
import {mobilePasswordSignUp} from './api';
import './style.css';
class SignUpMobile extends Component {

  render() {
    return (
      <div className='landingPageWrapper container-fluid'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sign up with Mobile</title>
        </Helmet>
        <div className='landingPageInnerWrapper'>
          <div className='signUpWrapper'>
            <div className='headerDescription'>
              Sign Up
            </div>
            <div className='descriptionText'>
              Hello! Sign up with your mobile
            </div>
            <form className='formGroupWrapper' onSubmit={(e) => {
                e.preventDefault();
                if (this.password.value === this.confirm_password.value) {
                  mobilePasswordSignUp(this.mobile.value, this.password.value, this.country_code.value);
                } else {
                  alert("Passwords don't match. Try again");
                }
              }}>
              <div className='formInput'>
              <input className='countryInput' type="number" placeholder='Country code' ref={(input) => { this.country_code = input; }} />
              <input className='mobileInput' type="text" placeholder='Enter mobile number' ref={(input) => { this.mobile = input; }} />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Password' ref={(input) => { this.password = input; }} />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Confirm Password' ref={(input) => { this.confirm_password = input; }} />
              </div>
              <div className='linkDescription forgotPassword descriptionText'>
                <a>Forgot Password?</a>
              </div>
              <div className='signInbtn'>
                <a><button type="submit">Sign Up</button></a>
              </div>
            </form>
            <SocialLoginWrapper />
            <SignInMessage />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpMobile;
