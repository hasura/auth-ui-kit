import React, { Component } from "react";
import './style.css';
import globals from './globals';
import {endpoints} from './config';

class SocialLoginWrapper extends Component {
  render() {

    const socialIconThemeClass = globals.theme === 'light' ? 'LightSocialLoginIcon' : 'DarkSocialLoginIcon';

    return (
      <div>
        {globals.facebook || globals.google || globals.github || globals.linkedin ?
        <div className='socialLoginWrapper'>
          <div className='descriptionText'>
            Or connect with:
          </div>
          <div className='socialLoginIconWrapper'>
            {globals.facebook ?
            <div className={'socialLoginIcon ' + socialIconThemeClass}>
              <a href={endpoints.facebookLogin}><i className='fa fa-facebook' aria-hidden='true'></i></a>
            </div>
            : null}
            {globals.google ?
            <div className={'socialLoginIcon ' + socialIconThemeClass}>
              <a href={endpoints.googleLogin}><i className='fa fa-google' aria-hidden='true'></i></a>
            </div>
            : null}
            {globals.github ?
            <div className={'socialLoginIcon ' + socialIconThemeClass}>
              <a href={endpoints.githubLogin}><i className='fa fa-github' aria-hidden='true'></i></a>
            </div>
            : null}
            {globals.linkedin ?
            <div className={'socialLoginIcon ' + socialIconThemeClass}>
              <a href={endpoints.linkedinLogin}><i className='fa fa-linkedin' aria-hidden='true'></i></a>
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
