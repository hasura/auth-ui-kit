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
            <div className='headerDescription addPaddTop'>
              Sign In
            </div>
            <div className='descriptionText'>
              Hello! Sign in with your mobile
            </div>
            <form className='formGroupWrapper'>
              <div className='formInput'>
                <input type="email" placeholder='Sign in with mobile' />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Password' />
              </div>
              <div className='linkDescription forgotPassword descriptionText'>
                <a href='#'> Forgot Password?</a>
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
