import React, { Component } from "react";
import {Helmet} from "react-helmet";
import './style.css';
import { Link } from "react-router-dom";
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
              <Link to={{pathname: '/ui/signup/username', search: this.props.location.search}}>
                <button>
                  <span><i className="fa fa-user" aria-hidden="true"></i></span>
                  <span>Sign up with Username</span>
                </button>
              </Link>
            </div>
            : null}
            {globals.email ?
            <div className='commonBtn emailLogin'>
              <Link to={{pathname: '/ui/signup/email', search: this.props.location.search}}>
                <button>
                  <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                  <span>Sign up with Email</span>
                </button>
              </Link>
            </div>
            : null}
            {globals.mobile ?
            <div className='commonBtn mobileLogin'>
              <Link to={{pathname: '/ui/signup/mobile', search: this.props.location.search}}>
                <button>
                  <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                  <span>Sign up with Mobile</span>
                </button>
              </Link>
            </div>
            : null}
            {globals.mobileOtp ?
            <div className='commonBtn mobileLogin'>
              <Link to={{pathname: '/ui/signup/mobile-otp', search: this.props.location.search}}>
                <button>
                  <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                  <span>Sign up with Mobile/OTP</span>
                </button>
              </Link>
            </div>
            : null}

            <SocialLoginWrapper />
            <SignInMessage location={this.props.location} />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpHome
