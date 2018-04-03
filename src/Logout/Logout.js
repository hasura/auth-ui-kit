import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { logoutGlobal } from '../Common/api';
import globals from '../Common/globals';
import '../style.css';
class Logout extends Component {
  state = {
    logoutMsg: 'Logging out...',
    inProgress: true,
  };

  componentDidMount() {
    const logoutTrigger = logoutGlobal();
    const this_ = this;
    logoutTrigger.then(function(data) {
      this_.setState({ logoutMsg: data.message, inProgress: false });
      const currentLocation = window.location;
      let redirectUrl = decodeURIComponent(
        currentLocation.search.split('=')[1]
      );
      if (
        redirectUrl !== undefined &&
        redirectUrl !== 'undefined' &&
        redirectUrl !== null
      ) {
        window.location.href = redirectUrl;
      }
    });
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

    let inProgressHtml = (
      <div className="descriptionText">
        Logging out{' '}
        <span>
          <i className="fa fa-spinner fa-spin" />
        </span>
      </div>
    );
    if (!this.state.inProgress) {
      inProgressHtml = (
        <div className="descriptionText">{this.state.logoutMsg}</div>
      );
    }
    return (
      <div
        className={
          'displayFlex landingPageWrapper container-fluid ' +
          pageWrapperThemeClass
        }
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Logout</title>
        </Helmet>
        <div className={'landingPageInnerWidth'}>
          <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
            <div className="signUpWrapper">
              <div className={headerDescriptionClass} />
              <div className="descriptionText">{inProgressHtml}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Logout;
