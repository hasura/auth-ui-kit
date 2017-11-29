import React, { Component } from "react";
import {Helmet} from 'react-helmet';
import { NavLink } from "react-router-dom";
import SocialLoginWrapper from './SocialLoginWrapper';
import SignInMessage from './SignInMessage';
import './style.css';
class SignUpUsername extends Component {

  render() {
    return (
      <div className='landingPageWrapper container-fluid'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sign up with Username</title>
        </Helmet>
        <div className='landingPageInnerWrapper'>
          <div className='signUpWrapper'>
            <div className='headerDescription'>
              Sign Up
            </div>
            <div className='descriptionText'>
              Hello! Sign up with your username or email
            </div>
            <form className='formGroupWrapper'>
              <div className='formInput'>
                <input type="email" placeholder='Sign up with Username' />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Password' />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Confirm Password' />
              </div>
              <div className='linkDescription forgotPassword descriptionText'>
                <NavLink to='/forgot-password'> Forgot Password?</NavLink>
              </div>
              <div className='signInbtn'>
                <a><button>Sign up</button></a>
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

export default SignUpUsername;
