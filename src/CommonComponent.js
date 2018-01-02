import React, { Component } from "react";
// import {Helmet} from "react-helmet";
import './style.css';
// import { Link } from "react-router-dom";
import globals from './globals';
// import SocialLoginWrapper from './SocialLoginWrapper';
import SignUpMessage from './SignUpMessage';
import {usernameImg, emailImg, mobileImg, mobileOtpImg } from './images/Images';
class CommonComponent extends Component {
  render() {
    const pageWrapperThemeClass = globals.theme === 'light' ? 'LightLandingPageWrapper' : 'DarkLandingPageWrapper';
    const pageInnerThemeClass = globals.theme === 'light' ? 'LightLandingPageInnerWrapper' : 'DarkLandingPageInnerWrapper';
    const headerDescriptionClass = globals.theme === 'light' ? 'lightHeaderDescription' : 'darkHeaderDescription';
    const commonBtnClass = globals.theme === 'light' ? 'lightCommonBtn' : 'darkCommonBtn';
    return (
      <div className={'displayFlex landingPageWrapper container-fluid ' + pageWrapperThemeClass}>
        <div className={'landingPageInnerWidth'}>
          <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
            {this.props.children}
          </div>
          <SignUpMessage location={this.props.location} />
        </div>
      </div>
    );
  }
}

export default CommonComponent
