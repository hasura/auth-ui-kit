import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Username from "./Username";
import Email from "./Email";
import Mobile from "./Mobile";
import MobileOtp from "./MobileOtp";
import ForgotPassword from "./ForgotPassword";
import ChangePassword from "./ChangePassword";
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/username" component={Username}/>
            <Route path="/email" component={Email}/>
            <Route path="/mobile" component={Mobile}/>
            <Route path="/mobile-otp" component={MobileOtp}/>
            <Route path="/forgot-password" component={ForgotPassword}/>
            <Route path="/change-password" component={ChangePassword}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
