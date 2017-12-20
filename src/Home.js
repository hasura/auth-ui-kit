import React, { Component } from "react";
import {Helmet} from "react-helmet";
import './style.css';
import { Link } from "react-router-dom";
import globals from './globals';
import SocialLoginWrapper from './SocialLoginWrapper';
import SignUpMessage from './SignUpMessage';
class Home extends Component {
  render() {
    const pageWrapperThemeClass = globals.theme === 'light' ? 'LightLandingPageWrapper' : 'DarkLandingPageWrapper';
    const pageInnerThemeClass = globals.theme === 'light' ? 'LightLandingPageInnerWrapper' : 'DarkLandingPageInnerWrapper';
    console.log(this.props);
    return (
      <div className={'displayFlex landingPageWrapper container-fluid ' + pageWrapperThemeClass}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Login</title>
        </Helmet>
        <div className={'landingPageInnerWidth'}>
          <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
            <div className='signUpWrapper'>
              <div className='headerDescription'>
                Login
              </div>
              {globals.username ?
              <div className='commonBtn'>
                <Link to={{pathname: '/ui/login/username', search: this.props.location.search}}>
                  <button>
                    <span><i className="fa fa-user" aria-hidden="true"></i></span>
                    <span>Login with Username</span>
                  </button>
                </Link>
              </div>
              : null}
              {globals.email ?
              <div className='commonBtn'>
                <Link to={{pathname: '/ui/login/email', search: this.props.location.search}}>
                  <button>
                    <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                    <span>Login with Email</span>
                  </button>
                </Link>
              </div>
              : null}
              {globals.mobile ?
              <div className='commonBtn'>
                <Link to={{pathname: '/ui/login/mobile', search: this.props.location.search}}>
                  <button>
                    <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                    <span>Login with Mobile</span>
                  </button>
                </Link>
              </div>
              : null}
              {globals.mobileOtp ?
              <div className='commonBtn'>
                <Link to={{pathname: '/ui/login/mobile-otp', search: this.props.location.search}}>
                  <button>
                    <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                    <span>Login with Mobile/OTP</span>
                  </button>
                </Link>
              </div>
              : null}

              <SocialLoginWrapper />
            </div>
          </div>
          <SignUpMessage location={this.props.location} />
        </div>
      </div>
    );
  }
}

export default Home
