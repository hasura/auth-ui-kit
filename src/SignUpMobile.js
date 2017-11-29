import React, { Component } from "react";
import {Helmet} from "react-helmet";
import SocialLoginWrapper from './SocialLoginWrapper';
import SignInMessage from './SignInMessage';
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
            <form className='formGroupWrapper'>
              <div className='formInput'>
              <input className='countryInput' type="email" placeholder='Country code' />
              <input className='mobileInput' type="email" placeholder='Enter mobile number' />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Password' />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Confirm Password' />
              </div>
              <div className='linkDescription forgotPassword descriptionText'>
                <a href='#'> Forgot Password?</a>
              </div>
              <div className='signInbtn'>
                <a><button>Sign Up</button></a>
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
