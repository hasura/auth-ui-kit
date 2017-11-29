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
            <Route path="/username" component={Username}/>
            <Route path="/email" component={Email}/>
            <Route path="/mobile" component={Mobile}/>
            <Route path="/mobile-otp" component={MobileOtp}/>
            <Route path="/forgot-password" component={ForgotPassword}/>
            <Route path="/change-password" component={ChangePassword}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
