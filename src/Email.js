import React, { Component } from "react";
import {Helmet} from "react-helmet";
import { NavLink } from "react-router-dom";
import SocialLoginWrapper from './SocialLoginWrapper';
import SignUpMessage from './SignUpMessage';
import './style.css';
class Email extends Component {

  render() {
    return (
      <div className='landingPageWrapper container-fluid'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sign in with Email</title>
        </Helmet>
        <div className='landingPageInnerWrapper'>
          <div className='signUpWrapper'>
            <div className='headerDescription addPaddTop'>
              Sign In
            </div>
            <div className='descriptionText'>
              Hello! Sign in with your email
            </div>
            <form className='formGroupWrapper'>
              <div className='formInput'>
                <input type="email" placeholder='Sign in with Email' />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Password' />
              </div>
              <div className='linkDescription forgotPassword descriptionText'>
                <NavLink to='/forgot-password'> Forgot Password?</NavLink>
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

export default Email
