import React, { Component } from 'react';
import '../style.css';
import globals from '../Common/globals';
import { endpoints } from '../Common/config';
import {
  facebookDarkImg,
  facebookLightImg,
  googlePlusDarkImg,
  googlePlusLightImg,
  githubDarkImg,
  githubLightImg,
  linkedinDarkImg,
  linkedinLightImg,
} from '../Images/Images';

class SocialLoginWrapper extends Component {
  render() {
    const socialIconThemeClass =
      globals.theme === 'light'
        ? 'LightSocialLoginIcon'
        : 'DarkSocialLoginIcon';
    const currentFacebookImg =
      globals.theme === 'light' ? facebookLightImg : facebookDarkImg;
    const currentGoogleImg =
      globals.theme === 'light' ? googlePlusLightImg : googlePlusDarkImg;
    const currentGithubImg =
      globals.theme === 'light' ? githubLightImg : githubDarkImg;
    const currentLinkedinImg =
      globals.theme === 'light' ? linkedinLightImg : linkedinDarkImg;
    return (
      <div>
        {globals.facebook ||
        globals.google ||
        globals.github ||
        globals.linkedin ? (
          <div className="socialLoginWrapper">
            <div className={'displayFlex'}>
              <span className={'dividerLine'} />
              <span className="smallDescriptionText">Or login with</span>
              <span className={'dividerLine'} />
            </div>
            <div className="socialLoginIconWrapper">
              {globals.facebook ? (
                <div className={'socialLoginIcon ' + socialIconThemeClass}>
                  <a href={endpoints.facebookLogin}>
                    <img
                      className="img-responsive"
                      src={currentFacebookImg}
                      alt="Facebook icon"
                    />
                  </a>
                </div>
              ) : null}
              {globals.google ? (
                <div className={'socialLoginIcon ' + socialIconThemeClass}>
                  <a href={endpoints.googleLogin}>
                    <img
                      className="img-responsive"
                      src={currentGoogleImg}
                      alt="Google plus icon"
                    />
                  </a>
                </div>
              ) : null}
              {globals.github ? (
                <div className={'socialLoginIcon ' + socialIconThemeClass}>
                  <a href={endpoints.githubLogin}>
                    <img
                      className="img-responsive"
                      src={currentGithubImg}
                      alt="Github icon"
                    />
                  </a>
                </div>
              ) : null}
              {globals.linkedin ? (
                <div className={'socialLoginIcon ' + socialIconThemeClass}>
                  <a href={endpoints.linkedinLogin}>
                    <img
                      className="img-responsive"
                      src={currentLinkedinImg}
                      alt="Linkedin icon"
                    />
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default SocialLoginWrapper;
