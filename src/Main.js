import React, { Component } from "react";

import {Route, Redirect, Switch, BrowserRouter as Router} from "react-router-dom";
import Home from "./Home";
import Username from "./Username";
import Email from "./Email";
import Mobile from "./Mobile";
import MobileOtp from "./MobileOtp";
import ForgotPasswordEmail from "./ForgotPasswordEmail";
import ResetPassword from "./ResetPassword";
import VerifyEmail from "./VerifyEmail";
import globals from './globals';
import SignUpHome from './SignUpHome';
import SignUpUsername from './SignUpUsername';
import SignUpEmail from './SignUpEmail';
import SignUpMobile from './SignUpMobile';
import SignUpMobileOtp from './SignUpMobileOtp';
import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';
import GithubLogin from './GithubLogin';
import LinkedinLogin from './LinkedinLogin';
import Restricted from './Restricted';
import NotFound from './NotFound';

class Main extends Component {
  render() {
    let activeProvider = null;
    if (globals.username) {
      activeProvider = 'username'
    } else if (globals.email) {
      activeProvider = 'email';
    } else if (globals.mobilePass) {
      activeProvider = 'mobile';
    } else if (globals.mobileOtp) {
      activeProvider = 'mobile-otp';
    }
    const signinRedirectUrl = "/ui/login/" + activeProvider;
    const signupRedirectUrl = "/ui/signup/" + activeProvider;
    return (
      <Router>
        <div>
          <div className="content">
          <Switch>
            <Route exact path="/ui" render={(props) => (
              // check if only one provider is enabled. and redirect accordingly.
              (globals.username?1:0)+(globals.email?1:0)+(globals.mobilePass?1:0)+(globals.mobileOtp?1:0) === 1
                ? (
                  <Redirect to={signinRedirectUrl}/>
                ) : (
                  <Home location={props.location} />
                )
            )} />
            <Route exact path="/ui/login/username" component={Username}/>
            <Route exact path="/ui/login/email" component={Email}/>
            <Route exact path="/ui/login/mobile" component={Mobile}/>
            <Route exact path="/ui/login/mobile-otp" component={MobileOtp}/>
            <Route exact path="/ui/forgot-password" component={ForgotPasswordEmail}/>
            <Route exact path="/ui/reset-password" component={ResetPassword}/>
            <Route exact path="/ui/verify-email" component={VerifyEmail}/>
            <Route exact path="/ui/signup" render={(props) => (
              // check if only one provider is enabled. and redirect accordingly.
              (globals.username?1:0)+(globals.email?1:0)+(globals.mobilePass?1:0)+(globals.mobileOtp?1:0) === 1
                ? (
                  <Redirect to={signupRedirectUrl}/>
                ) : (
                  <SignUpHome location={props.location} />
                )
            )}/>
            <Route exact path="/ui/signup/username" component={SignUpUsername}/>
            <Route exact path="/ui/signup/email" component={SignUpEmail}/>
            <Route exact path="/ui/signup/mobile" component={SignUpMobile}/>
            <Route exact path="/ui/signup/mobile-otp" component={SignUpMobileOtp}/>
            <Route exact path="/ui/restricted" component={Restricted}/>
            <Route exact path="/ui/facebook-response" component={FacebookLogin}/>
            <Route exact path="/ui/google-response" component={GoogleLogin}/>
            <Route exact path="/ui/github-response" component={GithubLogin}/>
            <Route exact path="/ui/linkedin-response" component={LinkedinLogin}/>
            <Route component={NotFound} status={404} />
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
