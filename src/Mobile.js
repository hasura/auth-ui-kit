import React, { Component } from "react";
import {Helmet} from "react-helmet";
import SocialLoginWrapper from './SocialLoginWrapper';
import SignUpMessage from './SignUpMessage';
import './style.css';
class Mobile extends Component {

  render() {
    return (
      <div className='landingPageWrapper container-fluid'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sign in with Mobile</title>
        </Helmet>
        <div className='landingPageInnerWrapper'>
          <div className='signUpWrapper'>
            <div className='headerDescription'>
              Sign In
            </div>
            <div className='descriptionText'>
              Hello! Sign in with your mobile
            </div>
            <form className='formGroupWrapper'>
              <div className='formInput'>
              <input className='countryInput' type="email" placeholder='Country code' />
              <input className='mobileInput' type="email" placeholder='Enter mobile number' />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Password' />
              </div>
              <div className='linkDescription forgotPassword descriptionText'>
                <a>Forgot Password?</a>
              </div>
              <div className='signInbtn'>
                <a><button>Sign In</button></a>
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
