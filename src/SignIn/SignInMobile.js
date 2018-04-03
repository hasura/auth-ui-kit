import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import SocialLoginWrapper from '../SocialLogin/SocialLoginWrapper';
import SignUpMessage from '../SignUp/SignUpMessage';
import Back from '../Common/Back';
import ErrorMsg from '../Common/ErrorMsg';
import {
  mobilePasswordSignIn,
  mobilePasswordVerify,
  resendMobilePasswordOtp,
  sendForgotPasswordOTP,
  resetMobilePassword,
  handleAuthResponse,
} from '../Common/api';
import globals from '../Common/globals';

import '../style.css';

class SignInMobile extends Component {
  constructor() {
    super();
    this.state = {
      isProgressing: false,
      response: null,
    };
    this.state.isNotVerified = false;
    this.state.enableForgotPassword = false;
    this.state.mobile_number = '';
    this.state.country_code = '';
  }
  enterProgressing = status => {
    this.setState({ isProgressing: status });
  };

  authRespCallback = resp => {
    this.setState({ response: resp });
  };
  toggleForgotPassword() {
    this.setState({
      ...this.state,
      enableForgotPassword: !this.state.enableForgotPassword,
    });
  }
  handleLogin(e) {
    e.preventDefault();
    this.enterProgressing(true);
    mobilePasswordSignIn(
      this.mobile.value,
      this.password.value,
      this.country_code.value
    )
      .then(resp => {
        this.enterProgressing(false);
        handleAuthResponse(resp, this.authRespCallback);
      })
      .catch(resp => {
        if (resp.code === 'not_verified') {
          this.setState({
            ...this.state,
            mobile_number: this.mobile.value,
            country_code: this.country_code.value,
            isNotVerified: true,
          });
        }
        // alert("Login failed: " + JSON.stringify(resp));
        this.enterProgressing(false);
        this.setState({ response: resp });
      });
  }
  handleVerification(e) {
    e.preventDefault(e);
    this.enterProgressing(true);
    mobilePasswordVerify(
      this.state.mobile_number,
      this.state.country_code,
      this.otp.value
    )
      .then(resp => {
        this.enterProgressing(false);
        window.location.href = '/ui/login/mobile';
      })
      .catch(resp => {
        this.enterProgressing(false);
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
    let submitBtnText = 'Login';
    if (this.state.isProgressing) {
      submitBtnText = (
        <span>
          <i className="fa fa-spinner fa-spin" /> Logging in..
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
          <title>Login with Mobile</title>
        </Helmet>
        {!this.state.enableForgotPassword ? (
          <div className={'landingPageInnerWidth'}>
            <Back backUrl={'/ui'} />
            <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
              <div className="signUpWrapper">
                <div className={headerDescriptionClass}>Login</div>
                <div className="descriptionText">
                  Hello! Login with your mobile number
                </div>
                <ErrorMsg response={this.state.response} />
                <form
                  onChange={() => {
                    this.setState({ response: null });
                  }}
                  className={formGroupThemeClass}
                >
                  {!this.state.isNotVerified ? (
                    <div>
                      <div key="1001" className="formInput">
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
                      <div className="linkDescription forgotPassword descriptionText">
                        <a onClick={this.toggleForgotPassword.bind(this)}>
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div key="1000" className="formInput">
                      <input
                        type="text"
                        placeholder="otp"
                        ref={input => {
                          this.otp = input;
                        }}
                      />
                      <div className="">
                        Looks like you haven{"'"}t verified your mobile number.
                        Please verify your mobile by clicking on the send otp
                        link below.<br />
                        <a
                          href=""
                          onClick={this.resendMobilePasswordOtp.bind(this)}
                        >
                          Send OTP
                        </a>
                      </div>
                    </div>
                  )}
                  <div className="signInbtn">
                    {!this.state.isNotVerified ? (
                      <a>
                        <button
                          data-button-id="signup"
                          onClick={this.handleLogin.bind(this)}
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
            <SignUpMessage location={this.props.location} />
          </div>
        ) : (
          <ForgotPassword
            location={this.props.location}
            toggleForgotPassword={this.toggleForgotPassword.bind(this)}
          />
        )}
      </div>
    );
  }
}

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      isProgressing: false,
      response: null,
    };
    this.state.forgotPasswordInitiated = false;
    this.state.mobile_number = '';
    this.state.country_code = '';
  }
  enterProgressing = status => {
    this.setState({ isProgressing: status });
  };

  authRespCallback = resp => {
    this.setState({ response: resp });
  };
  sendForgotPasswordOTP(e) {
    e.preventDefault();
    this.enterProgressing(true);
    sendForgotPasswordOTP(this.mobile.value, this.country_code.value)
      .then(resp => {
        this.setState({
          ...this.state,
          mobile_number: this.mobile.value,
          country_code: this.country_code.value,
          forgotPasswordInitiated: true,
        });
        return;
      })
      .catch(resp => {
        this.enterProgressing(false);
        this.setState({ response: resp });
        return Promise.reject();
      });
  }
  handleResetMobilePassword(e) {
    e.preventDefault();
    this.enterProgressing(true);
    if (this.forgot_password.value === this.confirm_password.value) {
      resetMobilePassword(
        this.state.mobile_number,
        this.state.country_code,
        this.forgot_otp.value,
        this.forgot_password.value
      )
        .then(resp => {
          this.enterProgressing(false);
          window.location.href = '/ui';
        })
        .catch(resp => {
          this.enterProgressing(false);
          this.setState({ response: resp });
        });
    } else {
      alert("Password doesn't match");
    }
  }
  render() {
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
    let sendBtnText = 'Send OTP';
    if (this.state.isProgressing) {
      sendBtnText = (
        <span>
          <i className="fa fa-spinner fa-spin" /> Sending OTP..
        </span>
      );
    }
    return (
      <div className={'landingPageInnerWidth'}>
        <Back />
        <div className={'backBtn'} onClick={this.props.toggleForgotPassword}>
          <i className="fa fa-chevron-left" aria-hidden="true" />
          Back
        </div>
        <div className={'landingPageInnerWrapper ' + pageInnerThemeClass}>
          <div
            className="hide go_back"
            onClick={this.props.toggleForgotPassword}
          >
            Go back
          </div>
          <div className="signUpWrapper">
            <div className={headerDescriptionClass}>Forgot password ?</div>
            <div className="descriptionText">
              Enter your registered mobile number to get an OTP to reset your
              password
            </div>
            <ErrorMsg response={this.state.response} />
            <form
              className={formGroupThemeClass}
              onChange={() => {
                this.setState({ response: null });
              }}
            >
              {!this.state.forgotPasswordInitiated ? (
                <div>
                  <div key="1002" className="formInput">
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
                      <label className="formLabel">Enter mobile number</label>
                      <input
                        type="text"
                        ref={input => {
                          this.mobile = input;
                        }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div key="1003" className="formInput">
                    <input
                      type="text"
                      placeholder="OTP"
                      ref={input => {
                        this.forgot_otp = input;
                      }}
                    />
                  </div>
                  <div className="formInput">
                    <input
                      type="password"
                      placeholder="Password"
                      ref={input => {
                        this.forgot_password = input;
                      }}
                    />
                  </div>
                  <div className="formInput">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      ref={input => {
                        this.confirm_password = input;
                      }}
                    />
                  </div>
                </div>
              )}
              <div className="signInbtn">
                {!this.state.forgotPasswordInitiated ? (
                  <a>
                    <button
                      data-button-id="send-otp"
                      onClick={this.sendForgotPasswordOTP.bind(this)}
                    >
                      {sendBtnText}
                    </button>
                  </a>
                ) : (
                  <a>
                    <button
                      data-button-id="reset-mobile"
                      onClick={this.handleResetMobilePassword.bind(this)}
                    >
                      Reset Password
                    </button>
                  </a>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInMobile;
