import React, { Component } from "react";
import {Helmet} from "react-helmet";
import './style.css';
import SignUpMessage from './SignUpMessage';
class ForgotPassword extends Component {

  render() {
    return (
      <div className='landingPageWrapper LightLandingPageWrapper container-fluid'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Forgot Password</title>
        </Helmet>
        <div className='landingPageInnerWrapper LightLandingPageInnerWrapper'>
          <div className='signUpWrapper'>
            <div className='headerDescription'>
              Forgot Password
            </div>
            <div className='descriptionText'>
              Hello! Submit your username to reset your password
            </div>
            <form className='LightFormGroupWrapper'>
              <div className='formInput'>
                <input type="email" placeholder='Enter username' />
              </div>
              <div className='formInput'>
                <input type="text" placeholder='otp' />
              </div>
              <div className='signInbtn'>
                <a><button>Submit</button></a>
              </div>
            </form>
            <SignUpMessage />
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword
