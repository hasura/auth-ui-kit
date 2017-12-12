import React, { Component } from "react";
import {Helmet} from "react-helmet";
import './style.css';
import { NavLink } from "react-router-dom";
import globals from './globals';
import SocialLoginWrapper from './SocialLoginWrapper';
import SignUpMessage from './SignUpMessage';
class Home extends Component {
  render() {
    const pageWrapperThemeClass = globals.theme === 'light' ? 'LightLandingPageWrapper' : 'DarkLandingPageWrapper';
    const pageInnerThemeClass = globals.theme === 'light' ? 'LightLandingPageInnerWrapper' : 'DarkLandingPageInnerWrapper';
    return (
      <div className={'landingPageWrapper container-fluid ' + pageWrapperThemeClass}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sign In</title>
        </Helmet>
        <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
          <div className='signUpWrapper'>
            <div className='headerDescription'>
              Sign In
            </div>
            {globals.username ?
            <div className='commonBtn usernameLogin'>
              <NavLink to="/ui/signin/username">
                <button>
                  <span><i className="fa fa-user" aria-hidden="true"></i></span>
                  <span>Sign in with Username</span>
                </button>
              </NavLink>
            </div>
            : null}
            {globals.email ?
            <div className='commonBtn emailLogin'>
              <NavLink to="/ui/signin/email">
                <button>
                  <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                  <span>Sign in with email</span>
                </button>
              </NavLink>
            </div>
            : null}
            {globals.mobile ?
            <div className='commonBtn mobileLogin'>
              <NavLink to="/ui/signin/mobile">
                <button>
                  <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                  <span>Sign in with mobile</span>
                </button>
              </NavLink>
            </div>
            : null}
            {globals.mobileOtp ?
            <div className='commonBtn mobileLogin'>
              <NavLink to="/ui/signin/mobile-otp">
                <button>
                  <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                  <span>Sign in with mobile otp</span>
                </button>
              </NavLink>
            </div>
            : null}

            <SocialLoginWrapper />
            <SignUpMessage />
          </div>
        </div>
      </div>
    );
  }
}

export default Home
