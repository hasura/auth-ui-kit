import React, { Component } from "react";

import {Route, Redirect, BrowserRouter as Router} from "react-router-dom";
import Home from "./Home";
import Username from "./Username";
import Email from "./Email";
import Mobile from "./Mobile";
import MobileOtp from "./MobileOtp";
import ForgotPassword from "./ForgotPassword";
import ChangePassword from "./ChangePassword";
import globals from './globals';
import SignUpHome from './SignUpHome';
import SignUpUsername from './SignUpUsername';
import SignUpEmail from './SignUpEmail';
import SignUpMobile from './SignUpMobile';
import SignUpMobileOtp from './SignUpMobileOtp';
import getQueryVariable from './utils';

class Main extends Component {
  componentDidMount() {
    const redirectParam = getQueryVariable('redirect_url');
    window.localStorage.setItem("redirect_url", redirectParam);
  }
  render() {
    let activeProvider = null;
    if (globals.username) {
      activeProvider = 'username'
    } else if (globals.email) {
      activeProvider = 'email';
    } else if (globals.mobile) {
      activeProvider = 'mobile';
    } else if (globals.mobileOtp) {
      activeProvider = 'mobile-otp';
    }
    const signinRedirectUrl = "/signin/" + activeProvider;
    const signupRedirectUrl = "/signup/" + activeProvider;
    return (
      <Router>
        <div>
          <div className="content">
            <Route exact path="/v1/ui/" render={() => (
              // check if only one provider is enabled. and redirect accordingly.
              (globals.username?1:0)+(globals.email?1:0)+(globals.mobile?1:0)+(globals.mobileOtp?1:0) === 1
                ? (
                  <Redirect to={signinRedirectUrl}/>
                ) : (
                  <Home />
                )
            )} />
            <Route exact path="/v1/ui/signin/username" component={Username}/>
            <Route exact path="/v1/ui/signin/email" component={Email}/>
            <Route exact path="/v1/ui/signin/mobile" component={Mobile}/>
            <Route exact path="/v1/ui/signin/mobile-otp" component={MobileOtp}/>
            <Route exact path="/v1/ui/forgot-password" component={ForgotPassword}/>
            <Route exact path="/v1/ui/change-password" component={ChangePassword}/>
            <Route exact path="/v1/ui/signup" render={() => (
              // check if only one provider is enabled. and redirect accordingly.
              (globals.username?1:0)+(globals.email?1:0)+(globals.mobile?1:0)+(globals.mobileOtp?1:0) === 1
                ? (
                  <Redirect to={signupRedirectUrl}/>
                ) : (
                  <SignUpHome />
                )
            )}/>
            <Route exact path="/v1/ui/signup/username" component={SignUpUsername}/>
            <Route exact path="/v1/ui/signup/email" component={SignUpEmail}/>
            <Route exact path="/v1/ui/signup/mobile" component={SignUpMobile}/>
            <Route exact path="/v1/ui/signup/mobile-otp" component={SignUpMobileOtp}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
