import React, { Component } from "react";
import {Helmet} from "react-helmet";
import SocialLoginWrapper from './SocialLoginWrapper';
import SignInMessage from './SignInMessage';
import './style.css';
class SignUp extends Component {

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
              Sign Up
            </div>
            <div className='descriptionText'>
              Hello! Sign up with your email
            </div>
            <form className='formGroupWrapper'>
              <div className='formInput'>
                <input type="email" placeholder='Enter Email' />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Password' />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Confirm Password' />
              </div>
              <div className='signInbtn'>
                <a><button>Register</button></a>
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

export default SignUp
