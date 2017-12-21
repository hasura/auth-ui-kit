import React, { Component } from "react";
import {Helmet} from "react-helmet";
import {logout} from './api';
import globals from './globals';
import './style.css';
class EmailVerification extends Component {

  componentWillMount() {
    const currentSearchParams = window.location.search;
    const token = currentSearchParams.split('=')[1];
    // send verification request
  }

  render() {

    const verificationStatus = this.state.verificationStatus;

    const pageWrapperThemeClass = globals.theme === 'light' ? 'LightLandingPageWrapper' : 'DarkLandingPageWrapper';
    const pageInnerThemeClass = globals.theme === 'light' ? 'LightLandingPageInnerWrapper' : 'DarkLandingPageInnerWrapper';
    const formGroupThemeClass = globals.theme === 'light' ? 'LightFormGroupWrapper' : 'DarkFormGroupWrapper';
    const headerDescriptionClass = globals.theme === 'light' ? 'lightHeaderDescription' : 'darkHeaderDescription';
    return (
      <div className={'displayFlex landingPageWrapper container-fluid ' + pageWrapperThemeClass}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Email Verification</title>
        </Helmet>
        <div className={'displayFlex landingPageInnerWrapper ' + pageInnerThemeClass}>
          <div className='signUpWrapper'>
            <div className={headerDescriptionClass}>
              Email Verification
            </div>
            <div className='descriptionText'>
              {verificationStatus}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmailVerification
