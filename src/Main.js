import React, { Component } from 'react';

// import {Route, Redirect, Switch, BrowserRouter as Router} from "react-router-dom";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import SignInHome from './SignIn/SignInHome';
import SignInUsername from './SignIn/SignInUsername';
import SignInEmail from './SignIn/SignInEmail';
import SignInMobile from './SignIn/SignInMobile';
import SignInMobileOtp from './SignIn/SignInMobileOtp';
import ForgotPasswordEmail from './EmailActions/ForgotPasswordEmail';
import ResetPassword from './EmailActions/ResetPassword';
import VerifyEmail from './EmailActions/VerifyEmail';
import Restricted from './Advanced/Restricted';
// import globals from './globals';
import SignUpHome from './SignUp/SignUpHome';
import SignUpUsername from './SignUp/SignUpUsername';
import SignUpEmail from './SignUp/SignUpEmail';
import SignUpMobile from './SignUp/SignUpMobile';
import SignUpMobileOtp from './SignUp/SignUpMobileOtp';
import FacebookLogin from './SocialLogin/FacebookLogin';
import GoogleLogin from './SocialLogin/GoogleLogin';
import GithubLogin from './SocialLogin/GithubLogin';
import LinkedinLogin from './SocialLogin/LinkedinLogin';
import Logout from './Logout/Logout';
import NotFound from './Advanced/NotFound';

class Main extends Component {
  render() {
    /*
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
    */
    return (
      <Router>
        <div>
          <div className="content">
            <Switch>
              {/*
            <Route exact path="/ui" render={(props) => (
              // check if only one provider is enabled. and redirect accordingly.
              (globals.username?1:0)+(globals.email?1:0)+(globals.mobilePass?1:0)+(globals.mobileOtp?1:0) === 1
                ? (
                  <Redirect to={signinRedirectUrl}/>
                ) : (
                  <Home location={props.location} />
                )
            )} />
          */}
              <Route exact path="/ui" component={SignInHome} />
              <Route exact path="/ui/login" component={SignInHome} />
              <Route exact path="/ui/login/username" component={SignInUsername} />
              <Route exact path="/ui/login/email" component={SignInEmail} />
              <Route exact path="/ui/login/mobile" component={SignInMobile} />
              <Route exact path="/ui/login/mobile-otp" component={SignInMobileOtp} />
              <Route
                exact
                path="/ui/forgot-password"
                component={ForgotPasswordEmail}
              />
              <Route
                exact
                path="/ui/reset-password"
                component={ResetPassword}
              />
              <Route exact path="/ui/verify-email" component={VerifyEmail} />
              <Route exact path="/ui/signup" component={SignUpHome} />
              {/*
            <Route exact path="/ui/signup" render={(props) => (
              // check if only one provider is enabled. and redirect accordingly.
              (globals.username?1:0)+(globals.email?1:0)+(globals.mobilePass?1:0)+(globals.mobileOtp?1:0) === 1
                ? (
                  <Redirect to={signupRedirectUrl} location={props.location} />
                ) : (
                  <SignUpHome location={props.location} />
                )
            )}/>
          */}
              <Route
                exact
                path="/ui/signup/username"
                component={SignUpUsername}
              />
              <Route exact path="/ui/signup/email" component={SignUpEmail} />
              <Route exact path="/ui/signup/mobile" component={SignUpMobile} />
              <Route
                exact
                path="/ui/signup/mobile-otp"
                component={SignUpMobileOtp}
              />
              <Route exact path="/ui/restricted" component={Restricted} />
              <Route
                exact
                path="/ui/facebook-response"
                component={FacebookLogin}
              />
              <Route exact path="/ui/google-response" component={GoogleLogin} />
              <Route exact path="/ui/github-response" component={GithubLogin} />
              <Route
                exact
                path="/ui/linkedin-response"
                component={LinkedinLogin}
              />

              <Route exact path="/ui/logout" component={Logout} />
              <Route component={NotFound} status={404} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
