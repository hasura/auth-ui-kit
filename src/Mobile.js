import React, { Component } from "react";
import {Helmet} from "react-helmet";
import SocialLoginWrapper from './SocialLoginWrapper';
import SignUpMessage from './SignUpMessage';
import {mobilePasswordSignIn} from './api';
import './style.css';
class Mobile extends Component {

  render() {
    return (
      <div className='landingPageWrapper LightLandingPageWrapper container-fluid'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sign in with Mobile</title>
        </Helmet>
        <div className='landingPageInnerWrapper LightLandingPageInnerWrapper'>
          <div className='signUpWrapper'>
            <div className='headerDescription'>
              Sign In
            </div>
            <div className='descriptionText'>
              Hello! Sign in with your mobile
            </div>
            <form className='LightFormGroupWrapper' onSubmit={(e) => {
                e.preventDefault();
                mobilePasswordSignIn(this.mobile.value, this.password.value, this.country_code.value);
              }}>
              <div className='formInput'>
              <input className='countryInput' type="number" placeholder='Country code' ref={(input) => { this.country_code = input; }} />
              <input className='mobileInput' type="text" placeholder='Enter mobile number' ref={(input) => { this.mobile = input; }} />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Password' ref={(input) => { this.password = input; }} />
              </div>
              <div className='linkDescription forgotPassword descriptionText'>
                <a>Forgot Password?</a>
              </div>
              <div className='signInbtn'>
                <a><button type="submit">Sign In</button></a>
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

export default Mobile
