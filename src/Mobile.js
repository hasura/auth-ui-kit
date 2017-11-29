import React, { Component } from "react";
import {Helmet} from "react-helmet";
import SocialLoginWrapper from './SocialLoginWrapper';
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
              <input type="text" placeholder='Sign in with mobile' />
            </form>
            <form className='formGroupWrapper'>
              <input type="password" placeholder='Password' />
            </form>
            <div className='linkDescription forgotPassword descriptionText'>
              <a>Forgot Password?</a>
            </div>
            <div className='signInbtn'>
              <button>Sign In</button>
            </div>
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

export default Mobile
