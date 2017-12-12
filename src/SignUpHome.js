import React, { Component } from "react";
import {Helmet} from "react-helmet";
import './style.css';
import { NavLink } from "react-router-dom";
import globals from './globals';
import SocialLoginWrapper from './SocialLoginWrapper';
import SignInMessage from './SignInMessage';
class SignUpHome extends Component {
  render() {

    const pageWrapperThemeClass = globals.theme === 'light' ? 'LightLandingPageWrapper' : 'DarkLandingPageWrapper';
    const pageInnerThemeClass = globals.theme === 'light' ? 'LightLandingPageInnerWrapper' : 'DarkLandingPageInnerWrapper';
    
    return (
      <div className={'landingPageWrapper container-fluid ' + pageWrapperThemeClass}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sign Up</title>
        </Helmet>
        <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
          <div className='signUpWrapper'>
            <div className='headerDescription'>
              Sign Up
            </div>
            {globals.username ?
            <div className='commonBtn usernameLogin'>
              <NavLink to="/ui/signup/username">
                <button>
                  <span><i className="fa fa-user" aria-hidden="true"></i></span>
                  <span>Sign up with Username</span>
                </button>
              </NavLink>
            </div>
            : null}
            {globals.email ?
            <div className='commonBtn emailLogin'>
              <NavLink to="/ui/signup/email">
                <button>
                  <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                  <span>Sign up with email</span>
                </button>
              </NavLink>
            </div>
            : null}
            {globals.mobile ?
            <div className='commonBtn mobileLogin'>
              <NavLink to="/ui/signup/mobile">
                <button>
                  <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                  <span>Sign up with mobile</span>
                </button>
              </NavLink>
            </div>
            : null}
            {globals.mobileOtp ?
            <div className='commonBtn mobileLogin'>
              <NavLink to="/ui/signup/mobile-otp">
                <button>
                  <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                  <span>Sign up with mobile otp</span>
                </button>
              </NavLink>
            </div>
            : null}

            <SocialLoginWrapper />
            <SignInMessage />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpHome
