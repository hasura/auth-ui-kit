import React, { Component } from "react";
import './style.css';
import globals from './globals';
import {endpoints} from './config';

class SocialLoginWrapper extends Component {
  render() {

    const socialIconThemeClass = globals.theme === 'light' ? 'LightSocialLoginIcon' : 'DarkSocialLoginIcon';
    const faceBookDark = require('./images/facebook-dark.svg');
    const googlePlusDark = require('./images/googleplus-dark.svg');
    const gitHubDark = require('./images/github-dark.svg');
    const linkedInDark = require('./images/linkedin-dark.svg');
    return (
      <div>
        {globals.facebook || globals.google || globals.github || globals.linkedin ?
        <div className='socialLoginWrapper'>
          <div className={'displayFlex'}>
            <span className={'dividerLine'}>
            </span>
            <span className='smallDescriptionText'>
              Or login with
            </span>
            <span className={'dividerLine'}>
            </span>
          </div>
          <div className='socialLoginIconWrapper'>
            {globals.facebook ?
            <div className={'socialLoginIcon ' + socialIconThemeClass}>
              <a href={endpoints.facebookLogin}><img className='img-responsive' src={faceBookDark} alt='Facebook icon' /></a>
            </div>
            : null}
            {globals.google ?
            <div className={'socialLoginIcon ' + socialIconThemeClass}>
              <a href={endpoints.googleLogin}><img className='img-responsive' src={googlePlusDark} alt='Google plus icon' /></a>
            </div>
            : null}
            {globals.github ?
            <div className={'socialLoginIcon ' + socialIconThemeClass}>
              <a href={endpoints.githubLogin}><img className='img-responsive' src={gitHubDark} alt='Github icon' /></a>
            </div>
            : null}
            {globals.linkedin ?
            <div className={'socialLoginIcon ' + socialIconThemeClass}>
              <a href={endpoints.linkedinLogin}><img className='img-responsive' src={linkedInDark} alt='Linkedin icon' /></a>
            </div>
            : null}
          </div>
        </div>
        : null}
      </div>
    );
  }
}

export default SocialLoginWrapper;
