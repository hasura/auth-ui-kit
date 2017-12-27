import React, { Component } from "react";
import {Helmet} from "react-helmet";
import {resetPassword} from './api';
import Back from './Back';
import ErrorMsg from './ErrorMsg';
import './style.css';
import globals from './globals';
class ResetPassword extends Component {
  state = {
    isProgressing: false,
    response: null
  }

  enterProgressing = (status) => {
    this.setState({ isProgressing: status });
  }

  authRespCallback = (resp) => {
    this.setState({ response: resp});
  }

  render() {

    const pageWrapperThemeClass = globals.theme === 'light' ? 'LightLandingPageWrapper' : 'DarkLandingPageWrapper';
    const pageInnerThemeClass = globals.theme === 'light' ? 'LightLandingPageInnerWrapper' : 'DarkLandingPageInnerWrapper';
    const formGroupThemeClass = globals.theme === 'light' ? 'LightFormGroupWrapper' : 'DarkFormGroupWrapper';
    const headerDescriptionClass = globals.theme === 'light' ? 'lightHeaderDescription' : 'darkHeaderDescription';
    // read token sent in the email
    const currentSearchParams = window.location.search;
    const token = currentSearchParams.split('?token=')[1];

    let submitBtnText = 'Reset Password';
    if (this.state.isProgressing) {
      submitBtnText = (<span><i className="fa fa-spinner fa-spin"></i> Verifying..</span>);
    }

    return (
      <div className={'displayFlex landingPageWrapper container-fluid ' + pageWrapperThemeClass}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Reset Password</title>
        </Helmet>
        <div className={'landingPageInnerWidth'}>
          <Back />
          <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
            <div className='signUpWrapper'>
              <div className={'addPaddTop ' + headerDescriptionClass}>
                Reset Password
              </div>
              <div className='descriptionText'>
                Hello! Reset your password
              </div>
              <ErrorMsg response={this.state.response} /> 
              <form className={formGroupThemeClass} 
                onChange={() => { this.setState({response: null})}}
                onSubmit={(e) => {
                  e.preventDefault();
                  this.enterProgressing(true);
                  if (this.password.value === this.confirmPassword.value) {
                    resetPassword(token, this.password.value).then( ( resp) => {
                      this.enterProgressing(false);
                      alert("Password has been reset successfully");
                      window.location.href = '/ui';
                    })
                    .catch( ( resp ) => {
                      this.enterProgressing(false);
                      this.setState({response: resp});
                    });
                  } else {
                    alert('Passwords don\'t match');
                  }
                }}>
                <div className='formInput'>
                  <label className='formLabel'>
                    Enter new password
                  </label>
                  <input type="password" ref={(input) => { this.password = input; }} />
                </div>
                <div className='formInput'>
                  <label className='formLabel'>
                    Confirm new password
                  </label>
                  <input type="password" ref={(input) => { this.confirmPassword = input; }} />
                </div>
                <div className='signInbtn'>
                  <a><button type="submit">{submitBtnText}</button></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword
