import React, { Component } from "react";
import {Helmet} from 'react-helmet';
import { NavLink } from "react-router-dom";
import SocialLoginWrapper from './SocialLoginWrapper';
import {usernameSignIn} from './api';
import './style.css';
class Username extends Component {

  render() {
    return (
      <div className='landingPageWrapper container-fluid'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sign in with Username</title>
        </Helmet>
        <div className='landingPageInnerWrapper'>
          <div className='signUpWrapper'>
            <div className='headerDescription addPaddTop'>
              Sign In
            </div>
            <div className='descriptionText'>
              Hello! Sign in with your username or email
            </div>
            <form className='formGroupWrapper' onSubmit={(e) => {
                e.preventDefault();
                usernameSignIn(this.username.value, this.password.value);
              }}>
              <div className='formInput'>
                <input type="text" placeholder='Sign in with Username' ref={(input) => { this.username = input; }} />
              </div>
              <div className='formInput'>
                <input type="password" placeholder='Password' ref={(input) => { this.password = input; }} />
              </div>
              <div className='linkDescription forgotPassword descriptionText'>
                <NavLink to='/forgot-password'> Forgot Password?</NavLink>
              </div>
              <div className='signInbtn'>
                <a><button type="submit">Sign In</button></a>
              </div>
            </form>
            <SocialLoginWrapper />
            <div className='descriptionText'>
              Don{'\''}t have an account? <b>Sign Up</b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Username
