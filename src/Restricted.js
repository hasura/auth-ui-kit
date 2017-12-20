import React, { Component } from "react";
import {Helmet} from "react-helmet";
import {logout} from './api';
import globals from './globals';
import './style.css';
class Restricted extends Component {

  render() {

    const pageWrapperThemeClass = globals.theme === 'light' ? 'LightLandingPageWrapper' : 'DarkLandingPageWrapper';
    const pageInnerThemeClass = globals.theme === 'light' ? 'LightLandingPageInnerWrapper' : 'DarkLandingPageInnerWrapper';
    const formGroupThemeClass = globals.theme === 'light' ? 'LightFormGroupWrapper' : 'DarkFormGroupWrapper';

    return (
      <div className={'displayFlex landingPageWrapper container-fluid ' + pageWrapperThemeClass}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Restricted</title>
        </Helmet>
        <div className={'landingPageInnerWidth'}>
          <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
            <div className='signUpWrapper'>
              <div className='headerDescription'>
                Restricted
              </div>
              <div className='descriptionText'>
                Hello! You are logged in with a role which does not allow you to access the service.
              </div>
              <div className='descriptionText'>
                Please logout and login again.
              </div>
              <form className={formGroupThemeClass} onSubmit={(e) => {
                  e.preventDefault();
                  logout();
                }}>
                <div className='signInbtn'>
                  <a><button type='submit'>Logout & Login Again</button></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Restricted
