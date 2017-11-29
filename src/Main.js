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
class Main extends Component {
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
    const redirectUrl = "/" + activeProvider;
    return (
      <Router>
        <div>
          <div className="content">
            <Route exact path="/" render={() => (
              // check if only one provider is enabled. and redirect accordingly.
              (globals.username?1:0)+(globals.email?1:0)+(globals.mobile?1:0)+(globals.mobileOtp?1:0) === 1
                ? (
                  <Redirect to={redirectUrl}/>
                ) : (
                  <Home />
                )
            )} />
            <Route exact path="/signin/username" component={Username}/>
            <Route exact path="/signin/email" component={Email}/>
            <Route exact path="/signin/mobile" component={Mobile}/>
            <Route exact path="/signin/mobile-otp" component={MobileOtp}/>
            <Route exact path="/forgot-password" component={ForgotPassword}/>
            <Route exact path="/change-password" component={ChangePassword}/>
            <Route exact path="/signup/username" component={SignUpUsername}/>
            <Route exact path="/signup/email" component={SignUpEmail}/>
            <Route exact path="/signup/mobile" component={SignUpMobile}/>
            <Route exact path="/signup/mobile-otp" component={SignUpMobileOtp}/>
            <Route exact path="/signup" component={SignUpHome}/>

          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
