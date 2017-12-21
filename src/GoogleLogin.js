import React, { Component } from "react";
import {Helmet} from "react-helmet";
import {googleLogin} from './api';
import getParams from './utils/getParams';
import globals from './globals';
import './style.css';

class GoogleLogin extends Component {

  componentWillMount() {
    let locationParams = window.location.search;
    if(locationParams === "") {
      locationParams = window.location.hash;
    }
    const params = getParams(locationParams);
    const id_token = params.id_token;
    const redirectUrl = params.state;
    // check for error before proceeding
    const error = params.error;
    if (error) {
      alert(error);
    } else {
      googleLogin(id_token, redirectUrl);
    }
  }

  render() {

    const pageWrapperThemeClass = globals.theme === 'light' ? 'LightLandingPageWrapper' : 'DarkLandingPageWrapper';
    const pageInnerThemeClass = globals.theme === 'light' ? 'LightLandingPageInnerWrapper' : 'DarkLandingPageInnerWrapper';
    const headerDescriptionClass = globals.theme === 'light' ? 'lightHeaderDescription' : 'darkHeaderDescription';
    return (
      <div className={'landingPageWrapper container-fluid ' + pageWrapperThemeClass}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Google Login</title>
        </Helmet>
        <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
          <div className='signUpWrapper'>
            <div className={headerDescriptionClass}>
              Proceeding to Login...Will redirect after login
            </div>
            <div className='descriptionText'>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleLogin
