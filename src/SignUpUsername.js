import React, { Component } from "react";
import {Helmet} from 'react-helmet';
import { NavLink } from "react-router-dom";
import SocialLoginWrapper from './SocialLoginWrapper';
import SignInMessage from './SignInMessage';
import {usernameSignUp} from './api';
import './style.css';
class SignUpUsername extends Component {

  render() {
    return (
      <div className='landingPageWrapper LightLandingPageWrapper container-fluid'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sign up with Username</title>
        </Helmet>
        <div className='landingPageInnerWrapper LightLandingPageInnerWrapper'>
          <div className='signUpWrapper'>
            <div className='headerDescription'>
              Sign Up
            </div>
            <div className='descriptionText'>
              Hello! Sign up with your username
            </div>
            <form className='LightFormGroupWrapper' onSubmit={(e) => {
                e.preventDefault();
                if (this.password.value === this.confirm_password.value) {
                  usernameSignUp(this.username.value, this.password.value);
                } else {
                  alert("Passwords don't match. Try again");
                }
              }}>
              <div className='formInput'>
                <input type="text" placeholder='Username' ref={(input) => { this.username = input; }} />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Password' ref={(input) => { this.password = input; }} />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Confirm Password' ref={(input) => { this.confirm_password = input; }} />
              </div>
              <div className='linkDescription forgotPassword descriptionText'>
                <NavLink to='/forgot-password'> Forgot Password?</NavLink>
              </div>
              <div className='signInbtn'>
                <a><button type="submit">Sign up</button></a>
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
