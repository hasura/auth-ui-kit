import React, { Component } from "react";
import {Helmet} from "react-helmet";
import './style.css';
import { NavLink } from "react-router-dom";
import globals from './globals';
import SocialLoginWrapper from './SocialLoginWrapper';

class Home extends Component {
  render() {
    return (
      <div className='landingPageWrapper container-fluid'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sign In</title>
        </Helmet>
        <div className='landingPageInnerWrapper'>
          <div className='signUpWrapper'>
            <div className='headerDescription addPaddTop'>
              Sign In
            </div>
            {globals.username ?
            <div className='commonBtn usernameLogin'>
              <NavLink to="/username">
                <button>
                  <span><i className="fa fa-user" aria-hidden="true"></i></span>
                  <span>Sign in with Username</span>
                </button>
              </NavLink>
            </div>
            : null}
            {globals.email ?
            <div className='commonBtn emailLogin'>
              <NavLink to="/email">
                <button>
                  <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                  <span>Sign in with email</span>
                </button>
              </NavLink>
            </div>
            : null}
            {globals.mobile ?
            <div className='commonBtn mobileLogin'>
              <NavLink to="/mobile">
                <button>
                  <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                  <span>Sign in with mobile</span>
                </button>
              </NavLink>
            </div>
            : null}
            {globals.mobileOtp ?
            <div className='commonBtn mobileLogin'>
              <NavLink to="/mobile-otp">
                <button>
                  <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                  <span>Sign in with mobile otp</span>
                </button>
              </NavLink>
            </div>
            : null}

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

export default Home
