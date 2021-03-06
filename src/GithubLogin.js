import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { githubLogin } from './api';
import getParams from './utils/getParams';
import globals from './globals';
import './style.css';

class GithubLogin extends Component {
  componentWillMount() {
    let locationParams = window.location.search;
    if (locationParams === '') {
      locationParams = window.location.hash;
    }
    const params = getParams(locationParams);
    const code = params.code;
    const redirectUrl = params.state;
    // check for error before proceeding
    const error = params.error;
    const errorMessage = params.error_description;
    if (error) {
      alert(errorMessage);
    } else {
      githubLogin(code, redirectUrl);
    }
  }

  render() {
    const pageWrapperThemeClass =
      globals.theme === 'light'
        ? 'LightLandingPageWrapper'
        : 'DarkLandingPageWrapper';
    const pageInnerThemeClass =
      globals.theme === 'light'
        ? 'LightLandingPageInnerWrapper'
        : 'DarkLandingPageInnerWrapper';
    const headerDescriptionClass =
      globals.theme === 'light'
        ? 'lightHeaderDescription'
        : 'darkHeaderDescription';
    return (
      <div
        className={
          'landingPageWrapper container-fluid ' + pageWrapperThemeClass
        }
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Github Login</title>
        </Helmet>
        <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
          <div className="signUpWrapper">
            <div className={headerDescriptionClass}>
              Proceeding to Login...Will redirect after login
            </div>
            <div className="descriptionText" />
          </div>
        </div>
      </div>
    );
  }
}

export default GithubLogin;
