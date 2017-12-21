import React, { Component } from "react";
import {Helmet} from "react-helmet";
import {verifyEmail} from './api';
import globals from './globals';
import './style.css';
class VerifyEmail extends Component {

  constructor(props) {
    super(props);
    this.state = {'verifyStatus': 'Verifying Email...'};
  }

  componentWillMount() {
    let locationParams = window.location.search;
    if(locationParams === "") {
      locationParams = window.location.hash;
    }
    const params = locationParams.split("?token=")[1];
    const token = params;
    console.log(token);
    // now trigger verify email endpoint
    const verifyStatus = verifyEmail(token);
    verifyStatus.then( (status) => {
      console.log(status);
      if (!status.error) {
        window.location.href = '/ui/login/email';
      } else {
        this.setState({
          verifyStatus: status.status.message
        });
      }
    });
  }

  render() {

    const pageWrapperThemeClass = globals.theme === 'light' ? 'LightLandingPageWrapper' : 'DarkLandingPageWrapper';
    const pageInnerThemeClass = globals.theme === 'light' ? 'LightLandingPageInnerWrapper' : 'DarkLandingPageInnerWrapper';
    const headerDescriptionClass = globals.theme === 'light' ? 'lightHeaderDescription' : 'darkHeaderDescription';
    return (
      <div className={'displayFlex landingPageWrapper container-fluid ' + pageWrapperThemeClass}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Email Verification</title>
        </Helmet>
        <div className={'landingPageInnerWidth'}>
          <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
            <div className='signUpWrapper'>
              <div className={headerDescriptionClass}>
                Email Verification
              </div>
              <div className='descriptionText'>
                {this.state.verifyStatus}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VerifyEmail
