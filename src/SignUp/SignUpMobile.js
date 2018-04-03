import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import SocialLoginWrapper from '../SocialLogin/SocialLoginWrapper';
import SignInMessage from '../SignIn/SignInMessage';
import Back from '../Common/Back';
import ErrorMsg from '../Common/ErrorMsg';
import {
  mobilePasswordSignUp,
  resendMobilePasswordOtp,
  mobilePasswordVerify,
  handleAuthResponse,
} from '../Common/api';
import globals from '../Common/globals';
import '../style.css';
class SignUpMobile extends Component {
  constructor() {
    super();
    this.state = {
      isProgressing: false,
      response: null,
    };
    this.state.isFirstStepCompleted = false;
    this.state.mobile_number = '';
    this.state.country_code = '';
  }
  enterProgressing = status => {
    this.setState({ isProgressing: status });
  };

  authRespCallback = resp => {
    this.setState({ response: resp });
  };
  handleSignup(e) {
    e.preventDefault();
    this.enterProgressing(true);
    this.setState({ response: null });
    if (this.password.value === this.confirm_password.value) {
      mobilePasswordSignUp(
        this.mobile.value,
        this.password.value,
        this.country_code.value
      )
        .then(resp => {
          this.enterProgressing(false);
          this.setState({
            ...this.state,
            mobile_number: this.mobile.value,
            country_code: this.country_code.value,
            isFirstStepCompleted: true,
          });
          return;
        })
        .catch(resp => {
          this.enterProgressing(false);
          this.setState({ response: resp });
        });
    } else {
      this.enterProgressing(false);
      alert("Passwords don't match. Try again");
    }
  }
  handleVerification(e) {
    e.preventDefault(e);
    mobilePasswordVerify(
      this.state.mobile_number,
      this.state.country_code,
      this.otp.value
    )
      .then(resp => {
        this.enterProgressing(false);
        handleAuthResponse(resp, this.authRespCallback);
      })
      .catch(resp => {
        this.setState({ response: resp });
      });
  }
  resendMobilePasswordOtp(e) {
    e.preventDefault();
    resendMobilePasswordOtp(this.state.mobile_number, this.state.country_code)
      .then(resp => {
        alert(
          'OTP sent to mobile with number ' +
            this.state.mobile_number +
            ' again'
        );
      })
      .catch(resp => {
        alert('Error sending otp again');
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
    const formGroupThemeClass =
      globals.theme === 'light'
        ? 'LightFormGroupWrapper'
        : 'DarkFormGroupWrapper';
    const headerDescriptionClass =
      globals.theme === 'light'
        ? 'lightHeaderDescription'
        : 'darkHeaderDescription';
    let submitBtnText = 'Sign up';
    if (this.state.isProgressing) {
      submitBtnText = (
        <span>
          <i className="fa fa-spinner fa-spin" /> Signing up..
        </span>
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
          <title>Sign up with Mobile</title>
        </Helmet>
        <div className={'landingPageInnerWidth'}>
          <Back backUrl={'/ui/signup'} />
          <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
            <div className="signUpWrapper">
              <div className={headerDescriptionClass}>Sign Up</div>
              <div className="descriptionText">
                Hello! Sign up with your mobile
              </div>
              <ErrorMsg response={this.state.response} />
              <form
                className={formGroupThemeClass}
                onChange={() => {
                  this.setState({ response: null });
                }}
              >
                {!this.state.isFirstStepCompleted ? (
                  <div>
                    <div className="formInput">
                      <div className="countryInput">
                        <label className="formLabel">Country Code</label>
                        <input
                          type="text"
                          ref={input => {
                            this.country_code = input;
                          }}
                        />
                        {/* <i className="fa fa-caret-down" aria-hidden="true"></i> */}
                      </div>
                      <div className="mobileInput">
                        <label className="formLabel">Mobile Number</label>
                        <input
                          type="text"
                          ref={input => {
                            this.mobile = input;
                          }}
                        />
                      </div>
                    </div>
                    <div className="formInput">
                      <label className="formLabel">Password</label>
                      <input
                        type="password"
                        ref={input => {
                          this.password = input;
                        }}
                      />
                    </div>
                    <div className="formInput">
                      <label className="formLabel">Confirm Password</label>
                      <input
                        type="password"
                        ref={input => {
                          this.confirm_password = input;
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="formInput">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      ref={input => {
                        this.otp = input;
                      }}
                    />
                    <div className="resendOtpText">
                      Haven{"'"}t received OTP yet?{' '}
                      <a
                        href=""
                        onClick={this.resendMobilePasswordOtp.bind(this)}
                      >
                        {' '}
                        Resend{' '}
                      </a>
                    </div>
                  </div>
                )}
                <div className="signInbtn">
                  {!this.state.isFirstStepCompleted ? (
                    <a>
                      <button
                        data-button-id="signup"
                        onClick={this.handleSignup.bind(this)}
                      >
                        {submitBtnText}
                      </button>
                    </a>
                  ) : (
                    <a>
                      <button
                        data-button-id="verify-mobile"
                        onClick={this.handleVerification.bind(this)}
                      >
                        Verify Mobile
                      </button>
                    </a>
                  )}
                </div>
              </form>
              <SocialLoginWrapper />
            </div>
          </div>
          <SignInMessage location={this.props.location} />
        </div>
      </div>
    );
  }
}

export default SignUpMobile;
